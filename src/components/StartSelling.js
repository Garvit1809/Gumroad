import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
/* border: 1px solid red; */
display: flex;
border-bottom: 2px solid #000;
`

const LeftContainer = styled.div`
width: 50%;
background-color: #ff90e8;
padding-top: 4rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
/* border: 1px solid red; */

h1{
    text-align: left;
    margin-top: 0px;
    margin-bottom: 3.5rem;
    font-size: 5.625rem;
    line-height: 0.9;
    font-weight: 400;
    width: 60%;
    letter-spacing: -0.02em;
    font-size: 7rem;
    font-family: Darker Grotesque;
    font-weight: 600;
    /* border: 1px solid red; */
}

span{
    display: block;
    white-space: nowrap;
}

p{
    font-size: 1.5rem;
    line-height: 1.3;
    width: 60%;
    text-align: left;
    margin: 0 auto 4rem;
    letter-spacing: -0.01em;
    font-size: 1.8rem;
    font-family: Darker Grotesque;
    font-weight: 600;
    /* border: 1px solid red; */
}
`

const StartSelling = () => {
  return (
    <Section>
        <LeftContainer>
            <h1>
            Go from
            <span>zero to $1</span>
            </h1>
            <p>
            With Gumroad, anyone can earn their first dollar. Just start with what you know, see what stcks and get paid. Its that easy.
            </p>
        </LeftContainer>
    </Section>
  )
}

export default StartSelling