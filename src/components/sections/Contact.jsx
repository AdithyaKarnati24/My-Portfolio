
import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa"; // Import icons

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: ${({ theme }) => theme.text_primary};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; /* Stack icons vertically on smaller screens */
    align-items: center; /* Center align the icons */
  }
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.primary};
  font-size: 24px;
  transition: color 0.3s ease;
  display: flex; /* Center icon and text */
  align-items: center;

  &:hover {
    color: ${({ theme }) => theme.secondary};
  }

  /* Responsive styles for the icon size */
  svg {
    margin-right: 8px; /* Space between icon and text */
    font-size: 1.5rem; /* Adjust icon size */
  }
`;

const Contact = () => {
  return (
    <Container id="Contact">
      <Title>Connect with Me</Title>
      <SocialLinks>
        <SocialLink href="https://www.linkedin.com/in/adithya-karnati-a00974242/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </SocialLink>
        <SocialLink href="https://x.com/AdithyaKarnati7" target="_blank" rel="noopener noreferrer">
          <FaTwitter /> Twitter
        </SocialLink>
        <SocialLink href="https://www.instagram.com/adithyakarnati24/" target="_blank" rel="noopener noreferrer">
          <FaInstagram /> Instagram
        </SocialLink>
        <SocialLink href="https://www.facebook.com/adithya.karnati.9/" target="_blank" rel="noopener noreferrer">
          <FaFacebook /> Facebook
        </SocialLink>
      </SocialLinks>
    </Container>
  );
};

export default Contact;
