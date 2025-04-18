import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  background: ${props => props.gradient ? 'linear-gradient(120deg, #E0E7FF 0%, #EDE9FE 100%)' : 'white'};
  padding: 6rem 2rem;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: #6B7280;
  margin-bottom: 2rem;
  line-height: 1.5;
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Hero = ({ 
  title, 
  subtitle, 
  children,
  gradient = false
}) => {
  return (
    <HeroContainer gradient={gradient}>
      <HeroContent>
        <HeroTitle>{title}</HeroTitle>
        {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
        {children && (
          <HeroButtons>
            {children}
          </HeroButtons>
        )}
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
