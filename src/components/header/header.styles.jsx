import { Link } from "react-router-dom";
import styled from "styled-components";

import { ReactComponent as Logo } from "../../assets/pizza.svg";

export const HeaderContainer = styled.div`
  max-width: 100vw;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

export const LeftHeaderContainer = styled.div``;
export const RightHeaderContainer = styled.div``;

export const LogoWrapperContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

export const LogoContainer = styled(Logo)`
  width: 10rem;
  height: 10rem;
`;
