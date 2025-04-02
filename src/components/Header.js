import React from "react";
import styled from "styled-components";
import "./Components.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <Nav>
      <Logo href="/">
        <img src="/images/alogo.png" alt="amazonlogo" />
      </Logo>

      <SearchB>
        <SearchI type="text" />
        <SearchIcon className="header_searchIcon" />
      </SearchB>

      <HNav>
        <OpsM>
          <OLine1>Hello Guest</OLine1>
          <OLine2>Sign In</OLine2>
        </OpsM>

        <OpsM>
          <OLine1>Returns</OLine1>
          <OLine2>& Orders</OLine2>
        </OpsM>

        <OpsM>
          <OLine1>Your</OLine1>
          <OLine2>Prime</OLine2>
        </OpsM>

        <Basket href="/checkout">
          <ShoppingCartIcon className="header_cart" />
          <Cartcount>{basket?.length}</Cartcount>
        </Basket>
      </HNav>
    </Nav>
  );
}

const Nav = styled.div`
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #131921;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  padding: 0 10px;
  letter-spacing: 1px;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 12px;
  margin-right: 20px;
  margin-left: 15px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  right: auto;
  left: auto;

  img {
    display: block;
    width: 120%;
  }

  @media only screen and (max-width: 480px) {
    img {
      display: block;
      width: 90%;
    }
  }
`;

const SearchB = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  border-radius: 24px;
  margin-right: 10px;
  margin-left: 24px;
`;

const SearchI = styled.input`
  height: 10px;
  padding: 10px;
  border: none;
  width: 100%;
  min-width: 4%;
  min-height: 8px;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

const HNav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const OpsM = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  margin-right: 10px;
  color: white;
  margin-left: 10px;
  cursor: pointer;
`;

const OLine1 = styled.span`
  font-size: 10px;

  @media only screen and (max-width: 480px) {
    font-size: 8px;
  }
`;

const OLine2 = styled.span`
  font-size: 11px;
  font-weight: 600;

  @media only screen and (max-width: 480px) {
    font-size: 11px;
    font-weight: 500;
  }
`;

const Basket = styled.a`
  display: flex;
  align-items: center;
  color: white;
  margin-left: 10px;
  margin-right: 5px;
  cursor: pointer;
  text-decoration: none;
`;

const Cartcount = styled.span`
  font-size: 13px;
  font-weight: 600;
  margin-left: 6px;
`;

export default Header;
