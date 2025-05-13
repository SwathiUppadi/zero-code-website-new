const express = require('express');
const router = express.Router();
const templateController = require('../controllers/templateController');

/**
 * @route   GET /api/templates
 * @desc    Get all available templates
 * @access  Public
 */
router.get('/', templateController.getAllTemplates);

/**
 * @route   GET /api/templates/:id
 * @desc    Get template by ID
 * @access  Public
 */
router.get('/:id', templateController.getTemplateById);

module.exports = router;
