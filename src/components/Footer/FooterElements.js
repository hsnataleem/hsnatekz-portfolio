import styled from "@emotion/styled";

export const FooterContainer = styled.footer`
  background: var(--container-bg);
  color: var(--text-color);
  padding: 3rem 0 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-top: 4rem;
  text-align: center;

  body.dark-theme & {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;

export const FooterWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

export const FooterLink = styled.a`
  color: var(--text-color);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
  font-weight: 400;

  &:hover {
    color: var(--primary-color);
  }
`;

export const FooterText = styled.p`
  color: var(--text-color);
  margin-bottom: 0.5rem;
  line-height: 1.6;
  opacity: 0.8;
`;

export const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

export const SocialIcon = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: var(--primary-color);
  color: var(--btn-text-color);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    background: var(--primary-color-hover);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(57, 134, 250, 0.3);
  }
`;

export const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  color: var(--text-color);
  opacity: 0.7;
  font-size: 0.9rem;

  body.dark-theme & {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`;
