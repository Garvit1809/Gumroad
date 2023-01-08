import React from "react";
import styled from "styled-components";
import brush from "../../featuresImages/brush.svg";
import cursor from "../../featuresImages/cursor.svg";
import pen from "../../assets/Pen.svg";
import game from "../../featuresImages/game.svg";
import arrow from "../../assets/arrow.svg";

const Section = styled.div`
  background-color: #f1f333;
  border-bottom: 2px solid #000;
  padding: 5rem 0;
`;

const FeatureRoadmap = styled.div`
  width: 100%;
  padding-right: 4vw;
  padding-left: 4vw;
  margin-top: 7rem;
  background-color: #ff90e8;
  position: relative;
  max-width: 75rem;
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  padding: 2rem;
  border: 2px solid #000;
  border-radius: 30rem;
`;

const InnerLoop = styled.div`
  display: flex;
  min-height: 16rem;
  padding: 3rem 2rem;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #000;
  border-radius: 30rem;
  position: relative;

  img {
    display: block;
    /* max-width: 100%; */
    width: 15%;
  }
`;

const TopRow = styled.div`
  position: absolute;
  left: 0%;
  top: -19px;
  right: 0%;
  bottom: auto;
  padding-right: 16%;
  padding-left: 16%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

const LoopText = styled.div`
  position: relative;
  padding-right: 1vw;
  padding-left: 2vw;
  background-position: 0% 7px;
  background-size: 0.75rem;
  background-repeat: no-repeat;
  text-align: center;
  z-index: 1;
  font-size: 1.8rem;
  line-height: 1;
  font-weight: 600;
  background-color: #ff90e8;
  /* border: 1px solid blue; */
`;

const ArrowImg = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 4.5px;
  left: -10px;

  img {
    transform: rotateZ(180deg);
    width: 1rem;
  }
`;

const BottomRow = styled.div`
  position: absolute;
  left: 0%;
  top: auto;
  right: 0%;
  bottom: -0.88rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-right: 8%;
  padding-left: 8%;
  /* border: 1px solid red; */
`;

const BottomArrowImg = styled.div`
  /* border: 1px solid red; */
  position: absolute;
  top: 1.8px;
  right: -10px;

  img {
    /* transform: rotateZ(180deg); */
    width: 1rem;
  }
`;

const ProductFeatures = () => {
  return (
    <Section>
      <p>Product Features</p>
      <h1>Built for new beginnings</h1>
      <p>
        Gumroad is a powerful, but simple, e-commerce platform that puts a wide
        selection of tools at your fingertips. Now you can sell the digital
        services you want—books, memberships, courses, and more—right to your
        audience.
      </p>
      <FeatureRoadmap>
        <InnerLoop>
          <img src={brush} alt="" />
          <img src={cursor} alt="" />
          <img src={pen} alt="" />
          <img src={game} alt="" />
          <TopRow>
            <LoopText>
              Open Account
              <ArrowImg>
                <img src={arrow} alt="" />
              </ArrowImg>
            </LoopText>
            <LoopText>
              Add Product
              <ArrowImg>
                <img src={arrow} alt="" />
              </ArrowImg>
            </LoopText>
            <LoopText>
              Start Selling
              <ArrowImg>
                <img src={arrow} alt="" />
              </ArrowImg>
            </LoopText>
          </TopRow>
          <BottomRow>
            <LoopText>Repeat 
            <BottomArrowImg>
            <img src={arrow} alt="" />
            </BottomArrowImg>
            </LoopText>
            <LoopText>Get Paid
            <BottomArrowImg>
                <img src={arrow} alt="" />
            </BottomArrowImg>
            </LoopText>
          </BottomRow>
        </InnerLoop>
      </FeatureRoadmap>
    </Section>
  );
};

export default ProductFeatures;
