import React from 'react';
import styled from 'styled-components';

// Styled components defined outside the function
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
  margin-bottom: 2.5rem;
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
  transition: all 0.3s ease;
  display: block;

  &:hover {
    color: #8b5cf6;
    transform: translateX(5px);
  }
`;

const ContactForm = styled.div`
  margin-top: 3rem;
  padding: 2rem;
  background: rgba(139, 92, 246, 0.05);
  border: 1px solid rgba(139, 92, 246, 0.1);
  border-radius: 16px;
`;

const FormTitle = styled.h4`
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    background: rgba(139, 92, 246, 0.12);
  }

  &::placeholder {
    color: #6b7280;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px 16px;
  background: rgba(139, 92, 246, 0.08);
  border: 1px solid rgba(139, 92, 246, 0.2);
  border-radius: 8px;
  color: #ffffff;
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #8b5cf6;
    background: rgba(139, 92, 246, 0.12);
  }

  &::placeholder {
    color: #6b7280;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
  }
`;

const SocialsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SocialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
`;

const SocialArrow = styled.span`
  color: #8b5cf6;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
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
  position: relative;

  &:hover {
    border-color: rgba(139, 92, 246, 0.5);
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);

    ${SocialArrow} {
      transform: translateX(5px);
    }
  }
`;

const SocialIcon = styled.span`
  font-size: 1.8rem;
`;

const SocialDetails = styled.div`
  flex: 1;
`;

const SocialName = styled.div`
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.25rem;
`;

const SocialHandle = styled.div`
  font-size: 0.85rem;
  color: #9ca3af;
`;

const CTACard = styled.div`
  padding: 2.5rem;
  background: linear-gradient(
    135deg,
    rgba(139, 92, 246, 0.1),
    rgba(59, 130, 246, 0.1)
  );
  border: 1px solid rgba(139, 92, 246, 0.3);
  border-radius: 20px;
  text-align: center;
  backdrop-filter: blur(10px);
`;

const CTATitle = styled.h3`
  font-size: 1.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const CTAText = styled.p`
  color: #d1d5db;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const CTAButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #8b5cf6, #3b82f6);
  border: none;
  padding: 12px 32px;
  border-radius: 8px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
  }
`;

const ContactSection = React.forwardRef(({ id, portfolioData }, ref) => {
  return (
    <Section id={id} ref={ref}>
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
          <ContactForm>
            <FormTitle>Send me a message</FormTitle>
            <FormGroup>
              <FormInput type="text" placeholder="Your Name" />
            </FormGroup>
            <FormGroup>
              <FormInput type="email" placeholder="Your Email" />
            </FormGroup>
            <FormGroup>
              <FormTextarea placeholder="Your Message" rows="4" />
            </FormGroup>
            <SubmitButton>Send Message</SubmitButton>
          </ContactForm>
        </ContactInfo>

        <SocialsContainer>
          <SocialsGrid>
            <SocialCard
              href="https://github.com/Indragith-dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialIcon>🚀</SocialIcon>
              <SocialDetails>
                <SocialName>GitHub</SocialName>
                <SocialHandle>@Indragith-dev</SocialHandle>
              </SocialDetails>
              <SocialArrow>→</SocialArrow>
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
              <SocialArrow>→</SocialArrow>
            </SocialCard>
            <SocialCard href={`mailto:${portfolioData.contact.email}`}>
              <SocialIcon>📧</SocialIcon>
              <SocialDetails>
                <SocialName>Email</SocialName>
                <SocialHandle>{portfolioData.contact.email}</SocialHandle>
              </SocialDetails>
              <SocialArrow>→</SocialArrow>
            </SocialCard>
          </SocialsGrid>

          <CTACard>
            <CTATitle>Ready to start your project?</CTATitle>
            <CTAText>
              Let's discuss how we can bring your ideas to life with
              cutting-edge technology.
            </CTAText>
            <CTAButton href={`mailto:${portfolioData.contact.email}`}>
              Get Started
            </CTAButton>
          </CTACard>
        </SocialsContainer>
      </ContactGrid>
    </Section>
  );
});

export default ContactSection;
