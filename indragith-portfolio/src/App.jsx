// src/App.jsx
import { useEffect, useRef } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Hero3D from './Components/Hero3D';
import Navbar from './Components/Navbar';
import MatrixRain from './Components/MatrixRain';
import usePortfolioStore from './store/usePortfolioStore';

// Futuristic Animations
const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px) scale(0.95);
    filter: blur(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
    filter: blur(0);
  }
`;

const glowPulse = keyframes`
  0%, 100% { box-shadow: 0 0 20px rgba(139, 92, 246, 0.3); }
  50% { box-shadow: 0 0 40px rgba(139, 92, 246, 0.6); }
`;

// Styled Components
const AppContainer = styled.div`
  background: radial-gradient(
    ellipse at bottom,
    #1a1a2e 0%,
    #16213e 50%,
    #0a0a0a 100%
  );
  color: white;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

const CosmicBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: radial-gradient(
      circle at 20% 50%,
      rgba(120, 119, 198, 0.15) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 20%,
      rgba(255, 119, 198, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 40% 80%,
      rgba(120, 219, 255, 0.1) 0%,
      transparent 50%
    );
  animation: cosmicShift 20s ease-in-out infinite;

  @keyframes cosmicShift {
    0%,
    100% {
      opacity: 0.5;
    }
    50% {
      opacity: 0.8;
    }
  }
`;

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 10;
  max-width: 600px;
  animation: ${slideUp} 1.5s ease-out;

  @media (max-width: 768px) {
    left: 5%;
    right: 5%;
    text-align: center;
  }
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 6vw, 5rem);
  margin-bottom: 1.5rem;
  font-weight: 900;
  font-family: 'Orbitron', monospace;
  background: linear-gradient(135deg, #ffffff 0%, #8b5cf6 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
  line-height: 1.1;
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.1rem, 2.5vw, 1.8rem);
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 2rem;
  font-weight: 300;
  border-left: 3px solid #8b5cf6;
  padding-left: 1rem;
`;

const CyberButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  color: white;
  font-family: 'Orbitron', monospace;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  animation: ${glowPulse} 2s ease-in-out infinite;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(139, 92, 246, 0.4);
  }
`;

const Section = styled.section`
  padding: 150px 10%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  background: ${(props) => props.background || 'transparent'};
  opacity: 0;
  transform: translateY(50px);
  transition: all 1s ease;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 100px 5%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 4rem;
  font-family: 'Orbitron', monospace;
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #8b5cf6, #6366f1);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CyberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CyberCard = styled.div`
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 16px;
  padding: 2.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, #8b5cf6, transparent);
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    border-color: #8b5cf6;
    box-shadow: 0 20px 40px rgba(139, 92, 246, 0.3);
  }

  ${(props) =>
    props.$glow &&
    css`
      animation: ${glowPulse} 3s ease-in-out infinite;
    `}
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatCard = styled.div`
  text-align: center;
  padding: 2rem;
  background: rgba(139, 92, 246, 0.1);
  border-radius: 12px;
  border: 1px solid rgba(139, 92, 246, 0.3);
`;

const StatValue = styled.div`
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Orbitron', monospace;
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #a0a0a0;
  font-size: 1rem;
  font-weight: 500;
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;

const TechChip = styled.span`
  padding: 10px 20px;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 25px;
  font-size: 0.9rem;
  color: #8b5cf6;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.2);
    transform: translateY(-2px);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #8b5cf6;
  font-family: 'Orbitron', monospace;
  font-size: 0.9rem;
  z-index: 10;

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
    }
    50% {
      transform: translateY(10px);
    }
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: #a0a0a0;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const AboutText = styled.p`
  font-size: 1.2rem;
  color: #e0e0e0;
  line-height: 1.8;
  margin-bottom: 2rem;
  text-align: center;
`;

const SkillsContainer = styled.div`
  margin-top: 3rem;
`;

const ExperienceCard = styled(CyberCard)`
  margin-bottom: 2rem;
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const CompanyName = styled.h3`
  font-size: 1.8rem;
  color: #8b5cf6;
  font-weight: 700;
`;

const Role = styled.h4`
  font-size: 1.2rem;
  color: #fff;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const Period = styled.span`
  color: #6366f1;
  font-size: 1rem;
  font-weight: 500;
`;

const Location = styled.span`
  color: #a0a0a0;
  font-size: 0.9rem;
  display: block;
  margin-top: 0.5rem;
`;

const AchievementsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
`;

const Achievement = styled.li`
  color: #e0e0e0;
  padding-left: 1.5rem;
  margin-bottom: 0.8rem;
  position: relative;

  &::before {
    content: '▹';
    position: absolute;
    left: 0;
    color: #8b5cf6;
    font-size: 1.2rem;
  }
`;

const ContactContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const ContactInfo = styled.div`
  font-size: 1.5rem;
  color: #e0e0e0;
  margin: 2rem 0;
`;

const ContactLink = styled.a`
  color: #8b5cf6;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #6366f1;
    text-shadow: 0 0 10px rgba(139, 92, 246, 0.5);
  }
`;

const SocialsGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
  flex-wrap: wrap;
`;

const SocialCard = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: rgba(139, 92, 246, 0.1);
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 12px;
  text-decoration: none;
  color: #e0e0e0;
  transition: all 0.3s ease;
  min-width: 150px;

  &:hover {
    transform: translateY(-5px);
    background: rgba(139, 92, 246, 0.2);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);
  }
`;

const SocialIcon = styled.span`
  font-size: 2rem;
`;

const SocialName = styled.span`
  font-size: 1rem;
  font-weight: 500;
`;

function App() {
  const portfolioData = usePortfolioStore();
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppContainer>
      <CosmicBackground />
      <Navbar />
      <HeroSection>
        <Hero3D />
        <HeroContent>
          <HeroTitle>Welcome to My Portfolio</HeroTitle>
          <HeroSubtitle>
            I am a passionate developer exploring the universe of code.
          </HeroSubtitle>
          <CyberButton onClick={scrollToContact}>Contact Me</CyberButton>
        </HeroContent>
        <ScrollIndicator>
          <div>Scroll Down</div>
        </ScrollIndicator>
      </HeroSection>
      <MatrixRain />

      <Section id="about" ref={(el) => (sectionRefs.current[0] = el)}>
        <SectionTitle>About Me</SectionTitle>
        <AboutContent>
          <AboutText>{portfolioData.about.intro}</AboutText>
          <AboutText>{portfolioData.about.mission}</AboutText>

          <StatsGrid>
            {portfolioData.about.stats.map((stat, index) => (
              <StatCard key={index}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>

          <SkillsContainer>
            <TechGrid>
              {portfolioData.about.skills.map((skill, index) => (
                <TechChip key={index}>{skill}</TechChip>
              ))}
            </TechGrid>
          </SkillsContainer>
        </AboutContent>
      </Section>

      <Section id="experience" ref={(el) => (sectionRefs.current[1] = el)}>
        <SectionTitle>Experience</SectionTitle>
        {portfolioData.experience.map((exp, index) => (
          <ExperienceCard key={index}>
            <CompanyHeader>
              <div>
                <CompanyName>{exp.company}</CompanyName>
                <Role>{exp.role}</Role>
                <Location>{exp.location}</Location>
              </div>
              <Period>{exp.period}</Period>
            </CompanyHeader>

            <AchievementsList>
              {exp.achievements.map((achievement, i) => (
                <Achievement key={i}>{achievement}</Achievement>
              ))}
            </AchievementsList>

            <TechGrid>
              {exp.tech.map((tech, i) => (
                <TechChip key={i}>{tech}</TechChip>
              ))}
            </TechGrid>
          </ExperienceCard>
        ))}
      </Section>

      <Section id="projects" ref={(el) => (sectionRefs.current[2] = el)}>
        <SectionTitle>Projects</SectionTitle>
        <CyberGrid>
          {portfolioData.projects.map((project) => (
            <CyberCard key={project.id} $glow={project.glow}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechGrid>
                {project.tags.map((tech, i) => (
                  <TechChip key={i}>{tech}</TechChip>
                ))}
              </TechGrid>
            </CyberCard>
          ))}
        </CyberGrid>
      </Section>

      <Section id="contact" ref={(el) => (sectionRefs.current[3] = el)}>
        <SectionTitle>Contact</SectionTitle>
        <ContactContent>
          <ContactInfo>
            <div style={{ marginBottom: '1rem' }}>
              Email:{' '}
              <ContactLink href={`mailto:${portfolioData.contact.email}`}>
                {portfolioData.contact.email}
              </ContactLink>
            </div>
            <div>
              Phone:{' '}
              <ContactLink href={`tel:${portfolioData.contact.phone}`}>
                {portfolioData.contact.phone}
              </ContactLink>
            </div>
          </ContactInfo>

          <SocialsGrid>
            {portfolioData.contact.socials.map((social, index) => (
              <SocialCard
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon>{social.icon}</SocialIcon>
                <SocialName>{social.name}</SocialName>
              </SocialCard>
            ))}
          </SocialsGrid>
        </ContactContent>
      </Section>
    </AppContainer>
  );
}

export default App;
