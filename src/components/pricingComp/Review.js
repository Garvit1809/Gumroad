import React from 'react'
import styled from 'styled-components'
import ed from '../../assets/university/edImg.png'
import scale from '../../assets/university/scale.svg'
import Chip from '../generalComp/Chip'

const Section = styled.div`
background-color: #23a094;
border-bottom: 2px solid #000;
  display: flex;
  /* font-family: Darker Grotesque; */
  box-sizing: border-box;
`

const ReviewContainer = styled.div`
  /* border: 1px solid red; */
  box-sizing: border-box;
  width: 50vw;
  padding-left: 4rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 2.5rem;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: left;
    /* border: 1px solid red; */
    width: 100%;
  }
`;

const LeftContainer = styled.div`
  box-sizing: border-box;
  /* border: 1px solid red; */
  width: 50vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;

  img.max-img {
    display: block;
    height: 80vh;
  }
`;

const ImageContainer = styled.div`
  /* border: 1px solid red; */
  position: relative;
`;

const PenImage = styled.div`
  position: absolute;
  width: 11.5rem;
  height: 12rem;
  top: 48vh;
  left: 1rem;

  img {
    width: 11.5rem;
    height: 12rem;
  }
`;

const Review = () => {
  return (
    <Section>
    <LeftContainer>
    <ImageContainer>
      <img className="max-img" src={ed} alt="" />
      <PenImage>
        <img src={scale} alt="" />
      </PenImage>
      <Chip name="maxulichney" />
    </ImageContainer>
  </LeftContainer>
        <ReviewContainer>
            <h2>
            “Gumroad has been essential to my journey as an entrepreneur. It has streamlined so many of the day-to-day operations, freeing me up to focus on creating content for our wonderful community.”
            </h2>
            <h4>
            Ed Latimore sells Twitter engagement tutorials
            </h4>
        </ReviewContainer>
    </Section>
  )
}

export default Review