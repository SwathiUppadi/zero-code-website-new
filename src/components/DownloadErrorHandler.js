import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes, FaExclamationTriangle, FaWifi, FaBan, FaLock } from 'react-icons/fa';

const ErrorContainer = styled.div`
  background-color: #FEE2E2;
  border-left: 4px solid #DC2626;
  color: #7F1D1D;
  padding: 1rem;
  margin-bottom: 1.5rem;
  border-radius: 0 4px 4px 0;
  display: ${props => props.visible ? 'flex' : 'none'};
  align-items: flex-start;
  gap: 1rem;
`;

const IconContainer = styled.div`
  color: #DC2626;
  font-size: 1.25rem;
  flex-shrink: 0;
  padding-top: 0.125rem;
`;

const ErrorContent = styled.div`
  flex: 1;
`;

const ErrorTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ErrorMessage = styled.div`
  color: #9B1C1C;
  font-size: 0.875rem;
`;

const ErrorActions = styled.div`
  margin-top: 0.75rem;
  display: flex;
  gap: 0.75rem;
`;

const ActionButton = styled.button`
  font-size: 0.75rem;
  padding: 0.375rem 0.75rem;
  background-color: ${props => props.primary ? '#DC2626' : 'transparent'};
  color: ${props => props.primary ? 'white' : '#DC2626'};
  border: 1px solid ${props => props.primary ? '#DC2626' : '#DC2626'};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#B91C1C' : '#FECACA'};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #9B1C1C;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  
  &:hover {
    color: #7F1D1D;
  }
`;

const DownloadErrorHandler = ({ errorType, message, onClose, onRetry, onHelp }) => {
  const [visible, setVisible] = useState(true);
  
  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };
  
  let title = 'Download Error';
  let icon = <FaExclamationTriangle />;
  
  switch (errorType) {
    case 'network':
      title = 'Network Error';
      icon = <FaWifi />;
      break;
    case 'permission':
      title = 'Permission Denied';
      icon = <FaLock />;
      break;
    case 'compatibility':
      title = 'Compatibility Issue';
      icon = <FaBan />;
      break;
    default:
      break;
  }
  
  return (
    <ErrorContainer visible={visible}>
      <IconContainer>
        {icon}
      </IconContainer>
      <ErrorContent>
        <ErrorTitle>{title}</ErrorTitle>
        <ErrorMessage>{message || 'An error occurred during download. Please try again later.'}</ErrorMessage>
        <ErrorActions>
          <ActionButton primary onClick={onRetry}>Try Again</ActionButton>
          <ActionButton onClick={onHelp}>Get Help</ActionButton>
        </ErrorActions>
      </ErrorContent>
      <CloseButton onClick={handleClose} aria-label="Close error message">
        <FaTimes />
      </CloseButton>
    </ErrorContainer>
  );
};

export default DownloadErrorHandler;
