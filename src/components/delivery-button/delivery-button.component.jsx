import React from "react";
import { DeliveryButtonContainer } from "./delivery-button.styles";

const DeliveryButton = ({ ...props }) => {
  return <DeliveryButtonContainer {...props} />;
};

export default DeliveryButton;
