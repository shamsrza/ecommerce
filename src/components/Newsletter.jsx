import React from "react";
import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 20vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid ligthgray;
`;
const Input = styled.input`
  border: none;
  flex: 8.5;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 0.5;
  border: none;
  border: none;
  cursor: pointer;
  background-color: red;
  color: white;
  border-radius: 3px;
  transition: all 0.5s ease;
  &: hover {
    transform: scale(1.1);
  }
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get timely updates from your favorite products.</Desc>
      <InputContainer>
        <Input placeholder="Your email..." />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
