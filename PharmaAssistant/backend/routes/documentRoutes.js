const express = require('express');
const router = express.Router();
const documentController = require('../controllers/documentController');
const { validateDocumentRequest, validateContentLength } = require('../middleware/validationMiddleware');

/**
 * @route   POST /api/documents/generate
 * @desc    Generate a document based on user input
 * @access  Public
 */
router.post('/generate', validateContentLength, documentController.generateDocument);

/**
 * @route   POST /api/documents/summarize
 * @desc    Summarize a document in regulatory format
 * @access  Public
 */
router.post('/summarize', validateContentLength, documentController.summarizeDocument);

/**
 * @route   POST /api/documents/compare
 * @desc    Compare document with regulatory standards
 * @access  Public
 */
router.post('/compare', validateContentLength, documentController.compareDocument);

/**
 * @route   POST /api/documents/simplify
 * @desc    Rewrite document in plain language
 * @access  Public
 */
router.post('/simplify', validateContentLength, documentController.simplifyText);

/**
 * @route   POST /api/documents/process
 * @desc    Process a document with a specified action
 * @access  Public
 */
router.post('/process', validateDocumentRequest, validateContentLength, async (req, res) => {
  try {
    const { action } = req.body;
    
    // Route to the appropriate controller function based on action
    switch (action) {
      case 'generate':
        return await documentController.generateDocument(req, res);
      case 'summarize':
        return await documentController.summarizeDocument(req, res);
      case 'compare':
        return await documentController.compareDocument(req, res);
      case 'simplify':
        return await documentController.simplifyText(req, res);
      default:
        return res.status(400).json({
          status: 'error',
          message: 'Invalid action'
        });
    }
  } catch (error) {
    console.error('Error processing document:', error);
    res.status(500).json({
      status: 'error',
      message: error.message || 'Error processing document'
    });
  }
});

module.exports = router;
