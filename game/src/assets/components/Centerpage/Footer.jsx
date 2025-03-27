import React from "react";
import { StyledFooter, StyledFooterTex } from "./Footer.Styled";

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterTex>Made with ❤️ By Raman Pandey</StyledFooterTex>
      <StyledFooterTex>
        <a href="https://shorturl.at/jEDGf">See Codebase</a>
      </StyledFooterTex>
    </StyledFooter>
  );
};

export default Footer;
