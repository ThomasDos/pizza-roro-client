import styled from "styled-components";

const bgColorButton = (props) => {
  switch (props.btnType) {
    case "delivery":
      return "#fb8f2d";
    case "clickCollect":
      return "#f2433b";

    default:
      return "white";
  }
};
export const TitleTestContainer = styled.h2``;

export const DeliveryButtonContainer = styled.div`
  border-radius: 8%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 6rem;
  height: 3rem;
  padding: 0 0.2rem;
  border: none;
  color: white;
  font-weight: bold;
  background: ${bgColorButton};
`;
