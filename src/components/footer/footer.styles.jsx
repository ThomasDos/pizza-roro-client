import styled, { css } from "styled-components";
import { ReactComponent as Twitter } from "../../assets/twitter.svg";
import { ReactComponent as Facebook } from "../../assets/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/instagram.svg";

const socialMediaStyles = css`
  width: 1.4rem;
  height: 1.4rem;
  margin: 0.2rem;
`;

export const FooterContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 6rem;
  padding: 1rem;
  background: lightblue;
  color: white;
  font-size: 0.7rem;
`;

export const SocialMediaContainer = styled.div``;
export const CopyrightContainer = styled.div``;

export const LogoFacebookContainer = styled(Facebook)`
  ${socialMediaStyles}
`;
export const LogoInstagramContainer = styled(Instagram)`
  ${socialMediaStyles}
`;
export const LogoTwitterContainer = styled(Twitter)`
  ${socialMediaStyles}
`;
