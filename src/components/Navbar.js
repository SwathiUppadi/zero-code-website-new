import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Logo = styled.div`
  width: 32px;
  height: 32px;
  background-color: #6366F1;
  border-radius: 6px;
`;

const LogoText = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.active ? '#6366F1' : '#4B5563'};
  padding: 0.5rem 0;
  transition: color 0.2s ease;
  position: relative;

  &:hover {
    color: #6366F1;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-color: #6366F1;
    transform: scaleX(${props => props.active ? '1' : '0'});
    transition: transform 0.2s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  color: #6B7280;
  font-size: 1.25rem;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #6366F1;
  }
`;

const JoinWaitlistButton = styled(Link)`
  background-color: #6366F1;
  color: white;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #4F46E5;
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: #6B7280;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: white;
  z-index: 101;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease;
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileMenuLink = styled(Link)`
  font-size: 1.25rem;
  font-weight: 500;
  color: #111827;
  padding: 0.5rem 0;
`;

const MobileMenuActions = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <LogoContainer to="/">
          <Logo />
          <LogoText>Zero Code</LogoText>
        </LogoContainer>

        <NavLinks>
          <NavLink to="/problem" active={location.pathname === '/problem' ? 1 : 0}>
            Problem
          </NavLink>
          <NavLink to="/solution" active={location.pathname === '/solution' ? 1 : 0}>
            Solution
          </NavLink>
          <NavLink to="/features" active={location.pathname === '/features' ? 1 : 0}>
            Features
          </NavLink>
          <NavLink to="/mcp-tools" active={location.pathname === '/mcp-tools' ? 1 : 0}>
            MCP Tools
          </NavLink>
          <NavLink to="/how-it-works" active={location.pathname === '/how-it-works' ? 1 : 0}>
            How It Works
          </NavLink>
          <NavLink to="/download" active={location.pathname === '/download' ? 1 : 0}>
            Download
          </NavLink>
          <NavLink to="/chat" active={location.pathname === '/chat' ? 1 : 0}>
            AI Chat
          </NavLink>
          <NavLink to="/contact" active={location.pathname === '/contact' ? 1 : 0}>
            Contact
          </NavLink>
        </NavLinks>

        <ActionButtons>
          <SearchButton aria-label="Search">
            <FaSearch />
          </SearchButton>
          <JoinWaitlistButton to="/join-waitlist">Join Waitlist</JoinWaitlistButton>
          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Menu">
            <FaBars />
          </MobileMenuButton>
        </ActionButtons>
      </NavbarContainer>

      <MobileMenu isOpen={mobileMenuOpen}>
        <MobileMenuHeader>
          <LogoContainer to="/" onClick={closeMobileMenu}>
            <Logo />
            <LogoText>Zero Code</LogoText>
          </LogoContainer>
          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Close menu">
            <FaTimes />
          </MobileMenuButton>
        </MobileMenuHeader>

        <MobileMenuLinks>
          <MobileMenuLink to="/problem" onClick={closeMobileMenu}>
            Problem
          </MobileMenuLink>
          <MobileMenuLink to="/solution" onClick={closeMobileMenu}>
            Solution
          </MobileMenuLink>
          <MobileMenuLink to="/features" onClick={closeMobileMenu}>
            Features
          </MobileMenuLink>
          <MobileMenuLink to="/mcp-tools" onClick={closeMobileMenu}>
            MCP Tools
          </MobileMenuLink>
          <MobileMenuLink to="/how-it-works" onClick={closeMobileMenu}>
            How It Works
          </MobileMenuLink>
          <MobileMenuLink to="/download" onClick={closeMobileMenu}>
            Download
          </MobileMenuLink>
          <MobileMenuLink to="/chat" onClick={closeMobileMenu}>
            AI Chat
          </MobileMenuLink>
          <MobileMenuLink to="/contact" onClick={closeMobileMenu}>
            Contact
          </MobileMenuLink>
        </MobileMenuLinks>

        <MobileMenuActions>
          <JoinWaitlistButton to="/join-waitlist" onClick={closeMobileMenu} style={{ width: '100%', textAlign: 'center' }}>
            Join Waitlist
          </JoinWaitlistButton>
        </MobileMenuActions>
      </MobileMenu>
    </>
  );
};

export default Navbar;
