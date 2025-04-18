import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ButtonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${props => props.size === 'large' ? '0.75rem 1.5rem' : '0.5rem 1rem'};
  font-weight: 500;
  font-size: ${props => props.size === 'large' ? '1rem' : '0.875rem'};
  border-radius: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  border: none;

  ${props => props.fullWidth && css`
    width: 100%;
  `}

  ${props => {
    switch (props.variant) {
      case 'primary':
        return css`
          background-color: #6366F1;
          color: white;
          &:hover {
            background-color: #4F46E5;
          }
        `;
      case 'secondary':
        return css`
          background-color: #F3F4F6;
          color: #111827;
          &:hover {
            background-color: #E5E7EB;
          }
        `;
      case 'outline':
        return css`
          background-color: transparent;
          border: 1px solid #6366F1;
          color: #6366F1;
          &:hover {
            background-color: #EEF2FF;
          }
        `;
      case 'ghost':
        return css`
          background-color: transparent;
          color: #6366F1;
          &:hover {
            background-color: #EEF2FF;
          }
        `;
      default:
        return css`
          background-color: #6366F1;
          color: white;
          &:hover {
            background-color: #4F46E5;
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const StyledLink = styled(Link)`
  ${ButtonStyles}
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  fullWidth = false, 
  to, 
  onClick, 
  disabled = false,
  type = 'button',
  ...props 
}) => {
  if (to) {
    return (
      <StyledLink 
        to={to} 
        variant={variant} 
        size={size} 
        fullWidth={fullWidth} 
        {...props}
      >
        {children}
      </StyledLink>
    );
  }

  return (
    <StyledButton 
      variant={variant} 
      size={size} 
      fullWidth={fullWidth} 
      onClick={onClick} 
      disabled={disabled}
      type={type}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
