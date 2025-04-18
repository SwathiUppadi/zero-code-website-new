import React from 'react';
import styled from 'styled-components';
import Section from '../components/Section';
import Button from '../components/Button';

const StepsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

const StepItem = styled.div`
  display: flex;
  margin-bottom: 4rem;
  gap: 3rem;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
    gap: 2rem;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepNumber = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: #818CF8;
  margin-bottom: 1rem;
`;

const StepTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
`;

const StepDescription = styled.p`
  font-size: 1rem;
  color: #6B7280;
  line-height: 1.5;
  margin-bottom: 1.5rem;
`;

const StepImageContainer = styled.div`
  flex: 1;
  background: linear-gradient(120deg, #E0E7FF 0%, #EDE9FE 100%);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
`;

const StepImagePlaceholder = styled.div`
  padding: 1rem;
  background-color: white;
  border-radius: 6px;
  font-weight: 500;
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const HowItWorksPage = () => {
  return (
    <Section
      title="How It Works"
      subtitle="A simple three-step process to bring your ideas to life"
    >
      <StepsContainer>
        <StepItem>
          <StepContent>
            <StepNumber>01</StepNumber>
            <StepTitle>Tell Codeflow what you want to build</StepTitle>
            <StepDescription>
              Using natural language, describe your project, features, or the problem you're trying to solve. No technical jargon required.
            </StepDescription>
          </StepContent>
          <StepImageContainer>
            <StepImagePlaceholder>Step 1 visualization</StepImagePlaceholder>
          </StepImageContainer>
        </StepItem>

        <StepItem reverse>
          <StepImageContainer>
            <StepImagePlaceholder>Step 2 visualization</StepImagePlaceholder>
          </StepImageContainer>
          <StepContent>
            <StepNumber>02</StepNumber>
            <StepTitle>Watch AI generate your project</StepTitle>
            <StepDescription>
              Codeflow breaks down your request, plans the architecture, and generates all necessary code, handling dependencies and integrations automatically.
            </StepDescription>
          </StepContent>
        </StepItem>

        <StepItem>
          <StepContent>
            <StepNumber>03</StepNumber>
            <StepTitle>Customize, Debug, Deploy</StepTitle>
            <StepDescription>
              Fine-tune your application with additional instructions, test it in real-time, and deploy with a single click to your preferred platform.
            </StepDescription>
          </StepContent>
          <StepImageContainer>
            <StepImagePlaceholder>Step 3 visualization</StepImagePlaceholder>
          </StepImageContainer>
        </StepItem>
      </StepsContainer>

      <CtaContainer>
        <Button to="/join-waitlist" variant="primary" size="large">
          Join the Beta
        </Button>
      </CtaContainer>
    </Section>
  );
};

export default HowItWorksPage;
