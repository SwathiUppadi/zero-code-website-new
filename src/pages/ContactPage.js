import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Button from '../components/Button';

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactForm = styled.form`
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #374151;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 0.875rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #D1D5DB;
  border-radius: 4px;
  font-size: 0.875rem;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
  }
`;

const ContactInfo = styled.div`
  background-color: #F3F4F6;
  padding: 2rem;
  border-radius: 8px;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ContactInfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  background-color: #EEF2FF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6366F1;
  flex-shrink: 0;
`;

const ContactInfoContent = styled.div``;

const ContactInfoTitle2 = styled.h4`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ContactInfoText = styled.p`
  color: #6B7280;
  font-size: 0.875rem;
`;

const FAQSection = styled.div`
  margin-top: 4rem;
`;

const FAQTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
`;

const FAQItems = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FAQItem = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`;

const FAQQuestion = styled.h4`
  font-weight: 600;
  margin-bottom: 0.75rem;
`;

const FAQAnswer = styled.p`
  color: #6B7280;
  font-size: 0.875rem;
`;

const SuccessMessage = styled.div`
  background-color: #D1FAE5;
  color: #065F46;
  padding: 1.5rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SuccessIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #059669;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission - would connect to backend in real app
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    }, 5000);
  };
  
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="Have questions or need help? We're here for you."
        gradient={true}
      />
      
      <Section>
        <ContactGrid>
          <div>
            {submitted && (
              <SuccessMessage>
                <SuccessIcon>
                  <FaCheck />
                </SuccessIcon>
                <div>
                  <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Message Sent!</h4>
                  <p style={{ fontSize: '0.875rem' }}>Thank you for contacting us. We'll get back to you shortly.</p>
                </div>
              </SuccessMessage>
            )}
            
            <ContactForm onSubmit={handleSubmit}>
              <FormTitle>Send Us a Message</FormTitle>
              
              <FormGroup>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <FormInput
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Your Email</FormLabel>
                <FormInput
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email address"
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormSelect
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Technical Support">Technical Support</option>
                  <option value="Billing Question">Billing Question</option>
                  <option value="Feature Request">Feature Request</option>
                  <option value="Download Issue">Download Issue</option>
                  <option value="Bug Report">Bug Report</option>
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Your Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your message here..."
                />
              </FormGroup>
              
              <Button type="submit" variant="primary" fullWidth>
                Send Message
              </Button>
            </ContactForm>
          </div>
          
          <ContactInfo>
            <ContactInfoTitle>Get in Touch</ContactInfoTitle>
            
            <ContactInfoItems>
              <ContactInfoItem>
                <IconWrapper>
                  <FaEnvelope />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoTitle2>Email</ContactInfoTitle2>
                  <ContactInfoText>support@zerocode.com</ContactInfoText>
                  <ContactInfoText>info@zerocode.com</ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <IconWrapper>
                  <FaPhone />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoTitle2>Phone</ContactInfoTitle2>
                  <ContactInfoText>+1 (800) 123-4567</ContactInfoText>
                  <ContactInfoText>Monday - Friday, 9AM - 6PM EST</ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <IconWrapper>
                  <FaMapMarkerAlt />
                </IconWrapper>
                <ContactInfoContent>
                  <ContactInfoTitle2>Headquarters</ContactInfoTitle2>
                  <ContactInfoText>123 Innovation Way</ContactInfoText>
                  <ContactInfoText>San Francisco, CA 94103</ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfoItems>
            
            <div style={{ marginTop: '2rem' }}>
              <ContactInfoTitle2>Response Time</ContactInfoTitle2>
              <ContactInfoText style={{ marginBottom: '1rem' }}>
                We aim to respond to all inquiries within 24 hours during business days.
              </ContactInfoText>
              <ContactInfoText>
                For urgent technical issues, please select "Technical Support" in the subject field.
              </ContactInfoText>
            </div>
          </ContactInfo>
        </ContactGrid>
        
        <FAQSection>
          <FAQTitle>Frequently Asked Questions</FAQTitle>
          
          <FAQItems>
            <FAQItem>
              <FAQQuestion>How do I download Zero Code?</FAQQuestion>
              <FAQAnswer>
                You can download Zero Code directly from our download page. We offer versions for both Windows and macOS. Simply select your platform and click the download button.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Is Zero Code free to use?</FAQQuestion>
              <FAQAnswer>
                Zero Code offers a free tier with basic functionality. For advanced features and professional use, we offer premium subscription plans. Check our pricing page for more details.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>I'm having trouble downloading Zero Code</FAQQuestion>
              <FAQAnswer>
                If you're experiencing download issues, please ensure you have a stable internet connection. Try disabling your firewall temporarily or using a different browser. If problems persist, contact our support team.
              </FAQAnswer>
            </FAQItem>
            
            <FAQItem>
              <FAQQuestion>Do you offer educational discounts?</FAQQuestion>
              <FAQAnswer>
                Yes! We offer special discounts for students, educators, and educational institutions. Please contact our sales team with proof of your status to receive your discount code.
              </FAQAnswer>
            </FAQItem>
          </FAQItems>
        </FAQSection>
      </Section>
    </>
  );
};

export default ContactPage;
