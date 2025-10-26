import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Hero3D from './Components/Hero3D';
import Navbar from './Components/Navbar';
import usePortfolioStore from './store/usePortfolioStore';
import { GlobalStyles } from './styles/GlobalStyles';

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
`;

const Section = styled.section`
  min-height: 100vh;
  padding: 120px 8%;
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
  }
`;

const HeroSection = styled(Section)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 4rem;
  padding: 0 8%;
  position: relative;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
`;

const HeroContent = styled.div`
  z-index: 10;
  position: relative;
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

const Hero3DContainer = styled.div`
  position: relative;
  width: 100%;
  height: 600px;

  @media (max-width: 968px) {
    height: 400px;
    order: -1;
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

const SectionTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #ffffff;
  font-weight: 700;
  letter-spacing: -1px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  color: #9ca3af;
  margin-bottom: 4rem;
  max-width: 600px;
`;

const TwoColumnLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 4rem;
  align-items: start;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutContent = styled.div`
  max-width: none;
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  color: #d1d5db;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  padding: 2rem;
  background: rgba(139, 92, 246, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(139, 92, 246, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.3);
    transform: translateY(-4px);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #9ca3af;
  font-size: 0.95rem;
  font-weight: 500;
`;

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const TechChip = styled.div`
  padding: 10px 20px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 8px;
  font-size: 0.9rem;
  color: #c4b5fd;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.15);
    border-color: rgba(139, 92, 246, 0.4);
    transform: translateY(-2px);
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);
  }
`;

const CompanyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  margin-bottom: 0.5rem;
`;

const Role = styled.h4`
  font-size: 1.2rem;
  color: #ffffff;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Location = styled.span`
  color: #9ca3af;
  font-size: 0.9rem;
`;

const Period = styled.span`
  color: #60a5fa;
  font-size: 0.95rem;
  font-weight: 600;
  background: rgba(59, 130, 246, 0.1);
  padding: 6px 16px;
  border-radius: 8px;
  border: 1px solid rgba(59, 130, 246, 0.2);
`;

const AchievementsList = styled.ul`
  list-style: none;
  margin: 2rem 0;
