import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: ${props => props.align || 'flex-start'};
  text-align: ${props => props.align === 'center' ? 'center' : 'left'};
  height: 100%;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${props => props.bgColor || '#E0E7FF'};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: ${props => props.iconColor || '#6366F1'};
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 0.75rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #6B7280;
  line-height: 1.5;
`;

const FeatureList = styled.ul`
  margin-top: 1rem;
  padding-left: 1.5rem;
  list-style-type: none;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  
  &:before {
    content: '✓';
    color: #10B981;
    margin-right: 0.5rem;
    margin-left: -1.5rem;
  }
`;

const FeatureCard = ({ 
  icon, 
  title, 
  description, 
  features, 
  align = 'flex-start',
  iconBgColor,
  iconColor
}) => {
  return (
    <CardContainer align={align}>
      {icon && (
        <IconWrapper bgColor={iconBgColor} iconColor={iconColor}>
          {icon}
        </IconWrapper>
      )}
      <Title>{title}</Title>
      <Description>{description}</Description>
      {features && features.length > 0 && (
        <FeatureList>
          {features.map((feature, index) => (
            <FeatureItem key={index}>{feature}</FeatureItem>
          ))}
        </FeatureList>
      )}
    </CardContainer>
  );
};

export default FeatureCard;
