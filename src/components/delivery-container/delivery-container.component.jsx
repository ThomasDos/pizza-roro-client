import React from "react";
import {
  DeliveryWrapperContainer,
  LogoDeliveringContainer,
  LogoCollectContainer,
  DeliveryTitleContainer,
} from "./delivery-container.styles";
import DeliveryButton from "./../delivery-button/delivery-button.component";
import { Link } from "react-router-dom";

const DeliveryContainer = () => {
  return (
    <DeliveryWrapperContainer>
      {/* if cart is empty > go to Menu, if something > go to checkout */}
      <Link to="/checkout">
        <DeliveryButton btnType={"delivery"}>
          <LogoDeliveringContainer />
          <DeliveryTitleContainer>DELIVERY </DeliveryTitleContainer>
        </DeliveryButton>
      </Link>
      <Link to="/contact">
        <DeliveryButton btnType={"clickCollect"}>
          <LogoCollectContainer />
          <DeliveryTitleContainer>Click & Collect</DeliveryTitleContainer>
        </DeliveryButton>
      </Link>
    </DeliveryWrapperContainer>
  );
};

export default DeliveryContainer;
