const fs = require('fs').promises;
const path = require('path');

const templatesDir = path.join(__dirname, '../../data/templates');

/**
 * Fetch template by ID
 * @param {string} templateId - Template ID
 * @returns {Promise<Object>} Template object
 */
exports.fetchTemplateById = async (templateId) => {
  try {
    // If templateId is a full name, convert to appropriate template ID
    const normalizedTemplateId = normalizeTemplateId(templateId);
    
    // Determine the template file path
    const templatePath = path.join(templatesDir, `${normalizedTemplateId}.md`);
    
    // Read the template file
    const templateContent = await fs.readFile(templatePath, 'utf8');
    
    // Get template metadata
    const metadata = getTemplateMetadata(normalizedTemplateId);
    
    // Extract sections
    const sections = exports.extractTemplateSections(templateContent);
    
    return {
      id: normalizedTemplateId,
      ...metadata,
      content: templateContent,
      sections
    };
  } catch (error) {
    console.error(`Error fetching template ${templateId}:`, error);
    // Try to find a close match if exact template not found
    if (error.code === 'ENOENT') {
      const alternativeTemplate = await findAlternativeTemplate(templateId);
      if (alternativeTemplate) {
        return alternativeTemplate;
      }
    }
    return null;
  }
};

/**
 * Find alternative template when exact match is not found
 * @param {string} templateQuery - Template query
 * @returns {Promise<Object|null>} Alternative template or null
 */
async function findAlternativeTemplate(templateQuery) {
  try {
    // Get all templates
    const allTemplates = await exports.getAllTemplates();
    
    // Convert query to lowercase for better matching
    const queryLower = templateQuery.toLowerCase();
    
    // Look for partial matches in name, description or ID
    const matches = allTemplates.filter(template => {
      return (
        template.name.toLowerCase().includes(queryLower) ||
        template.description.toLowerCase().includes(queryLower) ||
        template.id.toLowerCase().includes(queryLower)
      );
    });
    
    if (matches.length > 0) {
      // Return the first match with full template content
      return exports.fetchTemplateById(matches[0].id);
    }
    
    // If no matches found, return default CSR template as fallback
    return exports.fetchTemplateById('csr-template');
  } catch (error) {
    console.error('Error finding alternative template:', error);
    return null;
  }
}

/**
 * Normalize template ID from various inputs
 * @param {string} input - Template input string
 * @returns {string} Normalized template ID
 */
function normalizeTemplateId(input) {
  const inputLower = input.toLowerCase();
  
  // Map common document names to template IDs
  const templateMap = {
    'csr': 'csr-template',
    'clinical study report': 'csr-template',
    'ib': 'ib-template',
    'investigator brochure': 'ib-template',
    'protocol': 'protocol-template',
    'clinical trial protocol': 'protocol-template',
    'pil': 'pil-template',
    'patient information leaflet': 'pil-template',
    'informed consent': 'pil-template'
  };
  
  // Check for direct matches in the map
  if (templateMap[inputLower]) {
    return templateMap[inputLower];
  }
  
  // Check for partial matches
  for (const [key, value] of Object.entries(templateMap)) {
    if (inputLower.includes(key)) {
      return value;
    }
  }
  
  // If input already has -template suffix, return as is
  if (inputLower.endsWith('-template')) {
    return inputLower;
  }
  
  // Otherwise, append -template suffix
  return `${inputLower}-template`;
}

/**
 * Get template metadata based on template ID
 * @param {string} templateId - Template ID
 * @returns {Object} Template metadata
 */
