import React, { Component } from "react";
import { HomePageContainer } from "./home.styles";
import DeliveryContainer from "./../../components/delivery-container/delivery-container.component";
import CardBS from "../../components/card-bs/card-bs.component";
import CarouselBS from "../../components/carousel-bs/carousel-bs.component";

export class HomePage extends Component {
  render() {
    return (
      <HomePageContainer>
        <DeliveryContainer />
        <CardBS />
        <CarouselBS />
      </HomePageContainer>
    );
  }
}

export default HomePage;
