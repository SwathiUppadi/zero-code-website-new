import React from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle } from 'react-icons/fa';
import Button from '../components/Button';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 2rem;
`;

const ErrorIcon = styled.div`
  font-size: 4rem;
  color: #EF4444;
  margin-bottom: 2rem;
`;

const ErrorTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111827;
`;

const ErrorMessage = styled.p`
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const TroubleshootingList = styled.ul`
  text-align: left;
  margin-bottom: 2rem;
  padding-left: 1.5rem;
`;

const TroubleshootingItem = styled.li`
  margin-bottom: 0.5rem;
  color: #4B5563;
`;

const ErrorCode = styled.div`
  font-family: monospace;
  padding: 0.5rem 1rem;
  background-color: #F3F4F6;
  border-radius: 4px;
  color: #4B5563;
  margin-bottom: 2rem;
`;

const ActionsContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const ErrorPage = () => {
  return (
    <ErrorContainer>
      <ErrorIcon>
        <FaExclamationTriangle />
      </ErrorIcon>
      <ErrorTitle>This site can't be reached</ErrorTitle>
      <ErrorMessage>
        localhost refused to connect.
      </ErrorMessage>
      <TroubleshootingList>
        <TroubleshootingItem>Checking the connection</TroubleshootingItem>
        <TroubleshootingItem>Checking the proxy and the firewall</TroubleshootingItem>
      </TroubleshootingList>
      <ErrorCode>ERR_CONNECTION_REFUSED</ErrorCode>
      <ActionsContainer>
        <Button variant="secondary">Details</Button>
        <Button variant="primary">Reload</Button>
      </ActionsContainer>
    </ErrorContainer>
  );
};

export default ErrorPage;
