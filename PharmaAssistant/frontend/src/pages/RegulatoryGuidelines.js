import React, { useState, useEffect } from 'react';
import { 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Divider,
  Chip,
  Link,
  Alert,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tab,
  Tabs
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GavelIcon from '@mui/icons-material/Gavel';
import DescriptionIcon from '@mui/icons-material/Description';
import { getRegulatoryGuidelines, getDocumentTypes } from '../utils/api';

const RegulatoryGuidelines = () => {
  const [guidelines, setGuidelines] = useState([]);
  const [documentTypes, setDocumentTypes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const guidelinesResponse = await getRegulatoryGuidelines();
        setGuidelines(guidelinesResponse.data);
        
        const documentTypesResponse = await getDocumentTypes();
        setDocumentTypes(documentTypesResponse.data);
      } catch (err) {
        setError('Failed to load regulatory information. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Regulatory Guidelines
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Reference information about regulatory standards, document types, and compliance requirements.
      </Typography>

      {error && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {error}
        </Alert>
      )}

      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="regulatory tabs">
          <Tab label="Regulatory Guidelines" />
          <Tab label="Document Types" />
        </Tabs>
      </Box>

      {/* Regulatory Guidelines Tab */}
      <div role="tabpanel" hidden={tabValue !== 0}>
        {tabValue === 0 && (
          <Grid container spacing={3}>
            {guidelines.map((guideline) => (
              <Grid item xs={12} key={guideline.id}>
                <Card>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <GavelIcon color="primary" sx={{ mr: 1 }} />
                      <Typography variant="h6" component="div">
                        {guideline.name} - {guideline.title}
                      </Typography>
                    </Box>
                    <Chip label={guideline.issuer} color="primary" size="small" sx={{ mb: 2 }} />
                    <Typography variant="body1" paragraph>
                      {guideline.summary}
                    </Typography>
                    <Link href={guideline.url} target="_blank" rel="noopener">
                      View Official Document
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </div>

      {/* Document Types Tab */}
      <div role="tabpanel" hidden={tabValue !== 1}>
        {tabValue === 1 && (
          <Box>
            {documentTypes.map((docType) => (
              <Accordion key={docType.id}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${docType.id}-content`}
                  id={`${docType.id}-header`}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DescriptionIcon color="primary" sx={{ mr: 1 }} />
                    <Typography variant="subtitle1">{docType.name}</Typography>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body1" paragraph>
                    {docType.description}
                  </Typography>
                  <Divider sx={{ my: 1 }} />
                  <Typography variant="subtitle2" gutterBottom>
                    Regulatory Framework: <Chip label={docType.regulatoryFramework} size="small" />
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
                    Typical Sections:
                  </Typography>
                  <Grid container spacing={1}>
                    {docType.typicalSections.map((section, index) => (
                      <Grid item key={index}>
                        <Chip label={section} size="small" variant="outlined" />
                      </Grid>
                    ))}
                  </Grid>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        )}
      </div>
    </Box>
  );
};

export default RegulatoryGuidelines;