`;

const Achievement = styled.li`
  color: #d1d5db;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  position: relative;
  line-height: 1.6;

  &::before {
    content: '▸';
    position: absolute;
    left: 0;
    color: #8b5cf6;
    font-size: 1.2rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const ProjectDescription = styled.p`
  color: #9ca3af;
  line-height: 1.7;
  margin-bottom: 1.5rem;
`;

const ProjectStatus = styled.div`
  display: inline-block;
  padding: 6px 16px;
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid rgba(59, 130, 246, 0.3);
  border-radius: 20px;
  color: #60a5fa;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
`;

const ContactSection = styled(Section)`
  padding: 120px 8%;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div``;

const ContactItem = styled.div`
  margin-bottom: 2rem;
`;

const ContactLabel = styled.div`
  font-size: 0.85rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ContactLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 600;
  transition: color 0.3s ease;
  display: block;

  &:hover {
    color: #8b5cf6;
  }
`;

const SocialsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SocialCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 12px;
  text-decoration: none;
  color: #ffffff;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(139, 92, 246, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
  }
`;

const SocialIcon = styled.span`
  font-size: 1.8rem;
`;

const SocialDetails = styled.div``;

const SocialName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const SocialHandle = styled.div`
  font-size: 0.85rem;
  color: #9ca3af;
`;

function App() {
  const portfolioData = usePortfolioStore();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);

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
        <Navbar
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <ContentWrapper>
          <HeroSection id="home" className="visible">
            <HeroContent>
              <HeroLabel>Frontend Developer</HeroLabel>
              <HeroTitle>
                Building the <span>Future</span> of Web
              </HeroTitle>
              <HeroSubtitle>
                Crafting exceptional digital experiences with React, TypeScript,
                and cutting-edge web technologies. Specializing in performance
                optimization and 3D web applications.
              </HeroSubtitle>
              <ButtonGroup>
                <PrimaryButton onClick={() => scrollToSection('projects')}>
                  View Work
                </PrimaryButton>
                <SecondaryButton onClick={() => scrollToSection('contact')}>
                  Get in Touch
                </SecondaryButton>
              </ButtonGroup>
            </HeroContent>

            <Hero3DContainer>
              <Hero3D scrollProgress={scrollProgress} />
            </Hero3DContainer>

            <ScrollIndicator>Scroll</ScrollIndicator>
          </HeroSection>

          <Section id="about" ref={(el) => (sectionRefs.current[0] = el)}>
            <TwoColumnLayout>
              <AboutContent>
                <SectionTitle>About Me</SectionTitle>
                <SectionSubtitle>
                  Transforming ideas into pixel-perfect realities
                </SectionSubtitle>
                <AboutText>
                  Full Stack Developer with a strong focus on frontend
                  technologies, currently working at MAV-S Innovations LLP. I
                  specialize in creating scalable, performant web applications
                  using modern frameworks and best practices.
                </AboutText>
                <AboutText>
                  My passion lies in pushing the boundaries of what's possible
                  on the web, from immersive 3D experiences to lightning-fast
                  user interfaces. I believe in writing clean, maintainable code
                  that not only works but delights users.
                </AboutText>
              </AboutContent>

              <div>
                <StatsGrid>
                  <StatCard>
                    <StatValue>2+</StatValue>
                    <StatLabel>Years Exp</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>20+</StatValue>
                    <StatLabel>Projects</StatLabel>
                  </StatCard>
                  <StatCard>
                    <StatValue>100%</StatValue>
                    <StatLabel>Quality</StatLabel>
                  </StatCard>
                </StatsGrid>
              </div>
            </TwoColumnLayout>

            <div style={{ marginTop: '4rem' }}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  marginBottom: '2rem',
                  color: '#ffffff',
                }}
              >
                Technologies & Tools
              </h3>
              <TechGrid>
                {portfolioData.about.skills.map((skill, index) => (
                  <TechChip key={index}>{skill}</TechChip>
                ))}
              </TechGrid>
            </div>
          </Section>

          <Section id="experience" ref={(el) => (sectionRefs.current[1] = el)}>
            <SectionTitle>Experience</SectionTitle>
            <SectionSubtitle>My professional journey in tech</SectionSubtitle>
            <ContentGrid>
              {portfolioData.experience.map((exp, index) => (
                <Card key={index}>
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
                </Card>
              ))}
            </ContentGrid>
          </Section>

          <Section id="projects" ref={(el) => (sectionRefs.current[2] = el)}>
            <SectionTitle>Featured Projects</SectionTitle>
            <SectionSubtitle>
              Some of my recent work and experiments
            </SectionSubtitle>
            <ContentGrid>
              {portfolioData.projects.map((project) => (
                <Card key={project.id}>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <ProjectStatus>{project.status}</ProjectStatus>
                  <TechGrid>
                    {project.tags.map((tech, i) => (
                      <TechChip key={i}>{tech}</TechChip>
                    ))}
                  </TechGrid>
                </Card>
              ))}
            </ContentGrid>
          </Section>

          <ContactSection
            id="contact"
            ref={(el) => (sectionRefs.current[3] = el)}
          >
            <SectionTitle>Let's Connect</SectionTitle>
            <SectionSubtitle>
              Have a project in mind? Let's make it happen
            </SectionSubtitle>
            <ContactGrid>
              <ContactInfo>
                <ContactItem>
                  <ContactLabel>Email</ContactLabel>
                  <ContactLink href={`mailto:${portfolioData.contact.email}`}>
                    {portfolioData.contact.email}
                  </ContactLink>
                </ContactItem>
                <ContactItem>
                  <ContactLabel>Phone</ContactLabel>
                  <ContactLink href={`tel:${portfolioData.contact.phone}`}>
                    {portfolioData.contact.phone}
                  </ContactLink>
                </ContactItem>
              </ContactInfo>

              <SocialsGrid>
                <SocialCard
                  href="https://github.com/Indragith-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>⚡</SocialIcon>
                  <SocialDetails>
                    <SocialName>GitHub</SocialName>
                    <SocialHandle>@Indragith-dev</SocialHandle>
                  </SocialDetails>
                </SocialCard>
                <SocialCard
                  href="https://linkedin.com/in/nsindragith"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon>💼</SocialIcon>
                  <SocialDetails>
                    <SocialName>LinkedIn</SocialName>
                    <SocialHandle>/nsindragith</SocialHandle>
                  </SocialDetails>
                </SocialCard>
              </SocialsGrid>
            </ContactGrid>
          </ContactSection>
        </ContentWrapper>
      </AppContainer>
    </>
  );
}

export default App;
