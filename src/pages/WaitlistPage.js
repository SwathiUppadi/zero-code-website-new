import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import Button from '../components/Button';

const WaitlistContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 1rem;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #6B7280;
  margin-bottom: 2rem;
  text-align: center;
`;

const WaitlistForm = styled.form`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 2rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: #4B5563;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  font-size: 1rem;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
  
  ${props => props.error && `
    border-color: #EF4444;
    
    &:focus {
      box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
    }
  `}
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  font-size: 1rem;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  transition: border-color 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem;
  border-radius: 6px;
  border: 1px solid #D1D5DB;
  font-size: 1rem;
  background-color: white;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%234B5563'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 0.75rem center;
  background-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #6366F1;
    box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
  }
`;

const ErrorMessage = styled.div`
  color: #EF4444;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SubmitButton = styled(Button)`
  width: 100%;
  margin-top: 1rem;
`;

const SuccessMessage = styled.div`
  background-color: #ECFDF5;
  color: #065F46;
  padding: 1rem;
  border-radius: 6px;
  margin-top: 2rem;
  display: flex;
  align-items: center;
`;

const SuccessIcon = styled.span`
  background-color: #10B981;
  color: white;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  flex-shrink: 0;
`;

const BenefitsList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const BenefitItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const BenefitText = styled.span`
  color: #4B5563;
`;

const WaitlistPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: '',
    interests: '',
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is typed in
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }
    
    if (!formData.role) {
      newErrors.role = 'Please select your role';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setIsSubmitted(true);
      }, 1500);
    }
  };
  
  return (
    <WaitlistContainer>
      <Title>Join the Zero Code Waitlist</Title>
      <Subtitle>Be among the first to experience our AI-powered coding revolution</Subtitle>
      
      {!isSubmitted ? (
        <WaitlistForm onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Your name"
            />
            {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="you@example.com"
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="role">Your Role</Label>
            <Select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              error={errors.role}
            >
              <option value="">Select your role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="product_manager">Product Manager</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="student">Student</option>
              <option value="other">Other</option>
            </Select>
            {errors.role && <ErrorMessage>{errors.role}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="interests">What are you most interested in building with Zero Code?</Label>
            <Textarea
              id="interests"
              name="interests"
              value={formData.interests}
              onChange={handleChange}
              placeholder="Tell us about your use case..."
            />
          </FormGroup>
          
          <SubmitButton 
            type="submit" 
            variant="primary" 
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Join Waitlist'}
          </SubmitButton>
          
          <BenefitsList>
            <BenefitItem>
              <FaCheck style={{ color: '#10B981' }} />
              <BenefitText>No credit card required</BenefitText>
            </BenefitItem>
            <BenefitItem>
              <FaCheck style={{ color: '#10B981' }} />
              <BenefitText>Limited beta spots available</BenefitText>
            </BenefitItem>
            <BenefitItem>
              <FaCheck style={{ color: '#10B981' }} />
              <BenefitText>Cancel anytime</BenefitText>
            </BenefitItem>
          </BenefitsList>
        </WaitlistForm>
      ) : (
        <>
          <SuccessMessage>
            <SuccessIcon>
              <FaCheck size={12} />
            </SuccessIcon>
            <div>
              <p><strong>Thank you for joining our waitlist!</strong></p>
              <p>We'll notify you when we're ready to welcome you to the beta.</p>
            </div>
          </SuccessMessage>
          
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button to="/" variant="secondary">
              Return to Home
            </Button>
          </div>
        </>
      )}
    </WaitlistContainer>
  );
};

export default WaitlistPage;
