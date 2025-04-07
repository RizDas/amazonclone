import React from "react";
import styled from "styled-components";

function Footer() {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container>
      <BTT onClick={toTop}>Back to top</BTT>
      <Content>
        <div>
          <h4>Get to Know Us</h4>
          <p>About Amazon</p>
          <p>Careers</p>
          <p>Press Releases</p>
          <p>Amazon Science</p>
        </div>
        <div>
          <h4>Connect with Us</h4>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </div>
        <div>
          <h4>Make Money with Us</h4>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Protect and Build Your Brand</p>
          <p>Amazon Global Selling</p>
          <p>Supply to Amazon</p>
          <p>Become an Affiliate</p>
          <p>Fulfilment by Amazon</p>
          <p>Advertise Your Products</p>
          <p>Amazon Pay on Merchants</p>
        </div>
        <div>
          <h4>Let Us Help You</h4>
          <p>Your Account</p>
          <p>Returns Centre</p>
          <p>Recalls and Product Safety Alerts</p>
          <p>100% Purchase Protection</p>
          <p>Amazon App Download</p>
          <p>Help</p>
        </div>
      </Content>
      <Foot>
        <div>
          <p>Conditions of Use & Sale Privacy Notice Interest-Based Ads </p>
          <p>© 2025, Amazon clone, Inc. or its affiliates</p>
        </div>
        <Sep></Sep>
        <p>Developed by Rishabh Das</p>
      </Foot>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  bottom: 0;
  background-color: #232f3f;
`;

const BTT = styled.div`
  width: 100%;
  border: none;
  border-radius: 0px;
  background-color: #364759;
  color: #f4fafd;
  font-size: 14px;
  padding: 0;
  margin: 0;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
  cursor: pointer;
  &:hover {
    background-color: #485768;
  }
`;

const Content = styled.div`
  background-color: #232f3f;
  display: flex;
  justify-content: space-around;
  padding-top: 40px;
  padding-left: 70px;
  padding-right: 80px;
  padding-bottom: 40px;

  h4 {
    font-size: 16px;
    color: #f2fffb;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    color: #c7ccde;
    margin-bottom: 10px;
    line-height: 16.8px;
  }
`;

const Foot = styled.div`
  background-color: #131a22;
  color: rgb(221, 221, 221);
  text-align: center;
  font-size: 12px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    margin-top: 12px;
    margin-bottom: 10px;
  }

  p {
    padding-bottom: 5px;
  }
`;

const Sep = styled.div`
  width: 1px;
  height: 40px;
  background-color: rgb(221, 221, 221);
  margin-left: 30px;
  margin-right: 30px;
`;
export default Footer;
