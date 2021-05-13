import React, { Component } from "react";

import {
  HeaderContainer,
  LeftHeaderContainer,
  RightHeaderContainer,
  LogoWrapperContainer,
  LogoContainer,
  NavItemsContainer,
  MenuContainer,
  DiscountContainer,
  CartContainer,
  LoginContainer,
  TitleContainer,
} from "./header.styles";

export class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <LeftHeaderContainer to="/">
          <LogoWrapperContainer>
            <LogoContainer classname="logo" />
          </LogoWrapperContainer>
          <TitleContainer>
            <p>Roro </p>
            <p> Pizza</p>
          </TitleContainer>
        </LeftHeaderContainer>

        <RightHeaderContainer>
          <NavItemsContainer to="/menu">
            <MenuContainer />
          </NavItemsContainer>
          <NavItemsContainer to="/discount">
            <DiscountContainer />
          </NavItemsContainer>
          <NavItemsContainer to="">
            <CartContainer />
          </NavItemsContainer>
          <NavItemsContainer to="/signin">
            <LoginContainer />
          </NavItemsContainer>
        </RightHeaderContainer>
      </HeaderContainer>
    );
  }
}

export default Header;
