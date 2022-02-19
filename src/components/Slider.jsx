import { useState } from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;
const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  opacity: 0.5;
  z-index: 2;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  // display: flex;
  // align-items: center;
  width: 100vw;
  height: 100vh;
`;
const ImgContainer = styled.div`
  //flex: 1;
  height: 100%;
  position: relative;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
`;

const InfoContainer = styled.div`
  padding: 0 15px;
  background-color: black;
  opacity: 0.6;
  height: 50%;
  margin-top: 0;
  color: white;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 25%;
  right: 10%;
  border-width: 10px;
  border-style: solid;
  border-image: linear-gradient(to bottom, red, rgba(0, 0, 0, 0)) 3 50%;
`;
const Title = styled.h1`
  font-size: 70px;
  font-weight: bold;
  color: #fff;
  z-index: 99;
`;
const Desc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  z-index: 100;
`;
const Button = styled.button`
  padding: 10px 70px;
  font-size: 20px;
  font-weight: bold;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid gray;
  border-radius: 4px;
  color: white;
  &:hover,
  &:focus {
    background-image: linear-gradient(to right, red, #ed6b58);
    border: transparent;
  }
`;

const Info = styled.div`
  border: 3px solid pink;
  border-radius: 50%;
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        <Slide>
          <ImgContainer>
            <Image src="../../img/slider1.jpg" />
            <InfoContainer>
              <Title>UP TO 30% SALE</Title>
              <Desc>A world of inspiration for your home!</Desc>
              <Button>GO SHOPPING</Button>
            </InfoContainer>
          </ImgContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="../../img/slider2.jpg" />
          </ImgContainer>
        </Slide>
        <Slide>
          <ImgContainer>
            <Image src="../../img/slider3.jpg" />
          </ImgContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
