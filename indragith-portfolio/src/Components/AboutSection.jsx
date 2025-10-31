import React from 'react';
import styled from 'styled-components';

const AboutSection = React.forwardRef(({ id, portfolioData }, ref) => {
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

  const SkillsContainer = styled.div`
    margin-top: 4rem;
  `;

  const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 3rem;
    margin-top: 2rem;
  `;

  const SkillCategory = styled.div`
    background: rgba(139, 92, 246, 0.05);
    border: 1px solid rgba(139, 92, 246, 0.1);
    border-radius: 16px;
    padding: 2rem;
    transition: all 0.3s ease;

    &:hover {
      border-color: rgba(139, 92, 246, 0.3);
      transform: translateY(-4px);
    }
  `;

  const SkillCategoryTitle = styled.h4`
    font-size: 1.2rem;
    color: #ffffff;
    margin-bottom: 1.5rem;
    font-weight: 600;
    background: linear-gradient(135deg, #8b5cf6, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  `;

  const SkillList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  `;

  const SkillItem = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    color: #d1d5db;
    font-size: 0.95rem;

    &::before {
      content: '▸';
      color: #8b5cf6;
      font-size: 1.1rem;
    }
  `;

  // Safely access portfolio data with fallbacks
  const aboutData = portfolioData?.about || {};
  const technicalSkills = portfolioData?.technicalSkills || {};
  const softSkills = portfolioData?.softSkills || [];
  const stats = aboutData.stats || [
    { value: '3+', label: 'Years Experience' },
    { value: '20+', label: 'Projects Completed' },
    { value: '40%', label: 'Performance Gain' },
  ];

  return (
    <Section id={id} ref={ref}>
      <TwoColumnLayout>
        <AboutContent>
          <SectionTitle>About Me</SectionTitle>
          <SectionSubtitle>
            {aboutData.mission ||
              'Transforming ideas into pixel-perfect realities'}
          </SectionSubtitle>
          <AboutText>
            {aboutData.intro ||
              'Full Stack Developer with a strong focus on frontend technologies, currently working at MAV-S Innovations LLP. I specialize in creating scalable, performant web applications using modern frameworks and best practices.'}
          </AboutText>
          <AboutText>
            {portfolioData?.summary ||
              "My passion lies in pushing the boundaries of what's possible on the web, from immersive 3D experiences to lightning-fast user interfaces. I believe in writing clean, maintainable code that not only works but delights users."}
          </AboutText>
        </AboutContent>

        <div>
          <StatsGrid>
            {stats.map((stat, index) => (
              <StatCard key={index}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </StatsGrid>
        </div>
      </TwoColumnLayout>

      <SkillsContainer>
        <h3
          style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#ffffff' }}
        >
          Technologies & Skills
        </h3>
        <SkillsGrid>
          {/* Technical Skills */}
          <SkillCategory>
            <SkillCategoryTitle>Technical Skills</SkillCategoryTitle>
            <SkillList>
              {technicalSkills.languages &&
                technicalSkills.languages.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
              {technicalSkills.frameworks &&
                technicalSkills.frameworks.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
              {technicalSkills.technologies &&
                technicalSkills.technologies.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
              {technicalSkills.tools &&
                technicalSkills.tools.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
            </SkillList>
          </SkillCategory>

          {/* Soft Skills */}
          <SkillCategory>
            <SkillCategoryTitle>Soft Skills</SkillCategoryTitle>
            <SkillList>
              {softSkills.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillList>
          </SkillCategory>

          {/* Core Technologies */}
          <SkillCategory>
            <SkillCategoryTitle>Core Technologies</SkillCategoryTitle>
            <SkillList>
              {aboutData.skills &&
                aboutData.skills.map((skill, index) => (
                  <SkillItem key={index}>{skill}</SkillItem>
                ))}
            </SkillList>
          </SkillCategory>
        </SkillsGrid>
      </SkillsContainer>

      {/* Technologies Grid */}
      <div style={{ marginTop: '4rem' }}>
        <h3
          style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#ffffff' }}
        >
          Technologies & Tools
        </h3>
        <TechGrid>
          {aboutData.skills &&
            aboutData.skills.map((skill, index) => (
              <TechChip key={index}>{skill}</TechChip>
            ))}
        </TechGrid>
      </div>
    </Section>
  );
});

export default AboutSection;
