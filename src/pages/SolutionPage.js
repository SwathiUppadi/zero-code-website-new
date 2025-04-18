import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCode, FaMagic, FaCheck } from 'react-icons/fa';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';

const SolutionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const BenefitsContainer = styled.div`
  margin-top: 4rem;
`;

const BenefitsTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 2rem;
`;

const BenefitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #F9FAFB;
  }
`;

const BenefitIcon = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: #EEF2FF;
  color: #6366F1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const BenefitContent = styled.div``;

const BenefitTitle = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const BenefitDescription = styled.p`
  font-size: 0.875rem;
  color: #6B7280;
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const SolutionPage = () => {
  return (
    <>
      <Section
        title="Our Solution: Codeflow"
        subtitle="The AI-powered coding companion that's changing how we build software"
      >
        <SolutionGrid>
          <FeatureCard
            icon={<FaUser />}
            title="For Non-Tech Users"
            description="Describe what you want, and Codeflow builds it. No coding knowledge required."
            features={[
              "Use natural language to describe features",
              "Watch your app appear in real-time",
              "Deploy with one click"
            ]}
            align="center"
          />
          <FeatureCard
            icon={<FaCode />}
            title="For Tech Users"
            description="Codeflow becomes your smartest coding partner inside your favorite IDE."
            features={[
              "Generates complex logic based on comments",
              "Automates environment setup and debugging",
              "Integrates with Git, CI/CD and cloud platforms"
            ]}
            align="center"
          />
        </SolutionGrid>

        <BenefitsContainer>
          <BenefitsTitle>Key Benefits</BenefitsTitle>
          <BenefitsList>
            <BenefitItem>
              <BenefitIcon>
                <FaCheck />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>10x Faster Development</BenefitTitle>
                <BenefitDescription>
                  Complete projects in hours instead of days or weeks.
                </BenefitDescription>
              </BenefitContent>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>
                <FaCheck />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>No Technical Barriers</BenefitTitle>
                <BenefitDescription>
                  Anyone can build software regardless of technical background.
                </BenefitDescription>
              </BenefitContent>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>
                <FaCheck />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Reduced Costs</BenefitTitle>
                <BenefitDescription>
                  Lower development costs and faster time-to-market.
                </BenefitDescription>
              </BenefitContent>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>
                <FaCheck />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Always Up-to-Date</BenefitTitle>
                <BenefitDescription>
                  Codeflow stays current with the latest frameworks and best practices.
                </BenefitDescription>
              </BenefitContent>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>
                <FaCheck />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Smart Error Prevention</BenefitTitle>
                <BenefitDescription>
                  Proactively identifies and corrects potential issues before they occur.
                </BenefitDescription>
              </BenefitContent>
            </BenefitItem>
            <BenefitItem>
              <BenefitIcon>
                <FaCheck />
              </BenefitIcon>
              <BenefitContent>
                <BenefitTitle>Continuous Learning</BenefitTitle>
                <BenefitDescription>
                  Improves with each interaction, adapting to your patterns and preferences.
                </BenefitDescription>
              </BenefitContent>
            </BenefitItem>
          </BenefitsList>
        </BenefitsContainer>

        <CtaContainer>
          <Button to="/features" variant="primary" size="large">Explore Features</Button>
        </CtaContainer>
      </Section>
    </>
  );
};

export default SolutionPage;
