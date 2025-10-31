import React from 'react';
import styled from 'styled-components';

const HeroSection = ({ id, scrollToSection, portfolioData }) => {
  return (
    <Section id={id} className="visible">
      <HeroContent>
        <HeroLabel>
          {portfolioData.hero?.label || 'Frontend Developer'}
        </HeroLabel>
        <HeroTitle>
          {portfolioData.hero?.title || 'Building the'}{' '}
          <span>{portfolioData.hero?.highlight || 'Future'}</span>{' '}
          {portfolioData.hero?.subtitle || 'of Web'}
        </HeroTitle>
        <HeroSubtitle>
          {portfolioData.hero?.description ||
            'Crafting exceptional digital experiences with React, TypeScript, and cutting-edge web technologies. Specializing in performance optimization and 3D web applications.'}
        </HeroSubtitle>
        <ButtonGroup>
          <PrimaryButton onClick={() => scrollToSection('projects')}>
            {portfolioData.hero?.primaryButton || 'View Work'}
          </PrimaryButton>
          <SecondaryButton onClick={() => scrollToSection('contact')}>
            {portfolioData.hero?.secondaryButton || 'Get in Touch'}
          </SecondaryButton>
        </ButtonGroup>
      </HeroContent>
      <ScrollIndicator>Scroll to Explore</ScrollIndicator>
    </Section>
  );
};

export default HeroSection;

// ... (keep all the styled components the same)
const Section = styled.section`
  min-height: 100vh;
  padding: 0 8%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 100px 5%;
    text-align: center;
  }
`;

const HeroContent = styled.div`
  z-index: 10;
  position: relative;
  max-width: 650px;
`;

const HeroLabel = styled.div`
  display: inline-block;
  padding: 8px 20px;
  background: rgba(139, 92, 246, 0.15);
  border: 1px solid rgba(139, 92, 246, 0.4);
  border-radius: 30px;
  color: #a78bfa;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
`;

const HeroTitle = styled.h1`
  font-size: 4.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  color: #ffffff;
  line-height: 1.1;
  letter-spacing: -2px;
  text-shadow: 0 0 30px rgba(139, 92, 246, 0.3);

  span {
    background: linear-gradient(135deg, #8b5cf6, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 968px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #d1d5db;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  max-width: 550px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 968px) {
    margin: 0 auto 2.5rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  @media (max-width: 968px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border: none;
  padding: 16px 32px;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 15px 40px rgba(139, 92, 246, 0.6);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  border: 2px solid rgba(139, 92, 246, 0.5);
  padding: 14px 32px;
  border-radius: 12px;
  color: #a78bfa;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #8b5cf6;
    background: rgba(139, 92, 246, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 3rem;
  left: 8%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;

  &::after {
    content: '';
    width: 2px;
    height: 40px;
    background: linear-gradient(180deg, #8b5cf6, transparent);
    animation: scrollBounce 2s infinite;
  }

  @keyframes scrollBounce {
    0%,
    100% {
      transform: translateY(0);
      opacity: 1;
    }
    50% {
      transform: translateY(10px);
      opacity: 0.3;
    }
  }

  @media (max-width: 968px) {
    left: 50%;
    transform: translateX(-50%);
  }
`;
