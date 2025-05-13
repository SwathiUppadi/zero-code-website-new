import React, { useState } from 'react';
import { 
  FormControl, 
  InputLabel, 
  Select, 
  MenuItem, 
  Alert,
  FormHelperText
} from '@mui/material';
import DocumentEditor from '../components/DocumentEditor';
import ResultDisplay from '../components/ResultDisplay';
import { summarizeDocument } from '../utils/api';

const audiences = [
  { value: 'regulatory', label: 'Regulatory Authority' },
  { value: 'scientific', label: 'Scientific Community' },
  { value: 'patients', label: 'Patients & Public' },
  { value: 'healthcare', label: 'Healthcare Professionals' }
];

const DocumentSummarizer = () => {
  const [content, setContent] = useState('');
  const [targetAudience, setTargetAudience] = useState('regulatory');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await summarizeDocument(content, targetAudience);
      setResult(response.data);
    } catch (err) {
      setError('Failed to summarize document. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <DocumentEditor
        title="Summarize Document"
        subtitle="Convert lengthy clinical trial information into a concise, structured summary for your target audience."
        content={content}
        setContent={setContent}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        buttonText="Generate Summary"
        placeholder="Paste the document content to summarize here..."
      >
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="audience-label">Target Audience</InputLabel>
          <Select
            labelId="audience-label"
            id="audience"
            value={targetAudience}
            label="Target Audience"
            onChange={(e) => setTargetAudience(e.target.value)}
            disabled={isLoading}
          >
            {audiences.map((audience) => (
              <MenuItem key={audience.value} value={audience.value}>
                {audience.label}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select the intended audience for the summary</FormHelperText>
        </FormControl>
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </DocumentEditor>
      
      {result && (
        <ResultDisplay 
          title="Document Summary"
          content={result.summary}
          useMarkdown={true}
        />
      )}
    </div>
  );
};

export default DocumentSummarizer;
