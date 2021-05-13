import React from "react";
import {
  DeliveryWrapperContainer,
  LogoDeliveringContainer,
  LogoCollectContainer,
  DeliveryTitleContainer,
} from "./delivery-container.styles";
import DeliveryButton from "./../delivery-button/delivery-button.component";

const DeliveryContainer = () => {
  return (
    <DeliveryWrapperContainer>
      <DeliveryButton btnType={"delivery"}>
        <LogoDeliveringContainer />
        <DeliveryTitleContainer>DELIVERY </DeliveryTitleContainer>
      </DeliveryButton>
      <DeliveryButton btnType={"clickCollect"}>
        <LogoCollectContainer />
        <DeliveryTitleContainer>Click & Collect</DeliveryTitleContainer>
      </DeliveryButton>
    </DeliveryWrapperContainer>
  );
};

export default DeliveryContainer;
