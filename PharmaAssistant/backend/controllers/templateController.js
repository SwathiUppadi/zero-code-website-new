const fs = require('fs').promises;
const path = require('path');

const templatesDir = path.join(__dirname, '../../data/templates');

/**
 * Get all available templates
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
exports.getAllTemplates = async (req, res) => {
  try {
    const templates = [
      {
        id: 'csr-template',
        name: 'Clinical Study Report',
        description: 'ICH E3 compliant Clinical Study Report template',
        sections: ['Title Page', 'Synopsis', 'Table of Contents', 'List of Abbreviations', 
                  'Ethics', 'Investigators', 'Study Objectives', 'Methodology', 
                  'Study Patients', 'Efficacy Evaluation', 'Safety Evaluation', 
                  'Discussion and Conclusions', 'Tables and Figures', 'References', 
                  'Appendices']
      },
      {
        id: 'ib-template',
        name: 'Investigator Brochure',
        description: 'Standard Investigator Brochure template following ICH GCP guidelines',
        sections: ['Summary', 'Introduction', 'Physical, Chemical, and Pharmaceutical Properties', 
                  'Nonclinical Studies', 'Effects in Humans', 'Summary of Data and Guidance for the Investigator']
      },
      {
        id: 'pil-template',
        name: 'Patient Information Leaflet',
        description: 'Template for patient-facing information in plain language',
        sections: ['What is this study about?', 'Why have I been invited?', 
                  'Do I have to take part?', 'What will happen to me if I take part?',
                  'What are the possible benefits?', 'What are the possible disadvantages and risks?',
                  'Will my taking part be kept confidential?', 'What will happen to the results?',
                  'Who is organizing and funding the research?', 'Who has reviewed the study?',
                  'Further information and contact details']
      },
      {
        id: 'protocol-template',
        name: 'Clinical Trial Protocol',
        description: 'Protocol template for clinical trials',
        sections: ['Protocol Summary', 'Introduction', 'Study Objectives', 'Study Design',
                  'Selection and Withdrawal of Subjects', 'Treatment of Subjects', 
                  'Assessment of Efficacy', 'Assessment of Safety', 'Statistics', 
                  'Direct Access to Source Data/Documents', 'Quality Control and Quality Assurance',
                  'Ethics', 'Data Handling and Record Keeping', 'Financing and Insurance',
                  'Publication Policy', 'References']
      }
    ];
    
    res.status(200).json({
      status: 'success',
      data: templates
    });
  } catch (error) {
    console.error('Error fetching templates:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error fetching templates'
    });
  }
};

/**
 * Get template by ID
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
exports.getTemplateById = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id) {
      return res.status(400).json({
        status: 'error',
        message: 'Template ID is required'
      });
    }
    
    // Check if template file exists
    const templatePath = path.join(templatesDir, `${id}.md`);
    
    try {
      // Read the file
      const templateContent = await fs.readFile(templatePath, 'utf8');
      
      // Determine template name based on ID
      let name, description;
      switch (id) {
        case 'csr-template':
          name = 'Clinical Study Report';
          description = 'ICH E3 compliant Clinical Study Report template';
          break;
        case 'ib-template':
          name = 'Investigator Brochure';
          description = 'Standard Investigator Brochure template following ICH GCP guidelines';
          break;
        case 'pil-template':
          name = 'Patient Information Leaflet';
          description = 'Template for patient-facing information in plain language';
          break;
        case 'protocol-template':
          name = 'Clinical Trial Protocol';
          description = 'Protocol template for clinical trials';
          break;
        default:
          name = 'Document Template';
          description = 'Generic document template';
      }
      
      res.status(200).json({
        status: 'success',
        data: {
          id,
          name,
          description,
          content: templateContent
        }
      });
    } catch (error) {
      return res.status(404).json({
        status: 'error',
        message: 'Template not found'
      });
    }
    
  } catch (error) {
    console.error('Error fetching template:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error fetching template'
    });
  }
};
