import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import styled from "styled-components";
import "./Slide.css";

const Container = styled.div`
  height: 95vh;
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  align-items: center;
  justify-content: center;

`;

const Wrapper = styled.div`
 height: 100%;
`

const Slide = styled.div`
   display: flex;
  align-items: center;
  height: 100%;
`;

const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Img = styled.img`
  height: 100%;
  border-radius: 15px;
  object-fit: cover;
`;

const Arrow = styled.div`
  color: crimson;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto 0;
  transition: opacity 0.2s linear;
  z-index: 2;
  font-size: 3rem;
  &:hover {
    opacity: 0.5;
  }
`;

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

 
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <Container>
      <Arrow direction="left" onClick={prevSlide}>
        <FaArrowAltCircleLeft />
      </Arrow>
      <Arrow direction="right" onClick={nextSlide}>
        <FaArrowAltCircleRight />
      </Arrow>
      {SliderData.map((slide, index) => {
        return (
          <Wrapper key={index}>
          <Slide
            className={index === current ? "slide active" : "slide"}
            >
            {index === current && (
              <ImgContainer>
                <Img src={slide.image} alt="fit" />
              </ImgContainer>
            )}
          </Slide>
          </Wrapper>
        );
      })}
    </Container>
  );
};

export default ImageSlider;
