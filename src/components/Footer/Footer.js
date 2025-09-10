import React from "react";
import {
  FooterContainer,
  FooterWrapper,
  FooterSection,
  FooterTitle,
  FooterLink,
  FooterText,
  SocialLinks,
  SocialIcon,
  Copyright
} from "./FooterElements";

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterSection>
          <FooterTitle>Hasnat Aleem</FooterTitle>
          <FooterText>
            A passionate Front-End Developer creating beautiful and functional web experiences.
            Let's build something amazing together!
          </FooterText>
          <SocialLinks>
            <SocialIcon href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </SocialIcon>
            <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </SocialIcon>
            <SocialIcon href="mailto:contact@example.com">
              <i className="fas fa-envelope"></i>
            </SocialIcon>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
          <FooterLink href="/HasnatAleemResume.pdf" target="_blank">Resume</FooterLink>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterText>
            <i className="fas fa-map-marker-alt" style={{ marginRight: '8px' }}></i>
            National University of Technology, Islamabad
          </FooterText>
          <FooterText>
            <i className="fas fa-phone" style={{ marginRight: '8px' }}></i>
            +92(33) *******
          </FooterText>
          <FooterText>
            <i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>
            softwareangineer@gmail.com
          </FooterText>
        </FooterSection>
      </FooterWrapper>

      <Copyright>
        <p>&copy; {new Date().getFullYear()} Hasnat Aleem. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
