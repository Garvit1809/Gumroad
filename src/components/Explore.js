import React from "react";
import styled from "styled-components";

const Section = styled.div`
  font-family: Darker Grotesque;
  padding-top: 5.5rem;
  padding-bottom: 6rem;
  border-bottom: 2px solid #000;

  h1 {
    font-size: 5.5rem;
    line-height: 1;
    font-weight: 600;
    margin-bottom: 2.5rem;
  }

  p {
    /* border: 1px solid red; */
    width: 55%;
    margin: 0 auto;
    margin-bottom: 2.5rem;
    font-weight: 600;
    /* line-height: 1; */
    font-size: 1.8rem;
    text-align: center;
    line-height: 1.1;
    letter-spacing: -0.01em;
  }

  span {
    font-size: 1.6rem;
    font-weight: 700;
    position: relative;
    cursor: pointer;

    &::after {
      content: "";
      position: absolute;
      left: 0%;
      top: auto;
      right: auto;
      bottom: 0%;
      width: 0%;
      min-height: 2px;
      border-radius: 2px;
      background-color: black;
      height: 1px;
      transition: all 0.15s linear;
    }
    
    &:hover {
        &::after {
            width: 100%;
            height: 2px;
      }
    }
  }
`;

const Explore = () => {
  return (
    <Section>
      <h1>Make your own road</h1>
      <p>
        Whether you need more balance, flexibility, or just a different gig, we
        make it easier to chart a new path. You don't have to be a tech expert
        or even understand how to start a business. You just gotta take what you
        know and sell it.
      </p>
      <span>Explore Features -{">"}</span>
    </Section>
  );
};

export default Explore;
