import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Hero3D from './Components/Hero3D';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import AboutSection from './Components/AboutSection';
import ExperienceSection from './Components/ExperienceSection';
import ProjectsSection from './Components/ProjectsSection';
import ContactSection from './Components/ContactSection';
import usePortfolioStore from './store/usePortfolioStore';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  const AppContainer = styled.div`
    position: relative;
    min-height: 100vh;
  `;

  const EarthBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 0;
    pointer-events: none;
  `;

  const ContentWrapper = styled.div`
    position: relative;
    z-index: 2;
  `;

  const portfolioData = usePortfolioStore();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [earthScale, setEarthScale] = useState(3);
  const [earthPosition, setEarthPosition] = useState({ x: 0, y: 0 });
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);

      // Earth animation based on scroll
      const scale = 1 + progress * 0.5; // Earth grows as you scroll
      const xPos = progress * 100; // Earth moves sideways
      const yPos = -progress * 50; // Earth moves up slightly

      setEarthScale(scale);
      setEarthPosition({ x: xPos, y: yPos });

      // Active section detection
      const sections = ['home', 'about', 'experience', 'projects', 'contact'];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });

      if (current) setActiveSection(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <GlobalStyles />
      <AppContainer>
        {/* Earth Background */}
        <EarthBackground>
          <Hero3D
            scrollProgress={scrollProgress}
            earthScale={earthScale}
            earthPosition={earthPosition}
          />
        </EarthBackground>

        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <ContentWrapper>
          <HeroSection
            id="home"
            scrollToSection={scrollToSection}
            portfolioData={portfolioData}
          />

          <AboutSection
            id="about"
            ref={(el) => (sectionRefs.current[0] = el)}
            portfolioData={portfolioData}
          />

          <ExperienceSection
            id="experience"
            ref={(el) => (sectionRefs.current[1] = el)}
            portfolioData={portfolioData}
          />

          <ProjectsSection
            id="projects"
            ref={(el) => (sectionRefs.current[2] = el)}
            portfolioData={portfolioData}
          />

          <ContactSection
            id="contact"
            ref={(el) => (sectionRefs.current[3] = el)}
            portfolioData={portfolioData}
          />
        </ContentWrapper>
      </AppContainer>
    </>
  );
}

export default App;
