import { useState, useEffect } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: '1rem 10%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
    backdropFilter: scrolled ? 'blur(10px)' : 'none',
    transition: 'all 0.3s ease',
    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '2rem',
    fontSize: '0.95rem',
    transition: 'color 0.3s ease',
    cursor: 'pointer',
  };

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav style={navStyle}>
      <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Indragith</div>
      <div>
        <a
          href="#about"
          style={linkStyle}
          onClick={(e) => handleClick(e, 'about')}
          onMouseEnter={(e) => (e.target.style.color = '#8b5cf6')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          About
        </a>
        <a
          href="#projects"
          style={linkStyle}
          onClick={(e) => handleClick(e, 'projects')}
          onMouseEnter={(e) => (e.target.style.color = '#8b5cf6')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Projects
        </a>
        <a
          href="#contact"
          style={linkStyle}
          onClick={(e) => handleClick(e, 'contact')}
          onMouseEnter={(e) => (e.target.style.color = '#8b5cf6')}
          onMouseLeave={(e) => (e.target.style.color = 'white')}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
