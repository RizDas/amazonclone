import React from "react";
import styled from "styled-components";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log(basket);

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <Container>
      <img src={image} alt="Product_Image" />
      <PInfo>
        <Title>{title}</Title>
        <p>
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon className="starrating" alt="⭐" />
            ))}
        </div>
        <button onClick={removeFromCart}>Remove From Cart</button>
      </PInfo>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid lightgray;

  img {
    object-fit: contain;
    width: 180px;
    height: 180px;
  }
`;

const PInfo = styled.div`
  padding-left: 20px;

  button {
    background: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111111;

    &:hover {
      background-color: #f0a14a;
      border: 1px solid white;
      transform: scale(1.02);
      transition: transform 0.2s;
      cursor: pointer;
    }
  }
`;

const Title = styled.p`
  font-size: 17px;
  font-weight: 700;
`;

export default CheckoutProduct;
