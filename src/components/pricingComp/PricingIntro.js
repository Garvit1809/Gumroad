import React from "react";
import styled from "styled-components";
import YourStore from "../featuresComp/YourStore";

const Section = styled.div`
  background-color: #ffc900;;
  border-bottom: 2px solid #000;
  padding: 5rem 0 6.5rem;
  position: relative;

  div.intro {
    &:first-child {
      border-bottom: none;
      padding: 0;

      h1 {
        font-size: 6rem;
        width: 50%;
        line-height: 80%;
        margin: 1rem auto 3rem;
      }

      p {
        width: 55%;
        line-height: 1.1;
        letter-spacing: -0.02em;
        font-weight: 600;
      }
    }
  }
`;

const pricingIntro = {
    heading: 'Pricing',
    title: '10% flat',
    description: 'We want you to live a better life, not focus on fees. That’s why we have no monthly charges and only take a small cut of every sale.'
}

const PricingIntro = () => {
  return ( 
    <Section>
        <YourStore {...pricingIntro}/>
    </Section>
  );
};

export default PricingIntro;
