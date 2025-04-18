import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaTimes, FaExclamationTriangle } from 'react-icons/fa';

const AlertContainer = styled.div`
  position: fixed;
  top: ${props => props.position === 'top' ? '1rem' : 'auto'};
  bottom: ${props => props.position === 'bottom' ? '1rem' : 'auto'};
  left: 50%;
  transform: translateX(-50%);
  background-color: ${props => {
    switch (props.type) {
      case 'error': return '#FEE2E2';
      case 'warning': return '#FEF3C7';
      case 'success': return '#D1FAE5';
      default: return '#E0F2FE';
    }
  }};
  color: ${props => {
    switch (props.type) {
      case 'error': return '#B91C1C';
      case 'warning': return '#92400E';
      case 'success': return '#065F46';
      default: return '#0C4A6E';
    }
  }};
  padding: 0.75rem 1rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  max-width: 90%;
  width: 400px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  opacity: ${props => props.isVisible ? '1' : '0'};
  transform: ${props => props.isVisible ? 'translateX(-50%)' : 'translateX(-50%) translateY(-1rem)'};
  transition: opacity 0.3s ease, transform 0.3s ease;
  pointer-events: ${props => props.isVisible ? 'all' : 'none'};
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const MessageContainer = styled.div`
  flex: 1;
`;

const AlertTitle = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const AlertMessage = styled.div`
  font-size: 0.875rem;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem;
  
  &:hover {
    opacity: 1;
  }
`;

const ErrorAlert = ({ 
  type = 'error', 
  title, 
  message, 
  position = 'top', 
  duration = 5000, 
  isVisible = false,
  onClose 
}) => {
  const [visible, setVisible] = useState(isVisible);
  
  useEffect(() => {
    setVisible(isVisible);
    
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        if (onClose) onClose();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);
  
  const handleClose = () => {
    setVisible(false);
    if (onClose) onClose();
  };
  
  return (
    <AlertContainer type={type} position={position} isVisible={visible}>
      <IconContainer>
        <FaExclamationTriangle />
      </IconContainer>
      <MessageContainer>
        {title && <AlertTitle>{title}</AlertTitle>}
        {message && <AlertMessage>{message}</AlertMessage>}
      </MessageContainer>
      <CloseButton onClick={handleClose} aria-label="Close alert">
        <FaTimes />
      </CloseButton>
    </AlertContainer>
  );
};

export default ErrorAlert;
