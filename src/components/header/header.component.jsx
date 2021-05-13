import React, { Component } from "react";
import {
  HeaderContainer,
  LeftHeaderContainer,
  RightHeaderContainer,
} from "./header.styles";

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LeftHeaderContainer>LOGO + TITLE</LeftHeaderContainer>

        <RightHeaderContainer>NAV TEST</RightHeaderContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
