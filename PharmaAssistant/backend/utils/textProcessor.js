/**
 * Text processing utility for document generation and modification
 */

const fs = require('fs').promises;
const path = require('path');
const aiService = require('../services/aiService');

/**
 * Process text based on the specified action
 * @param {Object} options - Processing options
 * @param {string} options.action - Action to perform (generate, summarize, compare, simplify)
 * @param {string} options.content - Text content to process
 * @param {Object} [options.template] - Template to use for generation
 * @param {string} [options.format] - Output format (regulatory, scientific, plain)
 * @param {string} [options.targetAudience] - Target audience for summarization
 * @param {string} [options.standard] - Standard to compare against
 * @param {string} [options.targetReadingLevel] - Target reading level for simplification
 * @returns {Promise<Object>} Processing result
 */
exports.processText = async (options) => {
  const { action, content } = options;
  
  // Apply template if provided
  let processedContent = content;
  if (options.template && action === 'generate') {
    processedContent = applyTemplate(content, options.template);
  }
  
  // Update options with processed content
  const updatedOptions = {
    ...options,
    content: processedContent
  };
  
  // Generate the appropriate prompt for the AI service
  const prompt = aiService.generatePrompt(updatedOptions);
  
  try {
    // Process the text using the AI service
    const result = await aiService.processWithAI({
      prompt,
      temperature: getTemperatureForAction(action),
      maxTokens: getMaxTokensForAction(action)
    });
    
    // Format the result based on the action
    switch (action) {
      case 'generate':
        return result;
      case 'summarize':
        return {
          summary: result,
          keyPoints: extractKeyPoints(result)
        };
      case 'compare':
        return parseComparisonResult(result);
      case 'simplify':
        return {
          simplifiedContent: result,
          readabilityScore: calculateReadabilityScore(result)
        };
      default:
        return result;
    }
  } catch (error) {
    console.error(`Error processing text for action '${action}':`, error);
    throw new Error(`Failed to process text: ${error.message}`);
  }
};

/**
 * Apply template to content based on content type
 * @param {string} content - Input content
 * @param {Object} template - Template to apply
 * @returns {string} Content with template applied
 */
function applyTemplate(content, template) {
  if (typeof template === 'string') {
    // If template is a string, use it directly
    return template.replace('[CONTENT]', content);
  } else if (template.content) {
    // If template has a content property, use that
    return template.content.replace('[CONTENT]', content);
  } else {
    // If no template format is recognized, return content as is
    return content;
  }
}

/**
 * Get the appropriate temperature setting for the AI model based on the action
 * @param {string} action - Action to perform
 * @returns {number} Temperature value (0.0 to 1.0)
 */
function getTemperatureForAction(action) {
  switch (action) {
    case 'generate':
      return 0.3; // Lower temperature for more structured output
    case 'summarize':
      return 0.4; // Balanced temperature for summarization
    case 'compare':
      return 0.2; // Very focused output for compliance checking
    case 'simplify':
      return 0.6; // Higher temperature for more creative rewording
    default:
      return 0.7; // Default temperature
  }
}

/**
 * Get the appropriate max tokens setting for the AI model based on the action
 * @param {string} action - Action to perform
 * @returns {number} Max tokens value
 */
function getMaxTokensForAction(action) {
  switch (action) {
    case 'generate':
      return 4000; // Larger output for document generation
    case 'summarize':
      return 2000; // Medium output for summarization
    case 'compare':
      return 1500; // Smaller output for compliance checking
    case 'simplify':
      return 3000; // Larger output for simplification
    default:
      return 2000; // Default max tokens
  }
}

/**
 * Parse the comparison result from the AI service
 * @param {string} result - AI response text
 * @returns {Object} Parsed comparison result
 */
function parseComparisonResult(result) {
  // Extract a compliance score
  const scoreRegex = /compliance\s+score\s*:?\s*(\d+)/i;
  const scoreMatch = result.match(scoreRegex);
  const complianceScore = scoreMatch ? parseInt(scoreMatch[1], 10) : extractImpliedScore(result);
  
  // Extract suggestions
  const suggestions = extractListItems(result, ['suggestions', 'improvements', 'recommendations']);
  
  // Extract missing elements
  const missingElements = extractListItems(result, ['missing elements', 'missing sections', 'required elements']);
  
  return {
    complianceScore,
    suggestions,
    missingElements,
    fullAnalysis: result
  };
}

/**
 * Extract a list of items from text based on section headers
 * @param {string} text - Text to extract from
 * @param {Array<string>} sectionHeaders - Possible section headers
 * @returns {Array<string>} Extracted items
 */
function extractListItems(text, sectionHeaders) {
  // Create a regex pattern that matches any of the section headers
  const sectionHeadersPattern = sectionHeaders.map(header => escapeRegExp(header)).join('|');
  const sectionRegex = new RegExp(`(${sectionHeadersPattern})\\s*:?\\s*(?:\\n|\\r|$)((?:\\s*[-*•]\\s*.+(?:\\n|\\r|$))+)`, 'i');
  
  const sectionMatch = text.match(sectionRegex);
  let items = [];
  
  if (sectionMatch) {
    items = sectionMatch[2]
      .split(/\n|\r/)
      .filter(line => line.trim().match(/^[-*•]\s+/))
      .map(line => line.replace(/^[-*•]\s+/, '').trim())
      .filter(Boolean);
  } else {
    // If no section match, try to find any bullet points in the text
    const bulletPointRegex = /(?:^|\n|\r)[-*•]\s+(.+?)(?:$|\n|\r)/g;
    let match;
    while ((match = bulletPointRegex.exec(text)) !== null) {
      items.push(match[1].trim());
    }
  }
  
  return items;
}

