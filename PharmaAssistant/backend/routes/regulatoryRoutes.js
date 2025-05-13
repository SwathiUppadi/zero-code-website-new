const express = require('express');
const router = express.Router();
const regulatoryController = require('../controllers/regulatoryController');

/**
 * @route   GET /api/regulatory/guidelines
 * @desc    Get regulatory guidelines
 * @access  Public
 */
router.get('/guidelines', regulatoryController.getRegulatoryGuidelines);

/**
 * @route   GET /api/regulatory/document-types
 * @desc    Get regulatory document types
 * @access  Public
 */
router.get('/document-types', regulatoryController.getDocumentTypes);

/**
 * @route   GET /api/regulatory/compliance-checklist/:documentType
 * @desc    Get compliance checklist for a specific document type
 * @access  Public
 */
router.get('/compliance-checklist/:documentType', regulatoryController.getComplianceChecklist);

module.exports = router;
