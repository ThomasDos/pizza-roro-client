import React, { Component } from "react";

import {
  HeaderContainer,
  LeftHeaderContainer,
  RightHeaderContainer,
  LogoWrapperContainer,
  LogoContainer,
} from "./header.styles";

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LeftHeaderContainer>
          <LogoWrapperContainer to="/">
            <LogoContainer classname="logo" />
          </LogoWrapperContainer>
          + TITLE
        </LeftHeaderContainer>

        <RightHeaderContainer>NAV TEST</RightHeaderContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
