import React from "react";
import styled from "styled-components";
import man from '../assets/619dae6f49d8e947f1fe5e02_gum-head.json'
import manAnimation from '../assets/manAnimation.svg'

const Section = styled.div`
  border: 1px solid red;
`;

const LoopContainer = styled.div`
  width: 100%;
  padding-right: 4vw;
  padding-left: 4vw;
`;

const OuterCircle = styled.div`
  position: relative;
  max-width: 75rem;
  margin-top: 6rem;
  margin-right: auto;
  margin-left: auto;
  padding: 2rem;
  border: 2px solid #000;
  border-radius: 30rem;
  background-color: #ffc900;

  svg{
    width: 30vw;
    height: 50vh;
  }
`;

const Roadmap = () => {
  return (
    <Section>
      <p>
        You know all those great ideas you have? We want you to try them, lots
        of them, and find out what works
      </p>
      <LoopContainer>
        <OuterCircle>
            <img src={manAnimation} alt="" />
        </OuterCircle>
      </LoopContainer>
    </Section>
  );
};

export default Roadmap;
