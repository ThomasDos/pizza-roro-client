import styled from "styled-components";

const bgColorButton = (props) => {
  switch (props.btnType) {
    case "delivery":
      return "#B97C00";
    case "clickCollect":
      return "#707070";

    default:
      return "white";
  }
};

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