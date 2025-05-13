import React from 'react';
import { Box, Typography, Paper, Divider } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

/**
 * Component to display processed document results
 * @param {string} title - Optional title to display
 * @param {string} content - Content to display
 * @param {boolean} useMarkdown - Whether to render content as Markdown
 * @param {boolean} noWrapper - Whether to skip the Paper wrapper
 * @param {Object} sx - Custom styles
 */
const ResultDisplay = ({ 
  title, 
  content, 
  useMarkdown = true, 
  noWrapper = false,
  sx = {} 
}) => {
  // Render content as plain text or Markdown
  const renderContent = () => {
    if (!content) {
      return (
        <Typography variant="body2" color="text.secondary">
          No content to display
        </Typography>
      );
    }
    
    if (useMarkdown) {
      return (
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: props => <Typography variant="h4" gutterBottom {...props} />,
            h2: props => <Typography variant="h5" gutterBottom {...props} sx={{ mt: 3 }} />,
            h3: props => <Typography variant="h6" gutterBottom {...props} sx={{ mt: 2 }} />,
            h4: props => <Typography variant="subtitle1" gutterBottom {...props} sx={{ fontWeight: 'bold' }} />,
            h5: props => <Typography variant="subtitle2" gutterBottom {...props} />,
            h6: props => <Typography variant="subtitle2" gutterBottom {...props} sx={{ fontStyle: 'italic' }} />,
            p: props => <Typography variant="body1" paragraph {...props} />,
            a: props => <a style={{ color: '#1976d2', textDecoration: 'none' }} {...props} target="_blank" rel="noopener noreferrer" />,
            table: props => (
              <Box sx={{ overflowX: 'auto', my: 2 }}>
                <table style={{ borderCollapse: 'collapse', width: '100%' }} {...props} />
              </Box>
            ),
            th: props => <th style={{ borderBottom: '1px solid #ddd', padding: '8px', textAlign: 'left' }} {...props} />,
            td: props => <td style={{ borderBottom: '1px solid #ddd', padding: '8px' }} {...props} />,
            li: props => <li style={{ marginBottom: '4px' }} {...props} />,
            code: props => (
              <code
                style={{
                  backgroundColor: '#f5f5f5',
                  padding: '2px 4px',
                  borderRadius: '4px',
                  fontFamily: 'monospace'
                }}
                {...props}
              />
            ),
            pre: props => (
              <pre
                style={{
                  backgroundColor: '#f5f5f5',
                  padding: '16px',
                  borderRadius: '4px',
                  overflow: 'auto',
                  fontFamily: 'monospace',
                  fontSize: '0.875rem',
                  marginBottom: '16px'
                }}
                {...props}
              />
            ),
            blockquote: props => (
              <blockquote
                style={{
                  borderLeft: '4px solid #1976d2',
                  paddingLeft: '16px',
                  margin: '16px 0',
                  fontStyle: 'italic',
                  color: 'rgba(0, 0, 0, 0.7)'
                }}
                {...props}
              />
            ),
            hr: props => <Divider sx={{ my: 2 }} {...props} />
          }}
        >
          {content}
        </ReactMarkdown>
      );
    } else {
      return (
        <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap' }}>
          {content}
        </Typography>
      );
    }
  };
  
  // Return content with or without wrapper
  if (noWrapper) {
    return renderContent();
  }
  
  return (
    <Paper sx={{ p: 3, ...sx }}>
      {title && (
        <>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Divider sx={{ mb: 2 }} />
        </>
      )}
      
      <Box sx={{ maxHeight: '500px', overflowY: 'auto', pr: 1 }}>
        {renderContent()}
      </Box>
    </Paper>
  );
};

export default ResultDisplay;
