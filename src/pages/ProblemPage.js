import React from 'react';
import styled from 'styled-components';
import { FaExclamationTriangle, FaClock } from 'react-icons/fa';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';

const ProblemGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const ProblemPage = () => {
  return (
    <>
      <Section
        title="The Problem"
        subtitle="Even in 2025, building software remains challenging for most people"
      >
        <ProblemGrid>
          <FeatureCard
            icon={<FaExclamationTriangle />}
            title="For Non-Technical Users"
            description="Technical barriers prevent turning ideas into reality. Learning to code takes months or years, and hiring developers is expensive and time-consuming."
            iconBgColor="#FECACA"
            iconColor="#EF4444"
            features={[
              "High barrier to entry for non-programmers",
              "Long learning curve for basic proficiency",
              "Expensive to hire specialized talent",
              "Ideas often never make it to implementation",
              "No-code tools often lack customization"
            ]}
          />
          
          <FeatureCard
            icon={<FaClock />}
            title="For Developers"
            description="Hours lost to boilerplate code, environment setup, dependency fixes, and debugging trivial issues. The development experience is full of avoidable friction."
            iconBgColor="#FEF3C7"
            iconColor="#F59E0B"
            features={[
              "Time wasted on repetitive tasks",
              "Environment configuration challenges",
              "Dependency hell and versioning issues",
              "Context switching between tools",
              "Difficult onboarding to new codebases"
            ]}
          />
        </ProblemGrid>

        <CtaContainer>
          <Button to="/solution" variant="primary" size="large">Discover Our Solution</Button>
        </CtaContainer>
      </Section>
    </>
  );
};

export default ProblemPage;
