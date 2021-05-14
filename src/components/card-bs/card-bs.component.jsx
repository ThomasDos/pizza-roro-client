import React from "react";
import { Card, Button } from "react-bootstrap";
import { CardBSContainer } from "./card-bs.styles";

const CardBS = () => {
  return (
    <CardBSContainer>
      <Card style={{ width: "12rem" }}>
        <Card.Img
          variant="top"
          src="https://img.welovesolo.com/wp-content/image/vector4/Pizza-discount-poster-vector-material-0147.jpg"
        />
        <Card.Body>
          <Card.Title>Pizza name</Card.Title>
          <Card.Text>Description of the discount.</Card.Text>
          <Button variant="primary">Add to cart</Button>
        </Card.Body>
      </Card>
    </CardBSContainer>
  );
};

export default CardBS;
