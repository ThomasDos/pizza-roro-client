import React, { Component } from "react";
import { HomePageContainer } from "./home.styles";
import DeliveryContainer from "./../../components/delivery-container/delivery-container.component";

export class HomePage extends Component {
  render() {
    return (
      <HomePageContainer>
        <DeliveryContainer />
      </HomePageContainer>
    );
  }
}

export default HomePage;
