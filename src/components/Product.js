import styled from "styled-components";
import React from "react";
import StarRateIcon from "@mui/icons-material/StarRate";
import "./Components.css";

function Product({ title, priceB, priceS, rating, image }) {
  return (
    <Container>
      <InfoP>
        <p>{title}</p>
        <Price>
          <small>₹ </small>
          <strong>{priceB}</strong>
          <small>.{priceS}</small>
        </Price>
        <Rating>
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarRateIcon className="starrating" alt="⭐" />
            ))}
        </Rating>
      </InfoP>

      <img src={image} alt="ProductImg" />

      <button>Add to Cart</button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin: 10px;
  padding: 20px;
  width: 100%;
  max-height: 400px;
  min-width: 100px;
  background-color: white;
  z-index: 1;

  img {
    max-height: 200px;
    width: 100%;
    object-fit: contain;
    margin-bottom: 15px;
  }

  button {
    background-color: #f0c14b;
    border: 1px solid;
    margin-top: 10px;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111111;
    border-radius: 2px;

    &:hover {
      background-color: #f0a14a;
      border: 1px solid white;
    }
  }
`;
const InfoP = styled.div`
  height: 200px;
  margin-bottom: 15px;
`;
const Price = styled.p`
  margin-top: 5px;
`;
const Rating = styled.div`
  display: flex;
`;

export default Product;
