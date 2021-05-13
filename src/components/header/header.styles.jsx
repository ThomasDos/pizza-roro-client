import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

import { ReactComponent as Logo } from "../../assets/pizza.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Discount } from "../../assets/price-tag.svg";
import { ReactComponent as Cart } from "../../assets/grocery-cart.svg";
import { ReactComponent as Login } from "../../assets/user.svg";
import { ReactComponent as Contact } from "../../assets/earth-globe.svg";
import { CartDrowdown } from "./../cart-dropdown/cart-dropdown.component";

const logoNavbarStyles = css`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.1rem;
`;

export const HeaderContainer = styled.header`
  margin: auto;
  max-width: 90%;
  width: 90%;
  height: 12vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LeftHeaderContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20%;
`;
export const RightHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 45%;
`;

export const LogoWrapperContainer = styled.div`
  display: flex;
`;

export const LogoContainer = styled(Logo)`
  width: 2.5rem;
  height: 2.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  font-size: 1.1rem;
  font-weight: bold;
  & p:last-child {
    color: brown;
  }
`;

export const NavItemsContainer = styled(Link)`
  svg {
    ${logoNavbarStyles}
  }
`;

export const CartWrapperContainer = styled.div`
  position: relative;
  svg {
    ${logoNavbarStyles}
  }
`;
export const MenuContainer = styled(Menu)``;
export const DiscountContainer = styled(Discount)``;
export const CartContainer = styled(Cart)``;
export const LoginContainer = styled(Login)``;
export const ContactContainer = styled(Contact)``;
export const CartDropdownContainer = styled(CartDrowdown)``;
