import React from "react";
import {
  FooterContainer,
  SocialMediaContainer,
  CopyrightContainer,
  LogoFacebookContainer,
  LogoInstagramContainer,
  LogoTwitterContainer,
} from "./footer.styles";

const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <FooterContainer>
      MON FOOTER
      <SocialMediaContainer>
        <LogoFacebookContainer />
        <LogoInstagramContainer />
        <LogoTwitterContainer />
      </SocialMediaContainer>
      <CopyrightContainer>made in {actualYear} by TDA</CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
