import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  background-color: ${props => props.bgColor || 'white'};
`;

const SectionContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6B7280;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.5;
`;

const Section = ({ 
  title, 
  subtitle, 
  children, 
  bgColor,
  id
}) => {
  return (
    <SectionContainer bgColor={bgColor} id={id}>
      <SectionContent>
        {(title || subtitle) && (
          <SectionHeader>
            {title && <SectionTitle>{title}</SectionTitle>}
            {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
          </SectionHeader>
        )}
        {children}
      </SectionContent>
    </SectionContainer>
  );
};

export default Section;