function getTemplateMetadata(templateId) {
  // Metadata for standard templates
  const templateMetadata = {
    'csr-template': {
      name: 'Clinical Study Report',
      description: 'ICH E3 compliant Clinical Study Report template',
      standardReference: 'ICH E3 Guideline',
      regulatoryBody: 'FDA, EMA',
      category: 'regulatory'
    },
    'ib-template': {
      name: 'Investigator Brochure',
      description: 'Standard Investigator Brochure template following ICH GCP guidelines',
      standardReference: 'ICH E6(R2) Guideline',
      regulatoryBody: 'FDA, EMA',
      category: 'regulatory'
    },
    'pil-template': {
      name: 'Patient Information Leaflet',
      description: 'Template for patient-facing information in plain language',
      standardReference: 'FDA & EMA Patient Labeling Guidelines',
      regulatoryBody: 'FDA, EMA',
      category: 'patient'
    },
    'protocol-template': {
      name: 'Clinical Trial Protocol',
      description: 'Protocol template for clinical trials',
      standardReference: 'ICH E6(R2) Guideline',
      regulatoryBody: 'FDA, EMA',
      category: 'regulatory'
    }
  };
  
  // Return metadata for known template or generate generic metadata
  if (templateMetadata[templateId]) {
    return templateMetadata[templateId];
  } else {
    // Generate generic metadata for unknown templates
    const name = templateId
      .replace('-template', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    
    return {
      name,
      description: `${name} document template`,
      standardReference: 'General Guidelines',
      regulatoryBody: 'Various',
      category: 'general'
    };
  }
}

/**
 * Extract sections from a template
 * @param {string} templateContent - Template content
 * @returns {Array<Object>} Array of section objects
 */
exports.extractTemplateSections = (templateContent) => {
  const sections = [];
  const sectionRegex = /## ([^\n]+)/g;
  
  let match;
  while ((match = sectionRegex.exec(templateContent)) !== null) {
    sections.push({
      title: match[1].trim(),
      index: match.index
    });
  }
  
  // Extract content for each section
  for (let i = 0; i < sections.length; i++) {
    const startIndex = sections[i].index;
    const endIndex = i < sections.length - 1 ? sections[i + 1].index : templateContent.length;
    
    // Extract the content (excluding the section title line)
    const sectionContent = templateContent
      .substring(startIndex, endIndex)
      .split('\n')
      .slice(1)
      .join('\n')
      .trim();
    
    sections[i].content = sectionContent;
    delete sections[i].index; // Remove the index property
  }
  
  return sections;
};

/**
 * Get all available templates
 * @returns {Promise<Array<Object>>} Array of template objects
 */
exports.getAllTemplates = async () => {
  try {
    // Read all template files in the templates directory
    const files = await fs.readdir(templatesDir);
    const templateFiles = files.filter(file => file.endsWith('.md'));
    
    // Process each template file
    const templates = [];
    
    for (const file of templateFiles) {
      const templateId = file.replace('.md', '');
      const templatePath = path.join(templatesDir, file);
      const templateContent = await fs.readFile(templatePath, 'utf8');
      
      // Extract sections from the template
      const sections = exports.extractTemplateSections(templateContent).map(section => section.title);
      
      // Get template metadata
      const metadata = getTemplateMetadata(templateId);
      
      templates.push({
        id: templateId,
        ...metadata,
        sections
      });
    }
    
    return templates;
  } catch (error) {
    console.error('Error getting all templates:', error);
    return [];
  }
};

/**
 * Apply template to user content
 * @param {string} templateId - Template ID
 * @param {string} content - User content
 * @returns {Promise<string>} Content with template applied
 */
exports.applyTemplate = async (templateId, content) => {
  try {
    // Fetch the template
    const template = await exports.fetchTemplateById(templateId);
    
    if (!template) {
      throw new Error(`Template not found: ${templateId}`);
    }
    
    // Extract key information from content
    const keyInfo = extractKeyInformation(content);
    
    // Apply the template with extracted information
    let appliedTemplate = template.content;
    
    // Replace placeholders with extracted info
    for (const [key, value] of Object.entries(keyInfo)) {
      appliedTemplate = appliedTemplate.replace(new RegExp(`\\[${key}\\]`, 'g'), value);
    }
    
    // Add user content to appropriate sections
    if (keyInfo.bodyContent) {
      // Find the appropriate section to add the content
      // This depends on the template type
      if (templateId.includes('csr')) {
        // For CSR, add to methodology or results section
        appliedTemplate = addContentToSection(appliedTemplate, 'Methodology', keyInfo.bodyContent);
      } else if (templateId.includes('protocol')) {
        // For protocol, add to study design section
        appliedTemplate = addContentToSection(appliedTemplate, 'Study Design', keyInfo.bodyContent);
      } else {
        // For other templates, add to the first content section after introduction
        const sections = exports.extractTemplateSections(appliedTemplate);
        if (sections.length > 1) {
          appliedTemplate = addContentToSection(appliedTemplate, sections[1].title, keyInfo.bodyContent);
        }
      }
    }
    
    return appliedTemplate;
  } catch (error) {
    console.error('Error applying template:', error);
    return content; // Return original content if template application fails
  }
};

/**
 * Add content to a specific section in the template
 * @param {string} template - Template content
 * @param {string} sectionTitle - Section title
 * @param {string} content - Content to add
 * @returns {string} Updated template
 */
function addContentToSection(template, sectionTitle, content) {
  const sectionRegex = new RegExp(`## ${sectionTitle}[\\s\\S]*?(?=## |$)`, 'i');
  const sectionMatch = template.match(sectionRegex);
  
  if (sectionMatch) {
    const sectionContent = sectionMatch[0];
    const updatedSection = `${sectionContent}\n\n${content}`;
    return template.replace(sectionContent, updatedSection);
  }
  
  // If section not found, add to the end
  return `${template}\n\n## Additional Information\n\n${content}`;
}

/**
 * Extract key information from user content
 * @param {string} content - User content
 * @returns {Object} Extracted information
 */
function extractKeyInformation(content) {
  const info = {
    PROTOCOL_NUMBER: '',
    FULL_STUDY_TITLE: '',
    PRODUCT_NAME: '',
    PHASE: '',
    SPONSOR_NAME: '',
    DATE: new Date().toISOString().split('T')[0],
    bodyContent: content
  };
  
  // Extract protocol number (Study ID, Protocol ID, etc.)
  const protocolRegex = /(?:protocol|study|trial)\s+(?:number|id|identifier)?\s*:?\s*([A-Z0-9-]+)/i;
  const protocolMatch = content.match(protocolRegex);
  if (protocolMatch) {
    info.PROTOCOL_NUMBER = protocolMatch[1];
  }
  
  // Extract study title
  const titleRegex = /(?:study|trial)\s+title\s*:?\s*([^\n]+)/i;
  const titleMatch = content.match(titleRegex);
  if (titleMatch) {
    info.FULL_STUDY_TITLE = titleMatch[1].trim();
  } else {
    // Try to extract first sentence as title
    const firstSentence = content.split(/\.|\n/)[0];
    if (firstSentence.length > 10 && firstSentence.length < 200) {
      info.FULL_STUDY_TITLE = firstSentence.trim();
    }
  }
  
  // Extract product name
  const productRegex = /(?:product|drug|compound|device|investigational product)\s+(?:name)?\s*:?\s*([A-Za-z0-9-]+)/i;
  const productMatch = content.match(productRegex);
  if (productMatch) {
    info.PRODUCT_NAME = productMatch[1];
  }
  
  // Extract phase
  const phaseRegex = /phase\s*:?\s*([0-9IViv]+)/i;
  const phaseMatch = content.match(phaseRegex);
  if (phaseMatch) {
    info.PHASE = phaseMatch[1].toUpperCase();
  }
  
  // Extract sponsor
  const sponsorRegex = /sponsor\s*:?\s*([^\n,;.]+)/i;
  const sponsorMatch = content.match(sponsorRegex);
  if (sponsorMatch) {
    info.SPONSOR_NAME = sponsorMatch[1].trim();
  }
  
  return info;
}
