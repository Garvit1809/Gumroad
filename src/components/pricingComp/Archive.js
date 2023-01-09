import React from "react";
import styled from "styled-components";
import archive1 from "../../assets/university/archive1.svg";
import archive2 from "../../assets/university/archive2.svg";
import archive3 from "../../assets/university/archive3.svg";

const Section = styled.div`
  border-bottom: 2px solid #000;
  display: flex;
  padding-top: 4.5rem;
  padding-bottom: 5rem;
  background-color: #ffc900;
  color: #000;
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SpotlightImg = styled.div`
  /* border: 1px solid red; */
  z-index: 2;
  position: relative;
  width: fit-content;

  img {
    max-width: 35rem;
  }
`;

const ExcitingImg = styled.div`
  /* border: 1px solid red; */
  z-index: -10;
  position: absolute;
  top: -4rem;
  left: -7rem;
`;

const ClappingImg = styled.div`
  /* border: 1px solid red; */
  z-index: 1;
  position: absolute;
  bottom: -4.5rem;
  right: -7.5rem;
  `;

const RightContainer = styled.div`
  width: 50%;
  margin-right: 2rem;
  /* border: 1px solid red; */
  
  h2 {
    font-size: 3.75rem;
    font-weight: 500;
    text-align: center;
    margin: 0;
    /* font-size: 3rem; */
    line-height: 1;
    letter-spacing: -0.01em;
    margin-bottom: 3rem;
  }
  
  div {
    /* border: 1px solid red; */
    display: flex;
    font-size: 1.6rem;
    font-weight: 700;
    align-items: center;
    justify-content: center;
    line-height: 1;
    /* margin: 0 auto; */

  }
`;

const Archive = () => {
  return (
    <Section>
      <ImageContainer>
        <SpotlightImg>
          <img src={archive2} alt="" />
          <ClappingImg>
            <img src={archive3} alt="" />
          </ClappingImg>
          <ExcitingImg>
            <img src={archive1} alt="" />
          </ExcitingImg>
        </SpotlightImg>
      </ImageContainer>
      <RightContainer>
        <h2>Check out inspiring creator stories in our archive.</h2>
        <div>Download Archive</div>
      </RightContainer>
    </Section>
  );
};

export default Archive;
