import React from 'react';
import styled from 'styled-components';
import { FaUser, FaCode, FaExclamationTriangle, FaClock, FaDownload, FaWindows, FaApple } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import FeatureCard from '../components/FeatureCard';
import Button from '../components/Button';

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const CtaSection = styled.div`
  text-align: center;
  background: linear-gradient(120deg, #E0E7FF 0%, #EDE9FE 100%);
  padding: 4rem 2rem;
`;

const CtaTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
`;

const CtaSubtitle = styled.p`
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 2rem;
`;

const TestimonialSection = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

const TestimonialPlaceholder = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #F9FAFB;
  border-radius: 8px;
  padding: 2rem;
`;

const PlaceholderText = styled.p`
  color: #9CA3AF;
  margin-bottom: 1.5rem;
`;

const TestimonialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const HomePage = () => {
  return (
    <>
      <Hero
        title="Coding is powerful. But for most, it's inaccessible. For developers, it's slow and repetitive."
        subtitle="We're here to change that."
        gradient={true}
      >
        <Button to="/download" variant="primary" size="large">
          <FaDownload style={{ marginRight: '0.5rem' }} /> Download Now
        </Button>
        <Button to="/features" variant="outline" size="large">
          View Features
        </Button>
      </Hero>

      <Section>
        <FeatureGrid>
          <FeatureCard
            icon={<FaExclamationTriangle />}
            title="For Non-Technical Users"
            description="Technical barriers prevent turning ideas into reality. Learning to code takes months or years, and hiring developers is expensive and time-consuming."
            iconBgColor="#FECACA"
            iconColor="#EF4444"
          />
          <FeatureCard
            icon={<FaClock />}
            title="For Developers"
            description="Hours lost to boilerplate code, environment setup, dependency fixes, and debugging trivial issues. The development experience is full of avoidable friction."
            iconBgColor="#FEF3C7"
            iconColor="#F59E0B"
          />
        </FeatureGrid>
      </Section>

      <Section
        title="Meet Codeflow"
        subtitle="The AI-powered coding companion that's changing how we build software"
      >
        <FeatureGrid>
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
        </FeatureGrid>
      </Section>

      <TestimonialSection>
        <Section
          title="What Our Users Say"
          subtitle="Coming soon from our Beta testers!"
        >
          <TestimonialPlaceholder>
            <PlaceholderText>
              We're currently collecting feedback from our early beta testers. Check back soon to hear their success stories!
            </PlaceholderText>
            <TestimonialButtons>
              <Button to="/join-waitlist" variant="primary">Join the waitlist</Button>
              <Button to="#" variant="secondary">Be one of our first testers</Button>
              <Button to="#" variant="secondary">Share your feedback</Button>
            </TestimonialButtons>
          </TestimonialPlaceholder>
        </Section>
      </TestimonialSection>

      <Section
        title="Try Our AI Chat"
        subtitle="Experience the power of Zero Code's AI assistant"
      >
        <div style={{ 
          textAlign: 'center', 
          padding: '3rem 0', 
          background: 'linear-gradient(120deg, #EEF2FF 0%, #E0E7FF 100%)', 
          borderRadius: '8px',
          marginBottom: '2rem' 
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
            Build apps in minutes with our AI assistant
          </h3>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: '#4B5563' }}>
            Our AI chat interface helps you create applications without writing code. Just describe what you want to build, and our AI will help you make it a reality using our MCP servers.
          </p>
          <Button to="/chat" variant="primary" size="large">Try AI Chat Now</Button>
        </div>
      </Section>

      <Section>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1rem' }}>
            Download Zero Code Today
          </h2>
          <p style={{ color: '#6B7280', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Get our powerful desktop application for your platform and start building without code
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              width: '220px'
            }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '12px', 
                backgroundColor: '#0078D7',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.75rem',
                marginBottom: '1rem'
              }}>
                <FaWindows />
              </div>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>Windows</h3>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                For Windows 10/11
              </p>
              <Button to="/download" variant="primary">
                Download
              </Button>
            </div>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              padding: '2rem',
              borderRadius: '12px',
              backgroundColor: 'white',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              width: '220px'
            }}>
              <div style={{ 
                width: '56px', 
                height: '56px', 
                borderRadius: '12px', 
                backgroundColor: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '1.75rem',
                marginBottom: '1rem'
              }}>
                <FaApple />
              </div>
              <h3 style={{ fontWeight: '600', marginBottom: '0.5rem' }}>macOS</h3>
              <p style={{ color: '#6B7280', fontSize: '0.875rem', marginBottom: '1.5rem', textAlign: 'center' }}>
                For macOS 11.0+
              </p>
              <Button to="/download" variant="primary">
                Download
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      <CtaSection>
        <CtaTitle>Ready to transform how you build software?</CtaTitle>
        <CtaSubtitle>Join the beta waitlist and be among the first to experience Zero Code's advanced features.</CtaSubtitle>
        <Button to="/join-waitlist" variant="primary" size="large">Join the Beta →</Button>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#374151' }}>
            <span style={{ color: '#10B981' }}>✓</span> No credit card required
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#374151' }}>
            <span style={{ color: '#10B981' }}>✓</span> Limited beta spots available
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#374151' }}>
            <span style={{ color: '#10B981' }}>✓</span> Cancel anytime
          </span>
        </div>
      </CtaSection>
    </>
  );
};

export default HomePage;
