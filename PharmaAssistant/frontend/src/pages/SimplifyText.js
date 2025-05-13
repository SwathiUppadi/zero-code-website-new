import React, { useState } from 'react';
import { 
  Slider, 
  Typography, 
  Alert,
  Box
} from '@mui/material';
import DocumentEditor from '../components/DocumentEditor';
import ResultDisplay from '../components/ResultDisplay';
import { simplifyText } from '../utils/api';

const readingLevelMarks = [
  { value: 6, label: 'Grade 6' },
  { value: 8, label: 'Grade 8' },
  { value: 10, label: 'Grade 10' },
  { value: 12, label: 'Grade 12' },
  { value: 14, label: 'College' }
];

const SimplifyText = () => {
  const [content, setContent] = useState('');
  const [readingLevel, setReadingLevel] = useState(8);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');
    
    try {
      const response = await simplifyText(content, readingLevel);
      setResult(response.data);
    } catch (err) {
      setError('Failed to simplify text. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  // Format the simplification results
  const formatResults = (result) => {
    if (!result) return '';

    let markdown = `## Simplified Content\n\n`;
    markdown += result.simplifiedContent;
    
    markdown += `\n\n## Readability Metrics\n\n`;
    markdown += `- **Flesch Reading Ease**: ${result.readabilityScore.flesch} (Higher is easier to read)\n`;
    markdown += `- **Flesch-Kincaid Grade Level**: ${result.readabilityScore.fleschKincaid}\n`;
    markdown += `- **SMOG Index**: ${result.readabilityScore.smog}\n`;
    
    return markdown;
  };

  return (
    <div>
      <DocumentEditor
        title="Simplify Text"
        subtitle="Rewrite technical content into plain language for patient-facing documents and informed consent."
        content={content}
        setContent={setContent}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        buttonText="Simplify Text"
        placeholder="Paste the technical content to simplify here..."
      >
        <Box sx={{ mt: 3, mb: 2 }}>
          <Typography id="reading-level-slider" gutterBottom>
            Target Reading Level
          </Typography>
          <Slider
            aria-labelledby="reading-level-slider"
            value={readingLevel}
            onChange={(e, newValue) => setReadingLevel(newValue)}
            min={6}
            max={14}
            step={1}
            marks={readingLevelMarks}
            valueLabelDisplay="auto"
            disabled={isLoading}
          />
          <Typography variant="body2" color="text.secondary">
            Select the target reading level for the simplified text. Lower grade levels are easier to understand.
          </Typography>
        </Box>
        
        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}
      </DocumentEditor>
      
      {result && (
        <ResultDisplay 
          title="Simplified Text"
          content={formatResults(result)}
          useMarkdown={true}
        />
      )}
    </div>
  );
};

export default SimplifyText;
