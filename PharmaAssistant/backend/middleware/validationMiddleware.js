/**
 * Request validation middleware
 */
const { ValidationError } = require('./errorMiddleware');
const config = require('../config');

/**
 * Validate document request body
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const validateDocumentRequest = (req, res, next) => {
  const { action } = req.body;
  const errors = {};
  
  if (!action) {
    errors.action = 'Action is required';
  } else {
    const validActions = ['generate', 'summarize', 'compare', 'simplify'];
    if (!validActions.includes(action)) {
      errors.action = `Invalid action: ${action}. Valid actions are: ${validActions.join(', ')}`;
    }
  }
  
  // Validate required fields based on action
  if (action) {
    switch (action) {
      case 'generate':
        if (!req.body.documentType) {
          errors.documentType = 'Document type is required for generate action';
        }
        if (!req.body.content) {
          errors.content = 'Content is required for generate action';
        }
        break;
      case 'summarize':
        if (!req.body.content) {
          errors.content = 'Content is required for summarize action';
        }
        if (req.body.targetAudience && !['regulatory', 'patient', 'physician', 'general'].includes(req.body.targetAudience)) {
          errors.targetAudience = 'Invalid target audience. Valid options are: regulatory, patient, physician, general';
        }
        break;
      case 'compare':
        if (!req.body.content) {
          errors.content = 'Content is required for compare action';
        }
        if (!req.body.standard) {
          errors.standard = 'Standard is required for compare action';
        }
        break;
      case 'simplify':
        if (!req.body.content) {
          errors.content = 'Content is required for simplify action';
        }
        if (req.body.targetReadingLevel && !['patient', 'general', 'expert'].includes(req.body.targetReadingLevel)) {
          errors.targetReadingLevel = 'Invalid target reading level. Valid options are: patient, general, expert';
        }
        break;
    }
  }
  
  if (Object.keys(errors).length > 0) {
    return next(new ValidationError('Validation Error', errors));
  }
  
  next();
};

/**
 * Validate content length is within limits
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const validateContentLength = (req, res, next) => {
  const { content } = req.body;
  
  if (!content) {
    return next(); // Content validation will be handled by other validators
  }
  
  const maxContentLength = config.document.maxContentLength || 100000; // ~50 pages of text
  
  if (content.length > maxContentLength) {
    return next(new ValidationError('Content Length Error', {
      content: `Content exceeds maximum length of ${maxContentLength} characters`
    }));
  }
  
  next();
};

/**
 * Validate template request
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const validateTemplateRequest = (req, res, next) => {
  const { templateId } = req.params;
  
  if (!templateId) {
    return next(new ValidationError('Template Validation Error', {
      templateId: 'Template ID is required'
    }));
  }
  
  next();
};

/**
 * Validate file upload request
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const validateFileUpload = (req, res, next) => {
  if (!req.file) {
    return next(new ValidationError('File Upload Error', {
      file: 'No file uploaded'
    }));
  }
  
  const allowedFileTypes = config.document.allowedFileTypes || ['pdf', 'docx', 'doc', 'txt', 'rtf'];
  const fileExt = req.file.originalname.split('.').pop().toLowerCase();
  
  if (!allowedFileTypes.includes(fileExt)) {
    return next(new ValidationError('File Upload Error', {
      file: `File type .${fileExt} is not supported. Allowed types: ${allowedFileTypes.join(', ')}`
    }));
  }
  
  const maxFileSizeMB = config.document.maxSizeMB || 10;
  const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;
  
  if (req.file.size > maxFileSizeBytes) {
    return next(new ValidationError('File Upload Error', {
      file: `File size exceeds the ${maxFileSizeMB}MB limit`
    }));
  }
  
  next();
};

/**
 * Validate export request
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const validateExportRequest = (req, res, next) => {
  const { content, format } = req.body;
  const errors = {};
  
  if (!content) {
    errors.content = 'Content is required for export';
  }
  
  if (!format) {
    errors.format = 'Format is required for export';
  } else {
    const validFormats = ['md', 'pdf', 'docx', 'txt'];
    if (!validFormats.includes(format)) {
      errors.format = `Invalid format: ${format}. Valid formats are: ${validFormats.join(', ')}`;
    }
  }
  
  if (Object.keys(errors).length > 0) {
    return next(new ValidationError('Export Validation Error', errors));
  }
  
  next();
};

module.exports = {
  validateDocumentRequest,
  validateContentLength,
  validateTemplateRequest,
  validateFileUpload,
  validateExportRequest
};
