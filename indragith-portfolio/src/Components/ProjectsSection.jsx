import React from 'react';
import styled from 'styled-components';

const ProjectsSection = React.forwardRef(({ id, portfolioData }, ref) => {
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

  const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
    gap: 2rem;
    margin-top: 2rem;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `;

  const ProjectCard = styled.div`
    background: rgba(17, 24, 39, 0.6);
    border: 1px solid rgba(139, 92, 246, 0.1);
    border-radius: 20px;
    padding: 2.5rem;
    transition: all 0.4s ease;
    backdrop-filter: blur(10px);
    position: relative;
    overflow: hidden;

    ${(props) =>
      props.$glow &&
      `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 0.4s ease;
    }
  `}

    &:hover {
      transform: translateY(-8px);
      border-color: rgba(139, 92, 246, 0.4);
      box-shadow: 0 20px 60px rgba(139, 92, 246, 0.2);

      &::after {
        opacity: 1;
      }
    }
  `;

  const ProjectHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1.5rem;
    gap: 1rem;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
    }
  `;

  const ProjectTitle = styled.h3`
    font-size: 1.5rem;
    color: #ffffff;
    margin-bottom: 0;
    font-weight: 700;
    flex: 1;
  `;

  const ProjectStatus = styled.div`
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    background: ${(props) => `${props.$color}20`};
    border: 1px solid ${(props) => `${props.$color}40`};
    color: ${(props) => props.$color};
    white-space: nowrap;
  `;

  const ProjectDescription = styled.p`
    color: #9ca3af;
    line-height: 1.7;
    margin-bottom: 2rem;
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

  const ProjectHoverEffect = styled.div`
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(139, 92, 246, 0.1),
      transparent
    );
    transition: left 0.6s ease;

    ${ProjectCard}:hover & {
      left: 100%;
    }
  `;

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return '#10b981';
      case 'deployed':
        return '#3b82f6';
      case 'in development':
        return '#f59e0b';
      default:
        return '#6b7280';
    }
  };

  return (
    <Section id={id} ref={ref}>
      <SectionTitle>Featured Projects</SectionTitle>
      <SectionSubtitle>Some of my recent work and experiments</SectionSubtitle>
      <ProjectsGrid>
        {portfolioData.projects.map((project) => (
          <ProjectCard key={project.id} $glow={project.glow}>
            <ProjectHeader>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectStatus $color={getStatusColor(project.status)}>
                {project.status}
              </ProjectStatus>
            </ProjectHeader>
            <ProjectDescription>{project.description}</ProjectDescription>
            <TechGrid>
              {project.tags.map((tech, i) => (
                <TechChip key={i}>{tech}</TechChip>
              ))}
            </TechGrid>
            <ProjectHoverEffect />
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </Section>
  );
});

export default ProjectsSection;
