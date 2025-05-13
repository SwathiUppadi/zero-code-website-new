import React from 'react';
import { 
  Typography, 
  Grid, 
  Paper, 
  Box, 
  Card, 
  CardContent, 
  CardActionArea,
  IconButton,
  Stack
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Icons
import CreateIcon from '@mui/icons-material/Create';
import SummarizeIcon from '@mui/icons-material/Summarize';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import DescriptionIcon from '@mui/icons-material/Description';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const featureCards = [
  {
    title: 'Generate Document',
    icon: <CreateIcon fontSize="large" color="primary" />,
    description: 'Create regulatory-compliant documents like CSRs and IBs based on your inputs',
    path: '/generate'
  },
  {
    title: 'Summarize Document',
    icon: <SummarizeIcon fontSize="large" color="primary" />,
    description: 'Convert lengthy clinical trial data into concise regulatory summaries',
    path: '/summarize'
  },
  {
    title: 'Compliance Check',
    icon: <CheckCircleOutlineIcon fontSize="large" color="primary" />,
    description: 'Compare your document with regulatory standards to identify gaps',
    path: '/compliance'
  },
  {
    title: 'Simplify Text',
    icon: <FormatClearIcon fontSize="large" color="primary" />,
    description: 'Rewrite technical content into plain language for patient-facing documents',
    path: '/simplify'
  },
  {
    title: 'Document Templates',
    icon: <DescriptionIcon fontSize="large" color="primary" />,
    description: 'Access pre-built templates for common regulatory documents',
    path: '/templates'
  }
];

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Regulatory Medical Writing Assistant
      </Typography>
      <Typography variant="body1" color="text.secondary" paragraph>
        Create and refine documents for clinical trials and regulatory submissions with AI assistance
      </Typography>
      
      <Paper elevation={0} sx={{ p: 3, mb: 4, bgcolor: 'primary.light', color: 'primary.contrastText' }}>
        <Typography variant="h6">
          Welcome to PharmaAssistant
        </Typography>
        <Typography variant="body1">
          This tool helps pharmaceutical professionals create regulatory-compliant documents,
          summarize clinical trial data, and ensure adherence to FDA/EMA standards.
        </Typography>
      </Paper>
      
      <Grid container spacing={3}>
        {featureCards.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.title}>
            <Card sx={{ height: '100%' }}>
              <CardActionArea 
                onClick={() => navigate(card.path)}
                sx={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
              >
                <CardContent sx={{ width: '100%' }}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                    {card.icon}
                    <IconButton size="small">
                      <ArrowForwardIcon />
                    </IconButton>
                  </Stack>
                  <Typography variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Dashboard;
