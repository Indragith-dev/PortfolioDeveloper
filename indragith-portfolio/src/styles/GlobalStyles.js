import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    background: #030014;
    overflow-x: hidden;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #030014;
    color: #ffffff;
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
    font-size: 14px;
  }

  #root {
    min-height: 100vh;
    position: relative;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #030014;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #8b5cf6, #3b82f6);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(180deg, #7c3aed, #2563eb);
  }

  /* Selection */
  ::selection {
    background: rgba(139, 92, 246, 0.4);
    color: #ffffff;
  }

  /* Smooth transitions */
  * {
    transition-property: color, background-color, border-color, opacity, transform, box-shadow;
    transition-duration: 0.2s;
    transition-timing-function: ease;
  }

  /* Input placeholder styling */
  ::placeholder {
    color: #6b7280;
    opacity: 1;
  }

  /* Focus outline */
  *:focus {
    outline: none;
  }

  /* Smooth scrolling for older browsers */
  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }
`;

export const theme = {
  colors: {
    primary: '#8b5cf6',
    secondary: '#3b82f6',
    background: '#030014',
    backgroundCard: 'rgba(139, 92, 246, 0.05)',
    text: '#ffffff',
    textSecondary: '#c4b5fd',
    textMuted: '#a78bfa',
    border: 'rgba(139, 92, 246, 0.2)',
    borderHover: 'rgba(139, 92, 246, 0.5)',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #8b5cf6, #3b82f6)',
    text: 'linear-gradient(135deg, #ffffff, #a78bfa)',
    glow: 'linear-gradient(180deg, #8b5cf6, transparent)',
  },
  spacing: {
    container: '5%',
    sectionPadding: '120px 5%',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1440px',
  },
  shadows: {
    card: '0 20px 60px rgba(139, 92, 246, 0.3)',
    button: '0 10px 40px rgba(139, 92, 246, 0.3)',
    buttonHover: '0 15px 50px rgba(139, 92, 246, 0.5)',
  },
};
