import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Plus from "./Plus.svg";
import { FAQData } from "./FAQData";

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

const Questions = styled.div`
  border: 1px solid red;
  width: 92.5%;
  margin: 0 auto;
`;

const QuestionContainer = styled.div`
  border-top: 2px solid #000;
`;

const Horizontal = styled.div`
  /* border: 1px solid red; */
  border: 1px solid red;
  position: relative;
  cursor: pointer;
  z-index: 2;
  
  img {
      display: block;
    }
`;
const Vertical = styled.div`
  /* border: 1px solid red; */
  border: 1px solid blue;
  position: absolute;
  z-index: 1;


  img {
    display: block;
    /* transform: rotateZ(90deg); */
    transform: ${props => props.collapse ? 'rotateZ(90deg)' : null};
  }
`;

const Question = styled.div`
  display: flex;
  border: 1px solid blue;
  cursor: pointer;
`;

const Answer = styled.div``;

const FAQ = () => {
    const [showAnswer, setShowAnswer] = useState(100)

    const collapseAnswer = (index) => {
        console.log(index);
        if (index === showAnswer) {
            setShowAnswer(-1)
        } else {
            setShowAnswer(index)
        }
    }
    useEffect(() => {
      console.log(showAnswer);
    }, [showAnswer])
    
  return (
    <Section>
      <Header>
        <h1>Frequently asked questions</h1>
        <p>Don't see your question? Visit our help center.</p>
      </Header>
      <Questions>
        {FAQData.map((faq,index) => {
          return (
            <QuestionContainer >
              <Question onClick={() => collapseAnswer(index)} >
                <Horizontal>
                  <img src={Plus} alt="" />
                </Horizontal>
                <Vertical collapse={index === showAnswer} >
                  <img src={Plus} alt="" />
                </Vertical>
                <h2>{faq.ques}</h2>
              </Question>
              {
                index === showAnswer ?
                <Answer>
                <p>{faq.boolean ? "Yes!" : null}</p>
                <p>{faq.ans}</p>
                <span>{faq.link}</span>
                </Answer> : null
            }
            </QuestionContainer>
          );
        })}
      </Questions>
    </Section>
  );
};

export default FAQ;
