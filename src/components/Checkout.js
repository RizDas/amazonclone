import React from "react";
import "./Components.css";
import styled from "styled-components";
import SubTotal from "./SubTotal";

function Checkout() {
  return (
    <Container>
      <Left>
        <Ad src="/images/ad.jpg" alt="Checkout_Advertisement" />
        <AdTitle>
          <h2>Your Shopping Cart</h2>
        </AdTitle>
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

const AdTitle = styled.div`
  margin-right: 10px;
  padding: 10px;
  border-bottom: 1px solid lightgray;
`;

const Right = styled.div``;

export default Checkout;
