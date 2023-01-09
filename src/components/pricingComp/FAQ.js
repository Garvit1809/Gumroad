import React from "react";
import styled from "styled-components";
import Plus from "./Plus.svg";
import {FAQData} from './FAQData'

const Section = styled.div`
  padding: 5rem 0;
  border-bottom: 2px solid #000;
`;

const Header = styled.div`
  h1 {
    /* color: #333; */
    font-size: 5rem;
    font-weight: 500;
    margin-bottom: 1.2rem;
  }

  p {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 5rem;
  }
`;

const QuestionContainer = styled.div`
  border-top: 2px solid #000;
`;

const SVGContainer = styled.div`

`;

const Questions = styled.div`
border: 1px solid red;
width: 92.5%;
margin: 0 auto;
`;

const Question = styled.div`
`;

const Answer = styled.div``;

const FAQ = () => {
  return (
    <Section>
      <Header>
        <h1>Frequently asked questions</h1>
        <p>Don't see your question? Visit our help center.</p>
      </Header>
      <Questions>
        {FAQData.map((faq) => {
          return (
            <QuestionContainer>
              <Question>
                <SVGContainer>
                  <img src={Plus} alt="" />
                  <img src={Plus} alt="" />
                </SVGContainer>
                <h2>{faq.ques}</h2>
              </Question>
              <Answer>
                <p>{faq.boolean ? "Yes!" : null}</p>
                <p>{faq.ans}</p>
                <span>{faq.link}</span>
              </Answer>
            </QuestionContainer>
          );
        })}
      </Questions>
    </Section>
  );
};

export default FAQ;
