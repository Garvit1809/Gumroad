import React from "react";
import styled from "styled-components";
import beginner1 from '../../assets/university/beginner1.svg'
import beginner2 from '../../assets/university/beginner2.png'
import beginner3 from '../../assets/university/beginner3.png'
import beginner4 from '../../assets/university/beginner4.svg'
import Resource from "../pricingComp/Resource";

const Section = styled.div`
  h1 {
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 5.625rem;
    line-height: 0.9;
    font-weight: 400;
    letter-spacing: -0.02em;
  }
`;

const Resources = styled.div`
border: 1px solid red;
padding: 0 4vw;
display: grid;
grid-template-columns: auto auto auto;
`

const starterData = [
    {
        img: `${beginner1}`,
        guide: 'Five ways digital artists make money online',
        desc: 'Making money as a Digital Artist is a dream for many artists. Read this article to learn the 5 actionable ways digital artists can make...'
    },
    {
        img: `${beginner2}`,
        guide: 'From ‘how-to’ articles to $25k in one month',
        desc: 'Six days before graduating from Grinnell College, at 21, Philip Kiely launched his first product on Gumroad. And 24 hours later...'
    },
    {
        img: `${beginner3}`,
        guide: 'Making money online with Jose Rosado, part 1',
        desc: 'Jose and Justin talk about affiliate marketing, personal branding, communicating with your audience, and more. '
    },
    {
        img: `${beginner4}`,
        guide: 'How to earn a side income selling digital products',
        desc: 'A whole new world of potential revenue streams await you and getting started is easier than you think. In fact, your...'
    },
]

const Starter = () => {
  return (
    <Section>
      <h4>Gumroad University</h4>
      <h1>Learn while you earn</h1>
      <p>
        Jump into Gumroad University, a free resource to get you through your
        1st or 5000th sale. Made by creators, for creators.
      </p>
      <Resources>
        {
            starterData.map((resource,index) => {
                return (
                    <Resource {...resource} />
                )
            })
        }
      </Resources>
    </Section>
  );
};

export default Starter;
