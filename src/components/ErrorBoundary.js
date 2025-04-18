import React, { Component } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import styled from 'styled-components';
import Button from './Button';

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

const ErrorDetails = styled.pre`
  text-align: left;
  padding: 1rem;
  background-color: #F3F4F6;
  border-radius: 8px;
  overflow: auto;
  max-width: 100%;
  margin-bottom: 2rem;
  font-size: 0.875rem;
  color: #4B5563;
`;

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorIcon>
            <FaExclamationTriangle />
          </ErrorIcon>
          <ErrorTitle>Something went wrong</ErrorTitle>
          <ErrorMessage>
            We're sorry, but an unexpected error has occurred. Please try refreshing the page.
          </ErrorMessage>
          {this.state.error && (
            <ErrorDetails>
              {this.state.error.toString()}
              <br />
              {this.state.errorInfo && this.state.errorInfo.componentStack}
            </ErrorDetails>
          )}
          <Button variant="primary" onClick={this.handleRefresh}>
            Refresh Page
          </Button>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
