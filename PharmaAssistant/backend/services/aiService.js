/**
 * AI Service to handle integration with AI providers
 */
const config = require('../config');
const axios = require('axios');

/**
 * Process text with the configured AI service
 * @param {Object} options - Processing options
 * @returns {Promise<string>} Processed text
 */
exports.processWithAI = async (options) => {
  const { prompt, model, temperature, maxTokens } = options;
  
  // Determine which AI service to use
  const aiService = options.service || config.ai.defaultService;
  
  switch (aiService) {
    case 'openai':
      return processWithOpenAI(options);
    case 'azureOpenai':
      return processWithAzureOpenAI(options);
    case 'anthropic':
      return processWithAnthropic(options);
    default:
      throw new Error(`Unsupported AI service: ${aiService}`);
  }
};

/**
 * Process text with OpenAI API
 * @param {Object} options - Processing options
 * @returns {Promise<string>} Processed text
 */
async function processWithOpenAI(options) {
  const { prompt, model, temperature, maxTokens } = options;
  
  try {
    const response = await axios.post('https://api.openai.com/v1/chat/completions', 
      {
        model: model || config.ai.openai.model,
        messages: [
          {
            role: 'system',
            content: 'You are a regulatory medical writing assistant trained to help pharmaceutical professionals create and refine documents for clinical trials and regulatory submissions. Your role is to generate, summarize, or rewrite content in a format aligned with FDA/EMA requirements, and ensure compliance in tone, structure, and terminology.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: temperature || 0.7,
        max_tokens: maxTokens || 2000
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.ai.openai.apiKey}`
        }
      }
    );
    
    if (response.data && response.data.choices && response.data.choices[0]) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error('Invalid response from OpenAI API');
    }
  } catch (error) {
    console.error('OpenAI API Error:', error.response?.data || error.message);
    throw new Error(`OpenAI API Error: ${error.response?.data?.error?.message || error.message}`);
  }
}

/**
 * Process text with Azure OpenAI API
 * @param {Object} options - Processing options
 * @returns {Promise<string>} Processed text
 */
async function processWithAzureOpenAI(options) {
  const { prompt, model, temperature, maxTokens } = options;
  
  try {
    const endpoint = config.ai.azureOpenai.endpoint;
    const deploymentName = model || config.ai.azureOpenai.deployment;
    const apiVersion = '2023-05-15';
    
    const response = await axios.post(
      `${endpoint}/openai/deployments/${deploymentName}/chat/completions?api-version=${apiVersion}`,
      {
        messages: [
          {
            role: 'system',
            content: 'You are a regulatory medical writing assistant trained to help pharmaceutical professionals create and refine documents for clinical trials and regulatory submissions. Your role is to generate, summarize, or rewrite content in a format aligned with FDA/EMA requirements, and ensure compliance in tone, structure, and terminology.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: temperature || 0.7,
        max_tokens: maxTokens || 2000
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'api-key': config.ai.azureOpenai.apiKey
        }
      }
    );
    
    if (response.data && response.data.choices && response.data.choices[0]) {
      return response.data.choices[0].message.content;
    } else {
      throw new Error('Invalid response from Azure OpenAI API');
    }
  } catch (error) {
    console.error('Azure OpenAI API Error:', error.response?.data || error.message);
    throw new Error(`Azure OpenAI API Error: ${error.response?.data?.error?.message || error.message}`);
  }
}

/**
 * Process text with Anthropic API
 * @param {Object} options - Processing options
 * @returns {Promise<string>} Processed text
 */
async function processWithAnthropic(options) {
  const { prompt, model, temperature, maxTokens } = options;
  
  try {
    const response = await axios.post(
      'https://api.anthropic.com/v1/messages',
      {
        model: model || config.ai.anthropic.model,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        max_tokens: maxTokens || 2000,
        temperature: temperature || 0.7,
        system: 'You are a regulatory medical writing assistant trained to help pharmaceutical professionals create and refine documents for clinical trials and regulatory submissions. Your role is to generate, summarize, or rewrite content in a format aligned with FDA/EMA requirements, and ensure compliance in tone, structure, and terminology.'
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': config.ai.anthropic.apiKey,
          'anthropic-version': '2023-06-01'
        }
      }
    );
    
    if (response.data && response.data.content && response.data.content.length > 0) {
      return response.data.content[0].text;
    } else {
      throw new Error('Invalid response from Anthropic API');
    }
  } catch (error) {
    console.error('Anthropic API Error:', error.response?.data || error.message);
    throw new Error(`Anthropic API Error: ${error.response?.data?.error?.message || error.message}`);
  }
}

/**
 * Generate prompts based on the task and context
 * @param {Object} options - Processing options
 * @returns {string} Generated prompt
 */
exports.generatePrompt = (options) => {
  const { action, content, documentType, format } = options;
  
  let basePrompt = '';
  
  switch (action) {
    case 'generate':
      basePrompt = `You are a regulatory medical writing assistant specializing in pharmaceutical documentation. 
      
Create a ${documentType} document in ${format || 'regulatory'} format based on the following information:

${content}

Follow these guidelines:
- Use a professional, scientific tone
- Avoid speculative language unless cited
- Ensure all required sections are included
- Follow ICH-GCP and industry standard guidelines for ${documentType}
- Present information in a clear, concise manner
- Use appropriate medical and scientific terminology

Return the complete document with proper formatting using Markdown.`;
      break;
      
    case 'summarize':
      basePrompt = `You are a regulatory medical writing assistant specializing in pharmaceutical documentation.

Summarize the following clinical trial document for a ${options.targetAudience || 'regulatory'} audience:

${content}

Follow these guidelines:
- Focus on the most important information (objectives, methods, results, conclusions)
- Maintain scientific accuracy
- Use a professional tone appropriate for the ${options.targetAudience || 'regulatory'} audience
- Organize the summary with clear section headings
- Include all statistically significant findings
- For regulatory audiences: include p-values and confidence intervals where relevant
- For patient audiences: use plain language (6-8th grade reading level)

Return the summary with proper formatting using Markdown.`;
      break;
      
    case 'compare':
      basePrompt = `You are a regulatory medical writing assistant specializing in pharmaceutical documentation.

Compare the following document with the ${options.standard} guidelines and identify areas of compliance and non-compliance:

${content}

Follow these guidelines:
- Evaluate the document structure against required sections
- Assess the content for completeness and accuracy
- Check for appropriate scientific tone and language
- Identify missing elements and suggest improvements
- Assign a compliance score from 0-100
- Provide specific recommendations for improving compliance

Return your assessment with:
1. A numerical compliance score
2. A list of specific improvement suggestions
3. A list of missing elements`;
      break;
      
    case 'simplify':
      basePrompt = `You are a regulatory medical writing assistant specializing in pharmaceutical documentation.

Rewrite the following clinical trial content in plain language suitable for a ${options.targetReadingLevel || 'general'} audience:

${content}

Follow these guidelines:
- Use plain language (${options.targetReadingLevel === 'patient' ? '6th' : '8th'} grade reading level)
- Avoid medical jargon or provide clear explanations when technical terms are necessary
- Use short sentences and paragraphs
- Maintain scientific accuracy while improving readability
- Include all important information from the original text
- Organize the content with clear section headings
- Use bulleted lists where appropriate

Return the simplified content with proper formatting using Markdown.`;
      break;
      
    default:
      basePrompt = `Process the following text: ${content}`;
  }
  
  return basePrompt;
};
