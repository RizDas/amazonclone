import React from "react";
import "./Components.css";
import styled from "styled-components";
import SubTotal from "./SubTotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <Container>
      <Left>
        <Ad src="/images/ad.jpg" alt="Checkout_Advertisement" />
        <COTitle>
          <h2>Your Shopping Cart</h2>
        </COTitle>
        {basket.map((item) => (
          <CheckoutProduct
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            rating={item.rating}
          />
        ))}
      </Left>

      <Right>
        <SubTotal />
      </Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  height: max-content;
`;

const Left = styled.div``;

const Ad = styled.img`
  width: 100%;
  margin-bottom: 10px;
`;

const COTitle = styled.div`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 2px solid lightgray;
`;

const Right = styled.div``;

export default Checkout;
