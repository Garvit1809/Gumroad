import React from "react";
import styled from "styled-components";
import GumroadG from "../assets/GumroadG.svg";

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  width: fit-content;
  /* padding: 1rem; */
  position: absolute;
  bottom: 5rem;
  right: 0;

  border-width: 2px;
  border-style: solid;
  border-color: rgb(0, 0, 0);
  border-image: initial;
  border-radius: 50px;
  background-position: 8px 59%;
  background-repeat: no-repeat;
  transition: box-shadow 200ms ease-in-out 0s, transform 200ms ease-in-out 0s,
    -webkit-transform 200ms ease-in-out 0s;
  padding: 0.5rem 0.7rem 0.5rem 0.5rem;

  img {
    width: 2rem;
    /* border: 1px solid red; */
    height: 2rem;
    margin-right: 0.3rem;
  }

  h4 {
      /* border: 1px solid red; */
    font-family: Darker Grotesque;
    font-size: 1.25rem;
    margin-bottom: 0.25rem;
    font-weight: 700;
    line-height: 100%;
  }
`;

const Chip = ({ name }) => {
  return (
    <Section>
      <img src={GumroadG} alt="" />
      <h4>{name}</h4>
    </Section>
  );
};

export default Chip;
