import React from 'react'
import styled from 'styled-components'
import sellImg from '../../assets/SellAnything.svg'
import { Arrow } from '../generalComp/SVG'


const Section = styled.div`
display: flex;
border-bottom: 2px solid #000;
font-family: Darker Grotesque;
`

const ImageContainer = styled.div`
/* border: 1px solid red; */
width: 50vw;
background-color: #23a094;
box-sizing: border-box;
/* padding-right: 4rem; */
border-right: 2px solid #000;

img{
    transform: translateX(-5rem);
    display: block;
}
`

const RightContainer = styled.div`
padding: 6.5vw;
text-align: left;
width: 50vw;
box-sizing: border-box;

h3{
    font-size: 3.5rem;
    line-height: 1.1;
    font-weight: 600;
    margin-bottom: 2.5rem;
}

p{
    font-size: 1.8rem;
    line-height: 1.1;
    letter-spacing: -0.01em;
    font-weight: 500;
    margin-bottom: 2.5rem;
}

ul{
    list-style: none;
}
li{
    /* border: 1px solid red; */
    margin-bottom: 0.4rem;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    /* justify-content: center; */

    svg{
        margin-top: 0.1rem;
        width: 1.2rem;
        margin-right: 0.5rem;
    }
}
`

const SellAnything = () => {
  return (
    <Section>
        <ImageContainer>
        <img src={sellImg} alt="" />
        </ImageContainer>
        <RightContainer>
        <h3>Sell Anything</h3>
        <p>
        Video lessons. Monthly subscriptions. Physical products. Whatever! Gumroad was created to help you experiment with all kinds of ideas and formats.
        </p>
        <ul>
        <li><Arrow/>Sell your Top 10 lists</li>
        <li><Arrow/>Sell your crypto tips</li>
        <li><Arrow/>Sell your fractal pack</li>
        <li><Arrow/>Sell your keto cookbook</li>
        <li><Arrow/>Sell your C4D scenes</li>
        <li><Arrow/>Sell your new emojis</li>
        <li><Arrow/>Seriously, sell anything!</li>
        </ul>
        </RightContainer>
    </Section>
  )
}

export default SellAnything