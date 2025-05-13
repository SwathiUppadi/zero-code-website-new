import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardActionArea,
  Divider,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Alert,
  Box,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import { getTemplates, getTemplate } from '../utils/api';
import ReactMarkdown from 'react-markdown';

const Templates = () => {
  const [templates, setTemplates] = useState([]);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await getTemplates();
        setTemplates(response.data);
      } catch (err) {
        setError('Failed to load templates. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTemplates();
  }, []);

  const handleOpenTemplate = async (id) => {
    try {
      const response = await getTemplate(id);
      setSelectedTemplate(response.data);
      setOpen(true);
    } catch (err) {
      setError('Failed to load template details. Please try again later.');
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Document Templates
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Access pre-built templates for common regulatory documents that follow FDA/EMA guidelines.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Grid container spacing={3}>
        {templates.map((template) => (
          <Grid item xs={12} sm={6} md={4} key={template.id}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea 
                onClick={() => handleOpenTemplate(template.id)}
                sx={{ height: '100%' }}
              >
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DescriptionIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="h6" component="div">
                      {template.name}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {template.description}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="subtitle2" gutterBottom>
                    Sections:
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {template.sections.slice(0, 3).map((section) => (
                      <Chip key={section} label={section} size="small" />
                    ))}
                    {template.sections.length > 3 && (
                      <Chip label={`+${template.sections.length - 3} more`} size="small" variant="outlined" />
                    )}
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Template Details Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="md"
        scroll="paper"
      >
        {selectedTemplate && (
          <>
            <DialogTitle>
              {selectedTemplate.name}
            </DialogTitle>
            <DialogContent dividers>
              <Typography variant="subtitle1" gutterBottom>
                {selectedTemplate.description}
              </Typography>
              <Divider sx={{ my: 2 }} />
              
              <Typography variant="h6" gutterBottom>
                Structure
              </Typography>
              <List>
                {selectedTemplate.sections && selectedTemplate.sections.map((section, index) => (
                  <ListItem key={index}>
                    <ListItemText primary={section} />
                  </ListItem>
                ))}
              </List>
              
              <Divider sx={{ my: 2 }} />
              <Typography variant="h6" gutterBottom>
                Template Content
              </Typography>
              <Box sx={{ p: 2, bgcolor: '#f5f5f5', borderRadius: 1 }}>
                <ReactMarkdown>
                  {selectedTemplate.content}
                </ReactMarkdown>
              </Box>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button 
                variant="contained" 
                color="primary"
                onClick={handleClose}
              >
                Use Template
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Box>
  );
};

export default Templates;
