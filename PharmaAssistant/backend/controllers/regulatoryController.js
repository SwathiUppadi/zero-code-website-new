/**
 * Get regulatory guidelines
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
exports.getRegulatoryGuidelines = (req, res) => {
  try {
    const guidelines = [
      {
        id: 'ich-e3',
        name: 'ICH E3',
        title: 'Structure and Content of Clinical Study Reports',
        issuer: 'ICH',
        url: 'https://database.ich.org/sites/default/files/E3_Guideline.pdf',
        summary: 'Provides guidance on the structure and content of clinical study reports.'
      },
      {
        id: 'ich-e6',
        name: 'ICH E6',
        title: 'Good Clinical Practice',
        issuer: 'ICH',
        url: 'https://database.ich.org/sites/default/files/E6_R2_Addendum.pdf',
        summary: 'Good Clinical Practice (GCP) is an international ethical and scientific quality standard for designing, conducting, recording and reporting trials that involve the participation of human subjects.'
      },
      {
        id: 'fda-csr',
        name: 'FDA CSR Guidance',
        title: 'Guidance for Industry: Submission of Clinical Study Reports',
        issuer: 'FDA',
        url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents',
        summary: 'FDA guidance on submission of clinical study reports.'
      },
      {
        id: 'ema-csr',
        name: 'EMA CSR Guidance',
        title: 'Points to Consider on the Structure and Content of Clinical Study Reports',
        issuer: 'EMA',
        url: 'https://www.ema.europa.eu/en/documents/scientific-guideline/ich-e-3-structure-content-clinical-study-reports-step-5_en.pdf',
        summary: 'EMA guidance on the structure and content of clinical study reports.'
      },
      {
        id: 'fda-ib',
        name: 'FDA IB Guidance',
        title: 'Guidance for Industry: Content and Format of Investigator Brochures',
        issuer: 'FDA',
        url: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents',
        summary: 'FDA guidance on the content and format of Investigator Brochures for investigational products.'
      },
      {
        id: 'ich-e8',
        name: 'ICH E8',
        title: 'General Considerations for Clinical Trials',
        issuer: 'ICH',
        url: 'https://database.ich.org/sites/default/files/E8_Guideline.pdf',
        summary: 'Provides guidance on general considerations for clinical trials, including study design considerations.'
      },
      {
        id: 'ich-e9',
        name: 'ICH E9',
        title: 'Statistical Principles for Clinical Trials',
        issuer: 'ICH',
        url: 'https://database.ich.org/sites/default/files/E9_Guideline.pdf',
        summary: 'Provides guidance on statistical principles for clinical trials, including handling of data and reporting.'
      }
    ];
    
    res.status(200).json({
      status: 'success',
      data: guidelines
    });
  } catch (error) {
    console.error('Error fetching guidelines:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error fetching guidelines'
    });
  }
};

/**
 * Get document types
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
exports.getDocumentTypes = (req, res) => {
  try {
    const documentTypes = [
      {
        id: 'csr-template',
        name: 'Clinical Study Report (CSR)',
        description: 'A comprehensive document describing the design, methods, analysis, results and conclusions of a clinical study.',
        regulatoryFramework: 'ICH E3',
        typicalSections: ['Title Page', 'Synopsis', 'Introduction', 'Study Objectives', 'Methodology', 'Results', 'Discussion', 'Conclusion']
      },
      {
        id: 'ib-template',
        name: 'Investigator Brochure (IB)',
        description: 'A compilation of clinical and nonclinical data on the investigational product that are relevant to the study of the product in human subjects.',
        regulatoryFramework: 'ICH E6',
        typicalSections: ['Summary', 'Introduction', 'Physical, Chemical & Pharmaceutical Properties', 'Nonclinical Studies', 'Effects in Humans', 'Summary of Data and Guidance']
      },
      {
        id: 'protocol-template',
        name: 'Clinical Trial Protocol',
        description: 'A document that describes the objectives, design, methodology, statistical considerations, and organization of a clinical trial.',
        regulatoryFramework: 'ICH E6',
        typicalSections: ['Background Information', 'Trial Objectives and Purpose', 'Trial Design', 'Selection of Subjects', 'Treatment of Subjects', 'Assessment of Efficacy', 'Assessment of Safety', 'Statistics']
      },
      {
        id: 'pil-template',
        name: 'Patient Information Leaflet (PIL)',
        description: 'A document provided to potential participants in a clinical trial to inform them about the trial.',
        regulatoryFramework: 'ICH E6, National Ethics Requirements',
        typicalSections: ['Invitation', 'Purpose of Study', 'Participation Details', 'Risks and Benefits', 'Rights', 'Confidentiality', 'Contact Information']
      }
    ];
    
    res.status(200).json({
      status: 'success',
      data: documentTypes
    });
  } catch (error) {
    console.error('Error fetching document types:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error fetching document types'
    });
  }
};

/**
 * Get compliance checklist for a specific document type
 * @param {Object} req - HTTP request object
 * @param {Object} res - HTTP response object
 */
