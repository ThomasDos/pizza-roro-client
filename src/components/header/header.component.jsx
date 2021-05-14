import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartHidden } from "./../../app/redux/cart/cart.selectors";
import { toggleCartHidden } from "./../../app/redux/cart/cart.actions";

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
  CartWrapperContainer,
  CartDropdownContainer,
  ContactContainer,
} from "./header.styles";

const Header = ({ hidden, toggleHidden }) => {
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

        <NavItemsContainer to="/contact">
          <ContactContainer />
        </NavItemsContainer>

        <CartWrapperContainer onClick={() => toggleHidden()}>
          {hidden ? null : <CartDropdownContainer />}

          <CartContainer />
        </CartWrapperContainer>
        <NavItemsContainer to="/signin">
          <LoginContainer />
        </NavItemsContainer>
      </RightHeaderContainer>
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

const mapDispatchtoProps = (dispatch) => ({
  toggleHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Header);
