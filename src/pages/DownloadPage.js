import React from 'react';
import styled from 'styled-components';
import { FaDownload, FaCheckCircle, FaQuestionCircle, FaTools } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import DownloadSection from '../components/DownloadSection';
import AppScreenshot from '../components/AppScreenshot';
import Button from '../components/Button';

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin: 2rem 0;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  color: #6366F1;
  font-size: 1.25rem;
  padding-top: 0.25rem;
`;

const FeatureContent = styled.div``;

const FeatureTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: #6B7280;
  font-size: 0.875rem;
`;

const FAQSection = styled.div`
  margin-top: 4rem;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid #E5E7EB;
  padding: 1.5rem 0;
`;

const FAQQuestion = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const FAQAnswer = styled.div`
  color: #4B5563;
  padding-left: 2rem;
`;

const CTAContainer = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 3rem;
  background: linear-gradient(120deg, #E0E7FF 0%, #EDE9FE 100%);
  border-radius: 8px;
`;

const CTATitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  color: #4B5563;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const DownloadPage = () => {
  return (
    <>
      <Hero
        title="Download Zero Code"
        subtitle="Get started with our revolutionary AI-powered coding companion for Windows and macOS"
        gradient={true}
      >
        <Button to="#download" variant="primary" size="large">
          <FaDownload style={{ marginRight: '0.5rem' }} /> Download Now
        </Button>
        <Button to="/features" variant="outline" size="large">
          View Features
        </Button>
      </Hero>

      <Section>
        <h2 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '1.5rem', textAlign: 'center' }}>
          Transform How You Build Software
        </h2>
        <p style={{ color: '#6B7280', maxWidth: '800px', margin: '0 auto 3rem', textAlign: 'center' }}>
          Zero Code is a powerful desktop application that enables both technical and non-technical users to build software without writing code. Our AI-powered platform reduces development time and eliminates technical barriers.
        </p>
        
        <AppScreenshot />

        <FeatureList>
          <FeatureItem>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>For Non-Technical Users</FeatureTitle>
              <FeatureDescription>
                Describe what you want, and Zero Code builds it. No coding knowledge required.
              </FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>For Developers</FeatureTitle>
              <FeatureDescription>
                Automate repetitive tasks, generate boilerplate code, and focus on solving unique problems.
              </FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>Intuitive Interface</FeatureTitle>
              <FeatureDescription>
                Clean, modern design that makes complex development tasks simple and straightforward.
              </FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>AI-Powered</FeatureTitle>
              <FeatureDescription>
                Advanced AI that understands your requirements and generates the right code every time.
              </FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>MCP Server Integration</FeatureTitle>
              <FeatureDescription>
                Seamlessly integrates with our MCP servers for powerful backend functionality.
              </FeatureDescription>
            </FeatureContent>
          </FeatureItem>
          <FeatureItem>
            <IconWrapper>
              <FaCheckCircle />
            </IconWrapper>
            <FeatureContent>
              <FeatureTitle>Multi-platform</FeatureTitle>
              <FeatureDescription>
                Available for both Windows and macOS, with the same powerful features across platforms.
              </FeatureDescription>
            </FeatureContent>
          </FeatureItem>
        </FeatureList>
      </Section>
      
      <Section id="download">
        <DownloadSection />
      </Section>

      <Section>
        <FAQSection>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center' }}>
            Frequently Asked Questions
          </h2>

          <FAQItem>
            <FAQQuestion>
              <FaQuestionCircle style={{ color: '#6366F1' }} />
              Is Zero Code really free to download?
            </FAQQuestion>
            <FAQAnswer>
              <p>Yes, Zero Code is free to download. We offer a basic free plan with limited features, and premium subscription plans for advanced features and professional use. You can start with the free plan and upgrade anytime as your needs grow.</p>
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>
              <FaQuestionCircle style={{ color: '#6366F1' }} />
              Do I need any technical knowledge to use Zero Code?
            </FAQQuestion>
            <FAQAnswer>
              <p>Not at all! Zero Code is designed for both technical and non-technical users. Our AI assistant can translate your plain language descriptions into working software. Of course, if you do have technical knowledge, you'll find additional advanced features that can enhance your workflow.</p>
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>
              <FaQuestionCircle style={{ color: '#6366F1' }} />
              What kind of applications can I build with Zero Code?
            </FAQQuestion>
            <FAQAnswer>
              <p>Zero Code supports a wide range of application types, including web applications, desktop tools, data analysis scripts, automation tools, and more. The AI can help build everything from simple CRUD applications to more complex software with custom business logic.</p>
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>
              <FaQuestionCircle style={{ color: '#6366F1' }} />
              How secure is the code generated by Zero Code?
            </FAQQuestion>
            <FAQAnswer>
              <p>Security is our top priority. Zero Code follows industry best practices for code generation and includes built-in security checks. Our AI is trained to avoid common security vulnerabilities, and we regularly update our security patterns based on the latest standards.</p>
            </FAQAnswer>
          </FAQItem>

          <FAQItem>
            <FAQQuestion>
              <FaQuestionCircle style={{ color: '#6366F1' }} />
              How do I get support if I run into issues?
            </FAQQuestion>
            <FAQAnswer>
              <p>We offer multiple support channels:
                <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
                  <li>In-app help documentation and tutorials</li>
                  <li>Community forums where users help each other</li>
                  <li>Email support for all users</li>
                  <li>Priority support with faster response times for premium subscribers</li>
                </ul>
              </p>
            </FAQAnswer>
          </FAQItem>
        </FAQSection>
      </Section>

      <Section>
        <CTAContainer>
          <CTATitle>Ready to transform how you build software?</CTATitle>
          <CTADescription>
            Download Zero Code today and experience the future of software development. No coding required, just your ideas.
          </CTADescription>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Button to="#download" variant="primary" size="large">
              <FaDownload style={{ marginRight: '0.5rem' }} /> Download Now
            </Button>
            <Button to="/how-it-works" variant="secondary" size="large">
              <FaTools style={{ marginRight: '0.5rem' }} /> How It Works
            </Button>
          </div>
        </CTAContainer>
      </Section>
    </>
  );
};

export default DownloadPage;
