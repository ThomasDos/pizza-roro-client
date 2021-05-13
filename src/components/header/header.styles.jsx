import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/pizza.svg";
import { ReactComponent as Menu } from "../../assets/menu.svg";
import { ReactComponent as Discount } from "../../assets/price-tag.svg";
import { ReactComponent as Cart } from "../../assets/grocery-cart.svg";
import { ReactComponent as Login } from "../../assets/user.svg";

export const HeaderContainer = styled.header`
  max-width: 100%;
  width: 100%;
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
  width: 3rem;
  height: 3rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  & p:last-child {
    color: brown;
  }
`;

export const NavItemsContainer = styled(Link)`
  svg {
    width: 2rem;
    height: 2rem;
    margin: 0 0.1rem;
  }
`;
export const MenuContainer = styled(Menu)``;
export const DiscountContainer = styled(Discount)``;
export const CartContainer = styled(Cart)``;
export const LoginContainer = styled(Login)``;
