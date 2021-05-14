import React from "react";
import { Carousel } from "react-bootstrap";
import { CarouselBSContainer } from "./carousel-bs.styles";

const CarouselBS = () => {
  return (
    <CarouselBSContainer>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-75"
            src="https://cac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcac.2F2018.2F09.2F25.2F05b88720-765f-430e-9a61-82a2cb9dc162.2Ejpeg/850x562/quality/85/crop-from/center/cr/wqkgUnltYW4gQ2FiYW5uZXMvU3VjcsOpIHNhbMOpIC8gQ3Vpc2luZSBBY3R1ZWxsZQ%3D%3D/pizza-regina.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75"
            src="https://fac.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Ffac.2F2018.2F07.2F30.2F509a5313-6545-4cb1-ad93-af5895dd35b6.2Ejpeg/850x478/quality/90/crop-from/center/pizza-royale.jpeg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75"
            src="https://lh3.googleusercontent.com/proxy/2z-dClWE3u96296hvMA6un4-TXTjHQ-XfuAItqCgS9iYVpdI_bfywOslhlX1xOnDy--kYmgpBkcXO5rInQ9XG7cj4Wf8I7tQBc-yZzOdeTP29eEco4Y-7J4Lm1dHcuNUZXXpinVyDZSHvoakRzA4c2TfSmHdz89ciVNXxbW2-A"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </CarouselBSContainer>
  );
};

export default CarouselBS;
