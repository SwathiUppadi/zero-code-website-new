import React, { useState } from 'react';
import {
  Box,
  Button,
  Typography,
  Paper,
  CircularProgress,
  Alert,
  IconButton,
  Tooltip
} from '@mui/material';
import { 
  CloudUpload as CloudUploadIcon,
  ClearAll as ClearAllIcon,
  Description as DescriptionIcon
} from '@mui/icons-material';

/**
 * File upload component for document processing
 * @param {Function} onUpload - Callback when file is uploaded
 * @param {string} acceptedTypes - Comma-separated list of accepted file types
 * @param {boolean} disabled - Whether the component is disabled
 * @param {Object} sx - Custom styles
 */
const FileUpload = ({ onUpload, acceptedTypes = ".txt,.md,.docx,.pdf", disabled = false, sx = {} }) => {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  
  const fileInputRef = React.useRef(null);
  
  // Handle file selection
  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (!selectedFile) return;
    
    try {
      await processFile(selectedFile);
    } catch (error) {
      setError(`Error processing file: ${error.message}`);
    }
  };
  
  // Process the selected file
  const processFile = async (selectedFile) => {
    setIsLoading(true);
    setError('');
    
    try {
      // Validate file size (max 10MB)
      if (selectedFile.size > 10 * 1024 * 1024) {
        throw new Error('File size exceeds 10MB limit');
      }
      
      // Validate file type
      const fileExt = selectedFile.name.split('.').pop().toLowerCase();
      const acceptedExtensions = acceptedTypes
        .split(',')
        .map(type => type.trim().replace('.', '').toLowerCase());
      
      if (!acceptedExtensions.includes(fileExt)) {
        throw new Error(`File type .${fileExt} is not supported`);
      }
      
      // Read file content
      const content = await readFileContent(selectedFile);
      
      // Set file and call onUpload callback
      setFile(selectedFile);
      if (onUpload) {
        onUpload(content, selectedFile);
      }
    } catch (error) {
      console.error('File processing error:', error);
      setError(error.message);
      setFile(null);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Read file content based on file type
  const readFileContent = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = (event) => {
        resolve(event.target.result);
      };
      
      reader.onerror = (error) => {
        reject(new Error('Failed to read file'));
      };
      
      // Read as text for supported text formats
      const textFormats = ['txt', 'md', 'json', 'csv'];
      const fileExt = file.name.split('.').pop().toLowerCase();
      
      if (textFormats.includes(fileExt)) {
        reader.readAsText(file);
      } else {
        // For binary formats like PDF, DOCX, etc.
        // In a real implementation, this would call a backend API to extract text
        // For now, we'll just read as text and handle properly on the backend
        reader.readAsText(file);
      }
    });
  };
  
  // Clear selected file
  const handleClear = () => {
    setFile(null);
    setError('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  
  // Handle drag events
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  
  const handleDrop = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (!droppedFile) return;
    
    try {
      await processFile(droppedFile);
    } catch (error) {
      setError(`Error processing dropped file: ${error.message}`);
    }
  };
  
  return (
    <Box sx={{ ...sx }}>
      <input
        type="file"
        accept={acceptedTypes}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        ref={fileInputRef}
        disabled={disabled || isLoading}
      />
      
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          textAlign: 'center',
          backgroundColor: isDragging ? 'action.hover' : 'background.paper',
          borderStyle: isDragging ? 'dashed' : 'solid',
          borderColor: isDragging ? 'primary.main' : 'divider',
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.7 : 1,
          transition: 'all 0.2s ease-in-out'
        }}
        onClick={() => !disabled && !isLoading && fileInputRef.current.click()}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {isLoading ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <CircularProgress size={40} sx={{ mb: 2 }} />
            <Typography variant="body2" color="text.secondary">
              Processing file...
            </Typography>
          </Box>
        ) : file ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <DescriptionIcon color="primary" sx={{ mr: 1 }} />
              <Typography variant="body2" noWrap sx={{ maxWidth: '180px' }}>
                {file.name}
              </Typography>
            </Box>
            <Tooltip title="Remove file">
              <IconButton size="small" onClick={(e) => { e.stopPropagation(); handleClear(); }}>
                <ClearAllIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        ) : (
          <Box>
            <CloudUploadIcon color="primary" sx={{ fontSize: 40, mb: 1 }} />
            <Typography variant="body1" gutterBottom>
              Drag & drop file or click to browse
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Supported formats: {acceptedTypes}
            </Typography>
          </Box>
        )}
      </Paper>
      
      {error && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {error}
        </Alert>
      )}
    </Box>
  );
};

export default FileUpload;