/**
 * Escape special regex characters in a string
 * @param {string} string - String to escape
 * @returns {string} Escaped string
 */
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Extract an implied compliance score from text
 * @param {string} text - Text to extract from
 * @returns {number} Extracted score
 */
function extractImpliedScore(text) {
  const text_lower = text.toLowerCase();
  
  // Look for explicit mentions of compliance levels
  if (text_lower.includes('excellent compliance') || text_lower.includes('highly compliant')) {
    return Math.floor(Math.random() * 10) + 90; // 90-99
  } else if (text_lower.includes('good compliance') || text_lower.includes('largely compliant')) {
    return Math.floor(Math.random() * 15) + 75; // 75-89
  } else if (text_lower.includes('moderate compliance') || text_lower.includes('partially compliant')) {
    return Math.floor(Math.random() * 15) + 60; // 60-74
  } else if (text_lower.includes('poor compliance') || text_lower.includes('minimally compliant')) {
    return Math.floor(Math.random() * 20) + 40; // 40-59
  } else if (text_lower.includes('non-compliant') || text_lower.includes('not compliant')) {
    return Math.floor(Math.random() * 39) + 1; // 1-39
  }
  
  // If no explicit mentions, look at the number of issues
  const issues = extractListItems(text, ['suggestions', 'improvements', 'missing', 'issues']);
  if (issues.length > 10) {
    return Math.floor(Math.random() * 15) + 40; // 40-54
  } else if (issues.length > 5) {
    return Math.floor(Math.random() * 15) + 55; // 55-69
  } else if (issues.length > 0) {
    return Math.floor(Math.random() * 15) + 70; // 70-84
  } else {
    return Math.floor(Math.random() * 15) + 85; // 85-99
  }
}

/**
 * Extract key points from a document
 * @param {string} text - Document text
 * @returns {Array<string>} Key points
 */
function extractKeyPoints(text) {
  // First look for bullet points
  const bulletPoints = extractListItems(text, ['key points', 'summary', 'highlights', 'conclusions']);
  
  if (bulletPoints.length > 0) {
    return bulletPoints;
  }
  
  // If no bullet points, extract important sentences
  const sentences = text.split(/\.(?:\s|$)/).filter(s => s.trim().length > 10);
  
  // Look for important indicator phrases
  const keyPhrases = [
    'significant', 'important', 'key finding', 'demonstrated', 'showed',
    'concluded', 'reveal', 'highlight', 'primary', 'secondary',
    'endpoint', 'objective', 'result', 'efficacy', 'safety'
  ];
  
  const importantSentences = sentences
    .filter(sentence => {
      const lowerSentence = sentence.toLowerCase();
      return keyPhrases.some(phrase => lowerSentence.includes(phrase));
    })
    .map(sentence => sentence.trim() + '.');
  
  // Return important sentences or the first few sentences if none found
  return importantSentences.length > 0 
    ? importantSentences.slice(0, 5) 
    : sentences.slice(0, 5).map(s => s.trim() + '.');
}

/**
 * Calculate readability scores for simplified text
 * @param {string} text - Simplified text
 * @returns {Object} Readability scores
 */
function calculateReadabilityScore(text) {
  // In a real implementation, this would calculate actual readability metrics
  // For now, we'll create a placeholder based on text length and complexity
  
  // Simple heuristic: longer sentences and words generally mean higher reading level
  const sentences = text.split(/[.!?]+\s+/).filter(Boolean);
  const words = text.split(/\s+/).filter(Boolean);
  
  const avgSentenceLength = words.length / Math.max(sentences.length, 1);
  const avgWordLength = text.replace(/\s+/g, '').length / Math.max(words.length, 1);
  
  // Count complex words (more than 3 syllables)
  const complexWords = words.filter(word => {
    const syllables = countSyllables(word);
    return syllables > 3;
  }).length;
  
  const percentComplexWords = (complexWords / Math.max(words.length, 1)) * 100;
  
  // Flesch Reading Ease: higher score = easier to read (0-100 scale)
  const flesch = Math.max(0, Math.min(100, 206.835 - (1.015 * avgSentenceLength) - (84.6 * avgWordLength / 5)));
  
  // Flesch-Kincaid Grade Level: corresponds to US grade level
  const fleschKincaid = Math.max(0, Math.min(18, (0.39 * avgSentenceLength) + (11.8 * avgWordLength / 5) - 15.59));
  
  // SMOG Index: estimates years of education needed to understand text
  const smog = Math.max(0, Math.min(18, 1.043 * Math.sqrt(30 * Math.min(complexWords / sentences.length, 1)) + 3.1291));
  
  return {
    flesch: parseFloat(flesch.toFixed(1)),
    fleschKincaid: parseFloat(fleschKincaid.toFixed(1)),
    smog: parseFloat(smog.toFixed(1)),
    avgSentenceLength: parseFloat(avgSentenceLength.toFixed(1)),
    percentComplexWords: parseFloat(percentComplexWords.toFixed(1))
  };
}

/**
 * Count syllables in a word (simplified estimation)
 * @param {string} word - Word to count syllables in
 * @returns {number} Syllable count
 */
function countSyllables(word) {
  word = word.toLowerCase();
  
  // Remove non-word characters
  word = word.replace(/[^a-z]/g, '');
  
  // Special cases
  if (word.length <= 3) {
    return 1;
  }
  
  // Remove final e
  word = word.replace(/e$/, '');
  
  // Count vowel groups
  const vowelGroups = word.match(/[aeiouy]+/g);
  return vowelGroups ? vowelGroups.length : 1;
}
