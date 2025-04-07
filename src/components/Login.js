import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import styled from "styled-components";
import "./Components.css";
import { auth } from "../firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInFunc = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        navigate("/");
      })
      .catch((error) => alert(error.message));
  };

  const registerFunc = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <Container>
      <Link to="/" className="alllinks">
        <Logo to="/">
          <Logoimg src="/images/Amazon_logo.png" alt="AMAZON_LOGO" />
          <p>Clone</p>
        </Logo>
      </Link>
      <Content>
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <SigninB type="submit" onClick={signInFunc}>
            Sign In
          </SigninB>
        </form>

        <p>
          By signing in, you agree to The Amazon Clone's Conditions of Use &
          Sales. Please see our Privacy Notice, our Cookies Notice and our
          Interest Based Ads Notice.
        </p>
        <SignupB onClick={registerFunc}>Create your account</SignupB>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
`;

const Logo = styled.div`
  display: flex;
  text-decoration: none;

  p {
    margin-top: 32px;
    margin-left: 5px;
    color: #000000;
    font-size: 10px;
    font-weight: 600;
  }
`;

const Logoimg = styled.img`
  margin-top: 20px;
  margin-bottom: 20px;
  object-fit: contain;
  width: 100px;
  margin-right: auto;
  margin-left: auto;
`;

const Content = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 20px;
  background-color: white;

  h1 {
    font-weight: 500;
    margin-bottom: 20px;
  }

  form {
    h5 {
      margin-bottom: 5px;
    }

    input {
      height: 30px;
      margin-bottom: 15px;
      background-color: white;
      width: 98%;
      border-radius: 3px;
    }
  }

  p {
    margin-top: 15px;
    font-size: 12px;
  }
`;

const SigninB = styled.button`
  background-color: #f0c14b;
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #a88734 #9c7e31 #846a29;
  color: #111111;
`;

const SignupB = styled.button`
  border-radius: 2px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
`;

export default Login;
