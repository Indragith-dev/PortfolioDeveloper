import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1.5rem 8%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.$scrolled ? 'rgba(3, 0, 20, 0.8)' : 'transparent'};
  backdrop-filter: ${(props) => (props.$scrolled ? 'blur(20px)' : 'none')};
  border-bottom: ${(props) =>
    props.$scrolled ? '1px solid rgba(139, 92, 246, 0.1)' : 'none'};
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.2rem 5%;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${(props) => (props.$active ? '#8b5cf6' : '#d1d5db')};
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #8b5cf6;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #3b82f6);
    transform: scaleX(${(props) => (props.$active ? 1 : 0)});
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

function Navbar({ activeSection, scrollToSection }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <Nav $scrolled={scrolled}>
      <Logo onClick={() => scrollToSection('home')}>Indragith</Logo>
      <NavLinks>
        {navItems.map((item) => (
          <li key={item.id}>
            <NavLink
              $active={activeSection === item.id}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
