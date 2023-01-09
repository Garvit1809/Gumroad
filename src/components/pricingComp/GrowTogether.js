import React from 'react'
import styled from 'styled-components'
import grow from '../../assets/university/grow.svg'

const Section = styled.div`
background-color: #ff90e8;
border-bottom: 2px solid #000;
`

const LeftContainer = styled.div`
`

const ImageContainer = styled.div`
`

const GrowTogether = () => {
  return (
    <Section>
        <LeftContainer>
            <h3>Grow Together</h3>
            <p>
            Sell what you know and ask questions about what you don’t. Start learning in the Community, where thousands of alums are posting advice, tips, and encouragement. Introduce yourself, learn from others, and get inspired.
            </p>
        </LeftContainer>
        <ImageContainer>
            <img src={grow} alt="" />
        </ImageContainer>
    </Section>
  )
}

export default GrowTogether