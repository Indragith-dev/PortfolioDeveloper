import React from 'react';
import styled from 'styled-components';

const ExperienceSection = React.forwardRef(({ id, portfolioData }, ref) => {
  return (
    <Section id={id} ref={ref}>
      <SectionTitle>Experience</SectionTitle>
      <SectionSubtitle>My professional journey in tech</SectionSubtitle>
      <ContentGrid>
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
      </ContentGrid>
    </Section>
  );
});

export default ExperienceSection;

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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ExperienceCard = styled.div`
  background: rgba(17, 24, 39, 0.6);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 20px;
  padding: 2.5rem;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #8b5cf6, #3b82f6);
    transform: scaleX(0);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(139, 92, 246, 0.4);
    box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);

    &::before {
      transform: scaleX(1);
    }
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

const TechGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const TechChip = styled.div`
  padding: 8px 16px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 8px;
  font-size: 0.85rem;
  color: #c4b5fd;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(139, 92, 246, 0.15);
    border-color: rgba(139, 92, 246, 0.4);
    transform: translateY(-2px);
  }
`;
