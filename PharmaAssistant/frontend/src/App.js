import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

// Components
import Header from './components/Header';
import Sidebar from './components/Sidebar';

// Pages
import Dashboard from './pages/Dashboard';
import DocumentGenerator from './pages/DocumentGenerator';
import DocumentSummarizer from './pages/DocumentSummarizer';
import ComplianceChecker from './pages/ComplianceChecker';
import SimplifyText from './pages/SimplifyText';
import Templates from './pages/Templates';
import RegulatoryGuidelines from './pages/RegulatoryGuidelines';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Header />
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          mt: 8,
          ml: { sm: '240px' },
          width: { sm: `calc(100% - 240px)` }
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/generate" element={<DocumentGenerator />} />
          <Route path="/summarize" element={<DocumentSummarizer />} />
          <Route path="/compliance" element={<ComplianceChecker />} />
          <Route path="/simplify" element={<SimplifyText />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/guidelines" element={<RegulatoryGuidelines />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
