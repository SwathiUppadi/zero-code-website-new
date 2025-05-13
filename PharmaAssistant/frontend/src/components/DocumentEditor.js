import React from 'react';
import { 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Box, 
  Card, 
  CardContent,
  CircularProgress
} from '@mui/material';

const DocumentEditor = ({ 
  title,
  subtitle,
  content,
  setContent,
  isLoading,
  onSubmit,
  buttonText = 'Process',
  placeholder = 'Enter your text here...',
  minRows = 10,
  children
}) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        {subtitle}
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <TextField
                fullWidth
                multiline
                minRows={minRows}
                placeholder={placeholder}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                variant="outlined"
                disabled={isLoading}
              />
              
              {children}
              
              <Box sx={{ mt: 2, display: 'flex', justifyContent: 'flex-end' }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  onClick={onSubmit}
                  disabled={isLoading || !content.trim()}
                  startIcon={isLoading ? <CircularProgress size={20} color="inherit" /> : null}
                >
                  {isLoading ? 'Processing...' : buttonText}
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocumentEditor;
