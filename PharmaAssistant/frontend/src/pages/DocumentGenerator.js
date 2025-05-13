import React, { useState, useEffect } from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Alert, 
  Grid,
  FormHelperText,
  Typography,
  Box,
  Paper,
  Button,
  Skeleton,
  Chip,
  Tooltip,
  Divider,
  Link,
  IconButton,
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  TextField
} from '@mui/material';
import {
  FileUpload as FileUploadIcon,
  Save as SaveIcon,
  Info as InfoIcon,
  ExpandMore as ExpandMoreIcon,
  FileCopy as FileCopyIcon,
  Assignment as AssignmentIcon,
  ChevronRight as ChevronRightIcon
} from '@mui/icons-material';
import DocumentEditor from '../components/DocumentEditor';
import ResultDisplay from '../components/ResultDisplay';
import FileUpload from '../components/FileUpload';
import { 
  generateDocument, 
  getDocumentTypes, 
  getTemplates, 
  getTemplate,
  exportDocument 
} from '../utils/api';

const documentFormats = [
  { value: 'regulatory', label: 'Regulatory Format' },
  { value: 'scientific', label: 'Scientific Format' },
  { value: 'plain', label: 'Plain Language' }
];

const DocumentGenerator = () => {
  // State for user inputs
  const [content, setContent] = useState('');
  const [documentType, setDocumentType] = useState('');
  const [format, setFormat] = useState('regulatory');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  
  // State for UI
  const [isLoading, setIsLoading] = useState(false);
  const [isTemplateLoading, setIsTemplateLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  
  // State for data
  const [documentTypes, setDocumentTypes] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [selectedTemplateSections, setSelectedTemplateSections] = useState([]);
  
  // State for messages
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Load document types and templates on component mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const [typesResponse, templatesResponse] = await Promise.all([
          getDocumentTypes(),
          getTemplates()
        ]);
        
        setDocumentTypes(typesResponse.data);
        setTemplates(templatesResponse.data);
      } catch (err) {
        setError('Failed to load initial data. Please try again later.');
      }
    };

    fetchInitialData();
  }, []);

  // Load template sections when documentType changes
  useEffect(() => {
    if (!documentType) return;

    const fetchTemplateDetails = async () => {
      setIsTemplateLoading(true);
      try {
        const response = await getTemplate(documentType);
        setSelectedTemplate(response.data);
        setSelectedTemplateSections(response.data.sections || []);
      } catch (err) {
        setError('Failed to load template details.');
      } finally {
        setIsTemplateLoading(false);
      }
    };

    fetchTemplateDetails();
  }, [documentType]);

  // Handle form submission
  const handleSubmit = async () => {
    if (!documentType) {
      setError('Please select a document type');
      return;
    }

    if (!content.trim()) {
      setError('Please enter some content');
      return;
    }

    setIsLoading(true);
    setError('');
    setSuccess('');
    
    try {
      const response = await generateDocument(documentType, content, format);
      setResult(response.data);
      setSuccess('Document generated successfully!');
      setActiveTab(1); // Switch to Results tab
    } catch (err) {
      setError('Failed to generate document: ' + (err.message || 'Please try again later.'));
    } finally {
      setIsLoading(false);
    }
  };

  // Handle file upload
  const handleFileUpload = (fileContent) => {
    setContent(fileContent);
    setSuccess('File uploaded successfully! You can now generate your document.');
  };

  // Handle export
  const handleExport = async (format = 'md') => {
    if (!result?.generatedContent) {
      setError('No document to export');
      return;
    }

    try {
      await exportDocument(result.generatedContent, format);
      setSuccess(`Document exported as ${format.toUpperCase()} successfully!`);
    } catch (err) {
      setError('Failed to export document: ' + (err.message || 'Please try again later.'));
    }
  };

  // Handle tab change
  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Generate Regulatory Document
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Create a new regulatory document based on your input. Select the document type and format, then enter your content or upload a file.
      </Typography>

      {/* Tab navigation */}
      <Paper sx={{ mb: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Create Document" icon={<AssignmentIcon />} iconPosition="start" />
          <Tab 
            label="Results" 
            icon={<FileCopyIcon />} 
            iconPosition="start" 
            disabled={!result}
          />
        </Tabs>
      </Paper>

      {/* Create Document Tab */}
      {activeTab === 0 && (
        <Grid container spacing={3}>
          {/* Document Type and Format Selection */}
          <Grid item xs={12} md={4}>
            <Paper sx={{ p: 3, height: '100%' }}>
              <Typography variant="h6" gutterBottom>
                Document Settings
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="document-type-label">Document Type</InputLabel>
                <Select
                  labelId="document-type-label"
                  id="document-type"
                  value={documentType}
                  label="Document Type"
                  onChange={(e) => setDocumentType(e.target.value)}
                  disabled={isLoading}
                >
                  {documentTypes.map((type) => (
                    <MenuItem key={type.id} value={type.id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Select the type of regulatory document to generate</FormHelperText>
              </FormControl>
              
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel id="format-label">Format</InputLabel>
                <Select
                  labelId="format-label"
                  id="format"
                  value={format}
                  label="Format"
                  onChange={(e) => setFormat(e.target.value)}
                  disabled={isLoading}
                >
                  {documentFormats.map((fmt) => (
                    <MenuItem key={fmt.value} value={fmt.value}>
                      {fmt.label}
                    </MenuItem>
                  ))}
                </Select>
                <FormHelperText>Select the output format for the document</FormHelperText>
              </FormControl>
              
              <Box sx={{ mb: 2 }}>
                <FileUpload 
                  onUpload={handleFileUpload} 
                  acceptedTypes=".txt,.md,.docx,.pdf"
                  disabled={isLoading}
                />
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={isLoading || !documentType || !content.trim()}
                sx={{ mt: 2 }}
              >
                {isLoading ? 'Generating...' : 'Generate Document'}
              </Button>
            </Paper>
          </Grid>
          
          {/* Template Information */}
          <Grid item xs={12} md={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">
                  Template Information
                </Typography>
                {selectedTemplate && (
                  <Chip 
                    label={selectedTemplate.standardReference} 
                    color="primary" 
                    variant="outlined"
                    size="small"
                  />
                )}
              </Box>
              <Divider sx={{ mb: 2 }} />
              
              {isTemplateLoading ? (
                <Box>
                  <Skeleton variant="text" height={30} />
                  <Skeleton variant="text" height={30} />
                  <Skeleton variant="text" height={30} />
                </Box>
              ) : selectedTemplate ? (
                <Box>
                  <Typography variant="subtitle1">
                    {selectedTemplate.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {selectedTemplate.description}
                  </Typography>
                  
                  <Typography variant="subtitle2" sx={{ mt: 2 }}>
                    Required Sections:
                  </Typography>
                  <Box sx={{ mt: 1 }}>
                    {selectedTemplateSections.map((section, index) => (
                      <Chip
                        key={index}
                        label={section.title || section}
                        size="small"
                        sx={{ mr: 1, mb: 1 }}
                      />
                    ))}
                  </Box>
                  
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    Regulatory Body: {selectedTemplate.regulatoryBody || 'Various'}
                  </Typography>
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  Select a document type to view template information.
                </Typography>
              )}
            </Paper>
            
            {/* Document Editor */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom>
                Document Content
              </Typography>
              <Divider sx={{ mb: 2 }} />
              
              <Typography variant="body2" color="text.secondary" paragraph>
                Enter the content for your document. The AI will process this information and format it according to regulatory standards.
              </Typography>
              
              <TextField
                fullWidth
                multiline
                minRows={10}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your document content here..."
                variant="outlined"
                disabled={isLoading}
              />
              
              {(error || success) && (
                <Box sx={{ mt: 2 }}>
                  {error && (
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {error}
                    </Alert>
                  )}
                  {success && (
                    <Alert severity="success" sx={{ mb: 2 }}>
                      {success}
                    </Alert>
                  )}
                </Box>
              )}
            </Paper>
          </Grid>
        </Grid>
      )}

      {/* Results Tab */}
      {activeTab === 1 && result && (
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                <Typography variant="h6">
                  Generated Document
                </Typography>
                <Box>
                  <Tooltip title="Export as Markdown">
                    <IconButton onClick={() => handleExport('md')} size="small" sx={{ ml: 1 }}>
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Export as PDF">
                    <IconButton onClick={() => handleExport('pdf')} size="small" sx={{ ml: 1 }}>
                      <SaveIcon />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
              <Divider sx={{ mb: 2 }} />
              
              <ResultDisplay 
                content={result.generatedContent}
                useMarkdown={true}
              />
              
              {result.sections && result.sections.length > 0 && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h6" gutterBottom>
                    Document Sections
                  </Typography>
                  <Divider sx={{ mb: 2 }} />
                  
                  {result.sections.map((section, index) => (
                    <Accordion key={index} sx={{ mb: 1 }}>
                      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{section.title}</Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <Typography variant="body2" component="div">
                          <ResultDisplay 
                            content={section.content}
                            useMarkdown={true}
                            noWrapper
                          />
                        </Typography>
                      </AccordionDetails>
                    </Accordion>
                  ))}
                </Box>
              )}
              
              <Box sx={{ mt: 3, display: 'flex', justifyContent: 'space-between' }}>
                <Button
                  variant="outlined"
                  onClick={() => setActiveTab(0)}
                  startIcon={<ChevronRightIcon sx={{ transform: 'rotate(180deg)' }} />}
                >
                  Back to Editor
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => window.print()}
                  startIcon={<FileCopyIcon />}
                >
                  Print Document
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default DocumentGenerator;
