import styled, { css } from "styled-components";
import { ReactComponent as LogoDelivering } from "../../assets/delivery-man.svg";
import { ReactComponent as LogoCollect } from "../../assets/collect.svg";

const logoStyles = css`
  width: 60%;
  height: 60%;
  color: white;
`;

export const DeliveryWrapperContainer = styled.div`
  /* background: lightgreen; */
  margin: auto;
  width: 80%;
  color: white;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  & div:last-child {
    margin-right: 0.5rem;
  }
`;

export const LogoDeliveringContainer = styled(LogoDelivering)`
  ${logoStyles}
  margin: 0 0.2rem;
`;
export const LogoCollectContainer = styled(LogoCollect)`
  ${logoStyles}
`;

export const DeliveryTitleContainer = styled.div`
  font-weight: bold;
  font-size: 0.5rem;
`;
