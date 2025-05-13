import React, { useState, useEffect } from 'react';
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
import { checkCompliance, getRegulatoryGuidelines } from '../utils/api';

const ComplianceChecker = () => {
  const [content, setContent] = useState('');
  const [standard, setStandard] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [standards, setStandards] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStandards = async () => {
      try {
        const response = await getRegulatoryGuidelines();
        setStandards(response.data);
        if (response.data.length > 0) {
          setStandard(response.data[0].id);
        }
      } catch (err) {
        setError('Failed to load regulatory standards. Please try again later.');
      }
    };

    fetchStandards();
  }, []);

  const handleSubmit = async () => {
    if (!standard) {
      setError('Please select a regulatory standard');
      return;
    }

    setIsLoading(true);
    setError('');
    
    try {
      const response = await checkCompliance(content, standard);
      setResult(response.data);
    } catch (err) {
      setError('Failed to check compliance. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Format the compliance results as markdown
  const formatResults = (result) => {
    if (!result) return '';

    let markdown = `## Compliance Analysis\n\n`;
    markdown += `**Compliance Score**: ${result.complianceScore}%\n\n`;
    
    if (result.suggestions && result.suggestions.length > 0) {
      markdown += `### Suggestions for Improvement\n\n`;
      result.suggestions.forEach((suggestion, index) => {
        markdown += `${index + 1}. ${suggestion}\n`;
      });
      markdown += '\n';
    }
    
    if (result.missingElements && result.missingElements.length > 0) {
      markdown += `### Missing Elements\n\n`;
      result.missingElements.forEach((element, index) => {
        markdown += `${index + 1}. ${element}\n`;
      });
    }
    
    return markdown;
  };

  return (
    <div>
      <DocumentEditor
        title="Compliance Checker"
        subtitle="Compare your document with regulatory standards to identify gaps and areas for improvement."
        content={content}
        setContent={setContent}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        buttonText="Check Compliance"
        placeholder="Paste the document content to check for compliance..."
      >
        <FormControl fullWidth sx={{ mt: 2 }}>
          <InputLabel id="standard-label">Regulatory Standard</InputLabel>
          <Select
            labelId="standard-label"
            id="standard"
            value={standard}
            label="Regulatory Standard"
            onChange={(e) => setStandard(e.target.value)}
            disabled={isLoading}
          >
            {standards.map((std) => (
              <MenuItem key={std.id} value={std.id}>
                {std.name} - {std.title}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>Select the regulatory standard to check compliance against</FormHelperText>
        </FormControl>
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </DocumentEditor>
      
      {result && (
        <ResultDisplay 
          title="Compliance Analysis"
          content={formatResults(result)}
          useMarkdown={true}
        />
      )}
    </div>
  );
};

export default ComplianceChecker;
