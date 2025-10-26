// src/Components/Navbar.js
import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.5rem 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) =>
    props.scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${(props) => (props.scrolled ? 'blur(10px)' : 'none')};
  transition: all 0.3s ease;
  border-bottom: ${(props) =>
    props.scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'};
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled.a`
  color: white;
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
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: #8b5cf6;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Nav scrolled={scrolled}>
      <Logo>Indragith</Logo>
      <NavLinks>
        <NavLink href="#about" onClick={(e) => handleClick(e, 'about')}>
          About
        </NavLink>
        <NavLink
          href="#experience"
          onClick={(e) => handleClick(e, 'experience')}
        >
          Experience
        </NavLink>
        <NavLink href="#projects" onClick={(e) => handleClick(e, 'projects')}>
          Projects
        </NavLink>
        <NavLink href="#contact" onClick={(e) => handleClick(e, 'contact')}>
          Contact
        </NavLink>
      </NavLinks>
    </Nav>
  );
}

export default Navbar;
