import React from 'react';
import styled from 'styled-components';
import { FaCode, FaBolt, FaUsers, FaBrain, FaBox, FaSyncAlt } from 'react-icons/fa';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const CtaContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
`;

const FeaturesPage = () => {
  return (
    <>
      <Section
        title="Key Features"
        subtitle="Advanced capabilities that make Codeflow powerful for everyone"
      >
        <FeaturesGrid>
          <FeatureCard
            icon={<FaCode />}
            title="Natural Language to Code"
            description="Describe what you need in plain English and watch as Codeflow generates the right code instantly."
          />
          <FeatureCard
            icon={<FaBolt />}
            title="Auto-fix Blockers"
            description="Codeflow automatically identifies and fixes errors, dependencies, and environment issues without slowing you down."
          />
          <FeatureCard
            icon={<FaUsers />}
            title="Multi-agent Task Handling"
            description="Complex tasks are broken down and handled by specialized AI agents working together to solve your problems."
          />
          <FeatureCard
            icon={<FaBrain />}
            title="Smart Project Understanding"
            description="Codeflow learns your codebase and can make contextually aware suggestions that align with your project structure and patterns."
          />
          <FeatureCard
            icon={<FaBox />}
            title="Easy Package Management"
            description="Automatically find, install, and configure the perfect packages for your project needs."
          />
          <FeatureCard
            icon={<FaSyncAlt />}
            title="Continuous Improvement"
            description="Codeflow learns from feedback to constantly improve its code generation and problem-solving capabilities."
          />
        </FeaturesGrid>

        <CtaContainer>
          <Button to="/how-it-works" variant="primary" size="large">See How It Works</Button>
        </CtaContainer>
      </Section>
    </>
  );
};

export default FeaturesPage;
