const fs = require('fs');
const path = require('path');
const { processText } = require('../utils/textProcessor');
const { fetchTemplateById } = require('../utils/templateUtils');

/**
 * Generate a document based on user input and a selected template
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
exports.generateDocument = async (req, res) => {
  try {
    const { documentType, content, format } = req.body;
    
    if (!documentType || !content) {
      return res.status(400).json({
        status: 'error',
        message: 'Document type and content are required'
      });
    }
    
    // Get the appropriate template for the document type
    const template = await fetchTemplateById(documentType);
    
    if (!template) {
      return res.status(404).json({
        status: 'error',
        message: 'Template not found for the specified document type'
      });
    }
    
    // Process the user input against the template
    const generatedContent = await processText({
      action: 'generate',
      content,
      template,
      format
    });
    
    // Extract sections from the generated content
    const sections = extractSections(generatedContent);
    
    res.status(200).json({
      status: 'success',
      data: {
        generatedContent,
        sections
      }
    });
    
  } catch (error) {
    console.error('Error generating document:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error generating document'
    });
  }
};

/**
 * Summarize a document in regulatory format
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
exports.summarizeDocument = async (req, res) => {
  try {
    const { content, targetAudience } = req.body;
    
    if (!content) {
      return res.status(400).json({
        status: 'error',
        message: 'Content is required'
      });
    }
    
    // Process the user input for summarization
    const result = await processText({
      action: 'summarize',
      content,
      targetAudience: targetAudience || 'regulatory'
    });
    
    // Extract key points from the summary
    const keyPoints = extractKeyPoints(result.summary);
    
    res.status(200).json({
      status: 'success',
      data: {
        summary: result.summary,
        keyPoints
      }
    });
    
  } catch (error) {
    console.error('Error summarizing document:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error summarizing document'
    });
  }
};

/**
 * Compare document with regulatory standards
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
exports.compareDocument = async (req, res) => {
  try {
    const { content, standard } = req.body;
    
    if (!content || !standard) {
      return res.status(400).json({
        status: 'error',
        message: 'Content and standard are required'
      });
    }
    
    // Process the user input for compliance checking
    const result = await processText({
      action: 'compare',
      content,
      standard
    });
    
    res.status(200).json({
      status: 'success',
      data: {
        complianceScore: result.complianceScore,
        suggestions: result.suggestions,
        missingElements: result.missingElements
      }
    });
    
  } catch (error) {
    console.error('Error comparing document:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error comparing document'
    });
  }
};

/**
 * Rewrite document in plain language
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
exports.simplifyText = async (req, res) => {
  try {
    const { content, targetReadingLevel } = req.body;
    
    if (!content) {
      return res.status(400).json({
        status: 'error',
        message: 'Content is required'
      });
    }
    
    // Process the user input for simplification
    const result = await processText({
      action: 'simplify',
      content,
      targetReadingLevel: targetReadingLevel || 'general'
    });
    
    res.status(200).json({
      status: 'success',
      data: {
        simplifiedContent: result.simplifiedContent,
        readabilityScore: result.readabilityScore
      }
    });
    
  } catch (error) {
    console.error('Error simplifying text:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error simplifying text'
    });
  }
};

/**
 * Extract sections from generated content
 * @param {string} content - The generated document content
 * @returns {Array} Array of section objects with title and content
 */
function extractSections(content) {
  const sections = [];
  const sectionRegex = /## ([^\\n]+)\\n([\\s\\S]*?)(?=## |$)/g;
  
  let match;
  while ((match = sectionRegex.exec(content)) !== null) {
    sections.push({
      title: match[1].trim(),
      content: match[2].trim()
    });
  }
  
  return sections;
}

/**
 * Extract key points from a summary
 * @param {string} summary - The document summary
 * @returns {Array} Array of key points
 */
function extractKeyPoints(summary) {
  const keyPoints = [];
  const bulletPointRegex = /- ([^\\n]+)/g;
  
  let match;
  while ((match = bulletPointRegex.exec(summary)) !== null) {
    keyPoints.push(match[1].trim());
  }
  
  return keyPoints.length > 0 ? keyPoints : 
    summary.split('. ')
      .filter(sentence => sentence.length > 10)
      .slice(0, 5)
      .map(sentence => sentence.trim() + (sentence.endsWith('.') ? '' : '.'));
}
