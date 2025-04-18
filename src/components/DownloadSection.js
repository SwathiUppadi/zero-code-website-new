import React, { useState } from 'react';
import styled from 'styled-components';
import { FaWindows, FaApple, FaDownload } from 'react-icons/fa';
import Button from './Button';
import DownloadErrorHandler from './DownloadErrorHandler';

const DownloadContainer = styled.div`
  padding: 4rem 2rem;
  text-align: center;
  background: linear-gradient(120deg, #EEF2FF 0%, #E0E7FF 100%);
  border-radius: 8px;
`;

const DownloadTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const DownloadSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const DownloadButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const DownloadCard = styled.div`
  background-color: white;
  border-radius: 12px;
  padding: 2rem;
  width: 280px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  width: 64px;
  height: 64px;
  background-color: ${props => props.bgColor};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: white;
`;

const DownloadCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const DownloadCardDescription = styled.p`
  color: #6B7280;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
`;

const VersionInfo = styled.div`
  font-size: 0.75rem;
  color: #9CA3AF;
  margin-top: 1rem;
`;

const SystemRequirements = styled.div`
  margin-top: 3rem;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 1.5rem;
  border-radius: 8px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const RequirementsTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const RequirementsList = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 2rem;
  text-align: left;
  flex-wrap: wrap;
`;

const RequirementSection = styled.div`
  flex: 1;
  min-width: 300px;
`;

const RequirementSectionTitle = styled.h4`
  font-weight: 600;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RequirementItem = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #4B5563;
`;

const DownloadSection = () => {
  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState(null);

  const handleDownload = (platform) => {
    try {
      // This would be replaced with actual download logic
      console.log(`Downloading for ${platform}`);
      
      // For demo purposes, randomly throw an error sometimes
      const random = Math.random();
      if (random > 0.75) {
        // Simulate a network error
        setErrorType('network');
        setError('Unable to connect to the download server. Please check your internet connection and try again.');
      } else if (random > 0.5) {
        // Simulate a permissions error
        setErrorType('permission');
        setError('You do not have permission to download this file. Please try again or contact support.');
      } else {
        // Simulate success
        setError(null);
        setErrorType(null);
        alert(`Download started for ${platform}. Check your downloads folder.`);
      }
    } catch (err) {
      setErrorType('unknown');
      setError(`Download failed: ${err.message}. Please try again later.`);
    }
  };
  
  const handleRetry = () => {
    // Clear error and retry download
    setError(null);
    setErrorType(null);
  };
  
  const handleGetHelp = () => {
    // Redirect to help page or show help modal
    window.open('/contact', '_blank');
  };

  return (
    <DownloadContainer>
      <DownloadTitle>Download Zero Code</DownloadTitle>
      <DownloadSubtitle>
        Get the Zero Code desktop app for your platform and start building software without writing code. Available for Windows and macOS.
      </DownloadSubtitle>

      {error && (
        <DownloadErrorHandler 
          errorType={errorType} 
          message={error} 
          onClose={() => {
            setError(null);
            setErrorType(null);
          }} 
          onRetry={handleRetry}
          onHelp={handleGetHelp}
        />
      )}

      <DownloadButtons>
        <DownloadCard>
          <IconContainer bgColor="#0078D7">
            <FaWindows />
          </IconContainer>
          <DownloadCardTitle>Windows</DownloadCardTitle>
          <DownloadCardDescription>
            Download Zero Code for Windows 10 and Windows 11
          </DownloadCardDescription>
          <Button 
            variant="primary" 
            fullWidth 
            onClick={() => handleDownload('windows')}
          >
            <FaDownload style={{ marginRight: '0.5rem' }} /> Download for Windows
          </Button>
          <VersionInfo>Version 1.0.0 (64-bit)</VersionInfo>
        </DownloadCard>

        <DownloadCard>
          <IconContainer bgColor="#000000">
            <FaApple />
          </IconContainer>
          <DownloadCardTitle>macOS</DownloadCardTitle>
          <DownloadCardDescription>
            Download Zero Code for macOS 11.0 (Big Sur) and above
          </DownloadCardDescription>
          <Button 
            variant="primary" 
            fullWidth
            onClick={() => handleDownload('macos')}
          >
            <FaDownload style={{ marginRight: '0.5rem' }} /> Download for macOS
          </Button>
          <VersionInfo>Version 1.0.0 (Universal)</VersionInfo>
        </DownloadCard>
      </DownloadButtons>

      <SystemRequirements>
        <RequirementsTitle>System Requirements</RequirementsTitle>
        <RequirementsList>
          <RequirementSection>
            <RequirementSectionTitle>
              <FaWindows style={{ color: '#0078D7' }} /> Windows
            </RequirementSectionTitle>
            <RequirementItem>Windows 10 (64-bit) or Windows 11</RequirementItem>
            <RequirementItem>4 GB RAM minimum, 8 GB recommended</RequirementItem>
            <RequirementItem>2 GB available disk space</RequirementItem>
            <RequirementItem>Intel Core i3 / AMD Ryzen 3 or better</RequirementItem>
            <RequirementItem>Internet connection required</RequirementItem>
          </RequirementSection>

          <RequirementSection>
            <RequirementSectionTitle>
              <FaApple style={{ color: '#000000' }} /> macOS
            </RequirementSectionTitle>
            <RequirementItem>macOS 11.0 (Big Sur) or later</RequirementItem>
            <RequirementItem>4 GB RAM minimum, 8 GB recommended</RequirementItem>
            <RequirementItem>2 GB available disk space</RequirementItem>
            <RequirementItem>Intel or Apple Silicon processor</RequirementItem>
            <RequirementItem>Internet connection required</RequirementItem>
          </RequirementSection>
        </RequirementsList>
      </SystemRequirements>
    </DownloadContainer>
  );
};

export default DownloadSection;
