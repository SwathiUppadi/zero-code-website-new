/**
 * Application configuration settings
 */
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const config = {
  // Server configuration
  server: {
    port: process.env.PORT || 5000,
    nodeEnv: process.env.NODE_ENV || 'development',
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000'
  },
  
  // AI service configuration
  ai: {
    // OpenAI configuration
    openai: {
      apiKey: process.env.OPENAI_API_KEY,
      model: process.env.OPENAI_MODEL || 'gpt-4'
    },
    
    // Azure OpenAI configuration
    azureOpenai: {
      apiKey: process.env.AZURE_OPENAI_API_KEY,
      endpoint: process.env.AZURE_OPENAI_ENDPOINT,
      deployment: process.env.AZURE_OPENAI_DEPLOYMENT
    },
    
    // Claude configuration
    anthropic: {
      apiKey: process.env.ANTHROPIC_API_KEY,
      model: process.env.CLAUDE_MODEL || 'claude-3-opus-20240229'
    },
    
    // Default AI service to use (openai, azureOpenai, anthropic)
    defaultService: process.env.DEFAULT_AI_SERVICE || 'openai'
  },
  
  // Document processing configuration
  document: {
    maxSizeMB: process.env.MAX_DOCUMENT_SIZE_MB || 50,
    allowedFileTypes: (process.env.ALLOWED_FILE_TYPES || 'pdf,docx,doc,txt,rtf').split(',')
  },
  
  // Security configuration
  security: {
    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN || '1d'
  }
};

module.exports = config;
