import axios from 'axios';

const API_URL = '/api';

// Add default request configuration
axios.defaults.headers.common['Content-Type'] = 'application/json';

// Create a configurable axios instance
const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 60000, // 60 seconds timeout for long-running AI operations
});

// Add a request interceptor for error handling
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common errors
    const errorMessage = error.response?.data?.message || error.message || 'An unknown error occurred';
    console.error('API Error:', errorMessage);
    
    // Rethrow the error with additional context
    throw new Error(errorMessage);
  }
);

/**
 * Document operations
 */

export const generateDocument = async (documentType, content, format) => {
  try {
    const response = await apiClient.post('/documents/generate', {
      documentType,
      content,
      format
    });
    return response.data;
  } catch (error) {
    console.error('Error generating document:', error);
    throw error;
  }
};

export const summarizeDocument = async (content, targetAudience) => {
  try {
    const response = await apiClient.post('/documents/summarize', {
      content,
      targetAudience
    });
    return response.data;
  } catch (error) {
    console.error('Error summarizing document:', error);
    throw error;
  }
};

export const checkCompliance = async (content, standard) => {
  try {
    const response = await apiClient.post('/documents/compare', {
      content,
      standard
    });
    return response.data;
  } catch (error) {
    console.error('Error checking compliance:', error);
    throw error;
  }
};

export const simplifyText = async (content, targetReadingLevel) => {
  try {
    const response = await apiClient.post('/documents/simplify', {
      content,
      targetReadingLevel
    });
    return response.data;
  } catch (error) {
    console.error('Error simplifying text:', error);
    throw error;
  }
};

export const processDocument = async (action, params) => {
  try {
    const response = await apiClient.post('/documents/process', {
      action,
      ...params
    });
    return response.data;
  } catch (error) {
    console.error(`Error processing document (${action}):`, error);
    throw error;
  }
};

/**
 * Template operations
 */

export const getTemplates = async () => {
  try {
    const response = await apiClient.get('/templates');
    return response.data;
  } catch (error) {
    console.error('Error fetching templates:', error);
    throw error;
  }
};

export const getTemplate = async (id) => {
  try {
    const response = await apiClient.get(`/templates/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching template:', error);
    throw error;
  }
};

export const getTemplatesByCategory = async (category) => {
  try {
    const response = await apiClient.get(`/templates/category/${category}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching templates for category ${category}:`, error);
    throw error;
  }
};

/**
 * Regulatory operations
 */

export const getRegulatoryGuidelines = async () => {
  try {
    const response = await apiClient.get('/regulatory/guidelines');
    return response.data;
  } catch (error) {
    console.error('Error fetching guidelines:', error);
    throw error;
  }
};

export const getGuidelineDetails = async (id) => {
  try {
    const response = await apiClient.get(`/regulatory/guidelines/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching guideline details for ${id}:`, error);
    throw error;
  }
};

export const getDocumentTypes = async () => {
  try {
    const response = await apiClient.get('/regulatory/document-types');
    return response.data;
  } catch (error) {
    console.error('Error fetching document types:', error);
    throw error;
  }
};

export const getComplianceChecklist = async (documentType) => {
  try {
    const response = await apiClient.get(`/regulatory/compliance-checklist/${documentType}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching compliance checklist:', error);
    throw error;
  }
};

export const getRegulatoryStandards = async () => {
  try {
    const response = await apiClient.get('/regulatory/standards');
    return response.data;
  } catch (error) {
    console.error('Error fetching regulatory standards:', error);
    throw error;
  }
};

/**
 * File operations
 */

export const uploadFile = async (file, processingOptions) => {
  try {
    const formData = new FormData();
    formData.append('file', file);
    
    if (processingOptions) {
      formData.append('options', JSON.stringify(processingOptions));
    }
    
    const response = await apiClient.post('/documents/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw error;
  }
};

export const exportDocument = async (content, format) => {
  try {
    const response = await apiClient.post('/documents/export', {
      content,
      format
    }, {
      responseType: 'blob' // Important for file downloads
    });
    
    // Create a download link
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `document.${format}`);
    document.body.appendChild(link);
    link.click();
    
    // Clean up
    link.parentNode.removeChild(link);
    window.URL.revokeObjectURL(url);
    
    return true;
  } catch (error) {
    console.error('Error exporting document:', error);
    throw error;
  }
};
