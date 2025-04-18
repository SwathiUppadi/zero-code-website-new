import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #F9FAFB;
  padding: 4rem 2rem 2rem;
  font-size: 0.875rem;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const FooterLogo = styled.div`
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoSquare = styled.div`
  width: 24px;
  height: 24px;
  background-color: #6366F1;
  border-radius: 4px;
`;

const LogoText = styled.span`
  font-weight: 600;
  font-size: 1rem;
`;

const CompanyDescription = styled.p`
  color: #6B7280;
  max-width: 300px;
  margin-bottom: 1rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterSectionTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: #111827;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const FooterLink = styled(Link)`
  color: #6B7280;
  transition: color 0.2s;
  
  &:hover {
    color: #111827;
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #E5E7EB;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  color: #9CA3AF;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterTop>
          <div>
            <FooterLogo>
              <LogoSquare />
              <LogoText>Zero Code</LogoText>
            </FooterLogo>
            <CompanyDescription>
              The AI-powered coding companion that's changing how we build software.
            </CompanyDescription>
          </div>
          <FooterSection>
            <FooterSectionTitle>PRODUCT</FooterSectionTitle>
            <FooterLink to="/features">Features</FooterLink>
            <FooterLink to="/download">Download</FooterLink>
            <FooterLink to="/pricing">Pricing</FooterLink>
            <FooterLink to="/use-cases">Use Cases</FooterLink>
            <FooterLink to="/roadmap">Roadmap</FooterLink>
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>COMPANY</FooterSectionTitle>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/careers">Careers</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
            <FooterLink to="/join-waitlist">Join Waitlist</FooterLink>
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>LEGAL</FooterSectionTitle>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
            <FooterLink to="/cookie-policy">Cookie Policy</FooterLink>
          </FooterSection>
        </FooterTop>
        <FooterBottom>
          <div>© {new Date().getFullYear()} Zero Code. All rights reserved.</div>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
