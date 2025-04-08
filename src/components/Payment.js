import React from "react";
import styled from "styled-components";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { useNavigate } from "react-router";

function Payment() {
  const navigate = useNavigate();
  const [{ basket, user }] = useStateValue();

  return (
    <Container>
      <Content>
        <h1 onClick={(e) => navigate("/checkout")}>
          Checkout ({basket.length} items)
        </h1>
        <Section>
          <Title>
            <h3>Delivery Address</h3>
          </Title>
          <Address>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Web, Nowhere</p>
          </Address>
        </Section>

        <Section>
          <Title>
            <h3>Review Items and Delivery</h3>
          </Title>
          <Items>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </Items>
        </Section>

        <Section>
          <Title>
            <h3>Payment Method</h3>
          </Title>
          <Details></Details>
        </Section>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;

  h1 {
    cursor: pointer;
    text-align: center;
    padding: 10px;
    font-weight: 400;
    background-color: rgb(234, 237, 237);
    border-bottom: 1px solid lightgray;
  }
`;

const Content = styled.div``;

const Section = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgray;
`;

const Title = styled.div`
  max-width: 200px;
  flex: 0.2;
`;

const Address = styled.div`
  flex: 0.8;
`;

const Items = styled.div`
  flex: 0.8;
`;

const Details = styled.div`
  flex: 0.8;
`;

export default Payment;