exports.getComplianceChecklist = (req, res) => {
  try {
    const { documentType } = req.params;
    
    if (!documentType) {
      return res.status(400).json({
        status: 'error',
        message: 'Document type is required'
      });
    }
    
    let checklist = [];
    
    // Return different checklists based on document type
    switch (documentType) {
      case 'csr-template':
        checklist = [
          { id: 1, category: 'Structure', item: 'Includes Title Page with all required elements', required: true },
          { id: 2, category: 'Structure', item: 'Contains Synopsis that summarizes key information', required: true },
          { id: 3, category: 'Structure', item: 'Includes Table of Contents', required: true },
          { id: 4, category: 'Structure', item: 'Contains List of Abbreviations', required: true },
          { id: 5, category: 'Content', item: 'Objectives clearly stated', required: true },
          { id: 6, category: 'Content', item: 'Methodology described in detail', required: true },
          { id: 7, category: 'Content', item: 'Patient disposition fully accounted for', required: true },
          { id: 8, category: 'Content', item: 'Efficacy results presented with statistical analysis', required: true },
          { id: 9, category: 'Content', item: 'Safety results comprehensively presented', required: true },
          { id: 10, category: 'Content', item: 'Discussion interprets results in context', required: true },
          { id: 11, category: 'Style', item: 'Uses appropriate scientific terminology', required: true },
          { id: 12, category: 'Style', item: 'Avoids speculative language', required: true },
          { id: 13, category: 'References', item: 'Citations provided for all claims', required: true },
          { id: 14, category: 'Appendices', item: 'Includes relevant appendices', required: false }
        ];
        break;
      case 'ib-template':
        checklist = [
          { id: 1, category: 'Structure', item: 'Contains Title Page with product name, sponsor, and version', required: true },
          { id: 2, category: 'Structure', item: 'Includes Summary section', required: true },
          { id: 3, category: 'Structure', item: 'Contains Table of Contents', required: true },
          { id: 4, category: 'Content', item: 'Physical/Chemical properties described', required: true },
          { id: 5, category: 'Content', item: 'Non-clinical studies summarized', required: true },
          { id: 6, category: 'Content', item: 'Effects in humans documented', required: true },
          { id: 7, category: 'Content', item: 'Provides guidance for investigators', required: true },
          { id: 8, category: 'Content', item: 'Known and potential risks described', required: true },
          { id: 9, category: 'Style', item: 'Uses appropriate scientific terminology', required: true },
          { id: 10, category: 'Style', item: 'Presents balanced information on risks/benefits', required: true },
          { id: 11, category: 'References', item: 'Citations provided for all claims', required: true }
        ];
        break;
      case 'pil-template':
        checklist = [
          { id: 1, category: 'Structure', item: 'Clear title and invitation', required: true },
          { id: 2, category: 'Structure', item: 'Organized in question-answer format', required: false },
          { id: 3, category: 'Content', item: 'Purpose of study clearly explained', required: true },
          { id: 4, category: 'Content', item: 'Participation process described', required: true },
          { id: 5, category: 'Content', item: 'Risks and benefits explained', required: true },
          { id: 6, category: 'Content', item: 'Confidentiality assurances provided', required: true },
          { id: 7, category: 'Content', item: 'Contact information included', required: true },
          { id: 8, category: 'Style', item: 'Uses plain language (6-8th grade reading level)', required: true },
          { id: 9, category: 'Style', item: 'Avoids medical jargon', required: true },
          { id: 10, category: 'Style', item: 'Uses short sentences and paragraphs', required: true },
          { id: 11, category: 'Style', item: 'Includes no coercive language', required: true }
        ];
        break;
      case 'protocol-template':
        checklist = [
          { id: 1, category: 'Structure', item: 'Includes Protocol Summary', required: true },
          { id: 2, category: 'Structure', item: 'Contains all required sections', required: true },
          { id: 3, category: 'Content', item: 'Objectives clearly stated', required: true },
          { id: 4, category: 'Content', item: 'Study design fully described', required: true },
          { id: 5, category: 'Content', item: 'Inclusion/exclusion criteria defined', required: true },
          { id: 6, category: 'Content', item: 'Treatment regimen specified', required: true },
          { id: 7, category: 'Content', item: 'Statistical methods described', required: true },
          { id: 8, category: 'Content', item: 'Safety monitoring procedures specified', required: true },
          { id: 9, category: 'Content', item: 'Ethical considerations addressed', required: true },
          { id: 10, category: 'Style', item: 'Uses precise language', required: true },
          { id: 11, category: 'References', item: 'Citations provided for background claims', required: true }
        ];
        break;
      default:
        checklist = [
          { id: 1, category: 'Structure', item: 'Includes all required sections', required: true },
          { id: 2, category: 'Content', item: 'Objectives clearly stated', required: true },
          { id: 3, category: 'Content', item: 'Methods described in detail', required: true },
          { id: 4, category: 'Content', item: 'Results presented accurately', required: true },
          { id: 5, category: 'Style', item: 'Uses appropriate terminology', required: true },
          { id: 6, category: 'Style', item: 'Avoids speculative language', required: true },
          { id: 7, category: 'References', item: 'Citations provided for all claims', required: true }
        ];
    }
    
    res.status(200).json({
      status: 'success',
      data: {
        documentType,
        checklist
      }
    });
  } catch (error) {
    console.error('Error fetching compliance checklist:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error fetching compliance checklist'
    });
  }
};
