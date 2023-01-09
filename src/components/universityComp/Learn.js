import React from 'react'
import styled from 'styled-components'
import YourStore from '../featuresComp/YourStore'

const Section = styled.div`
background-color: #23a094;

h1{
    margin-top: 0px;
    margin-bottom: 0px;
    font-size: 5.625rem;
    line-height: 0.9;
    font-weight: 400;
    letter-spacing: -0.02em;
}

`

const Learn = () => {
  return (
    <Section>
        <h4>Gumroad University</h4>
        <h1>Learn while you earn</h1>
        <p>
        Jump into Gumroad University, a free resource to get you through your 1st or 5000th sale. Made by creators, for creators.
        </p>
    </Section>
  )
}

export default Learn