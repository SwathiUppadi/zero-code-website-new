/**
 * Error handling middleware
 */
const config = require('../config');

/**
 * Custom error class with status code
 */
class ApiError extends Error {
  constructor(message, statusCode, errorCode = null) {
    super(message);
    this.statusCode = statusCode;
    this.errorCode = errorCode; // Error code for frontend reference
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Validation error
 */
class ValidationError extends ApiError {
  constructor(message, errors = {}) {
    super(message, 400, 'VALIDATION_ERROR');
    this.errors = errors; // Validation errors
  }
}

/**
 * Not found error
 */
class NotFoundError extends ApiError {
  constructor(resource = 'Resource', id = null) {
    const message = id 
      ? `${resource} with ID ${id} not found`
      : `${resource} not found`;
    super(message, 404, 'NOT_FOUND');
    this.resource = resource;
    this.resourceId = id;
  }
}

/**
 * AI service error
 */
class AiServiceError extends ApiError {
  constructor(message, service, originalError = null) {
    super(message, 503, 'AI_SERVICE_ERROR');
    this.service = service;
    this.originalError = originalError;
  }
}

/**
 * Not found error - for routes that don't exist
 */
const notFound = (req, res, next) => {
  const error = new ApiError(`Not Found - ${req.originalUrl}`, 404, 'ROUTE_NOT_FOUND');
  next(error);
};

/**
 * General error handler
 */
const errorHandler = (err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong';
  let errorCode = err.errorCode || 'SERVER_ERROR';
  let additionalData = {};
  
  // Handle specific error types
  if (err.code === 'LIMIT_FILE_SIZE') {
    statusCode = 400;
    message = 'File size too large';
    errorCode = 'FILE_TOO_LARGE';
  } else if (err.code === 'LIMIT_UNEXPECTED_FILE') {
    statusCode = 400;
    message = 'Unexpected file upload';
    errorCode = 'UNEXPECTED_FILE';
  } else if (err.name === 'ValidationError' || err instanceof ValidationError) {
    statusCode = 400;
    errorCode = 'VALIDATION_ERROR';
    additionalData.errors = err.errors;
  } else if (err.name === 'NotFoundError' || err instanceof NotFoundError) {
    statusCode = 404;
    errorCode = 'NOT_FOUND';
    additionalData.resource = err.resource;
    additionalData.resourceId = err.resourceId;
  } else if (err.name === 'AiServiceError' || err instanceof AiServiceError) {
    statusCode = 503;
    errorCode = 'AI_SERVICE_ERROR';
    additionalData.service = err.service;
    
    // Don't expose original error details in production
    if (config.server.nodeEnv !== 'production' && err.originalError) {
      additionalData.originalError = err.originalError;
    }
  }
  
  // Log error
  if (statusCode >= 500) {
    console.error(`[ERROR] ${err.stack}`);
  } else {
    console.warn(`[WARN] ${err.message}`);
  }
  
  // Send error response
  res.status(statusCode).json({
    status: 'error',
    message,
    errorCode,
    ...additionalData,
    stack: config.server.nodeEnv === 'production' ? undefined : err.stack
  });
};

/**
 * Async handler to catch errors in async routes
 * @param {Function} fn - Async route handler
 * @returns {Function} Route handler with error catching
 */
const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

module.exports = {
  ApiError,
  ValidationError,
  NotFoundError,
  AiServiceError,
  notFound,
  errorHandler,
  asyncHandler
};
