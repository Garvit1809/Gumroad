import React from "react";
import styled from "styled-components";
import logo from "../assets/618ea7afd990103829d614ff_gumroad-logo.svg";
import Explore from "../components/Explore";
import Footer from "../components/Footer";
import Income from "../components/Income";
import Inspiration from "../components/Inspiration";
import Navbar from "../components/Navbar";
import Review1 from "../components/Review1";
import Review2 from "../components/Review2";
import Roadmap from "../components/Roadmap";
import SellAnything from "../components/SellAnything";
import SellAnywhere from "../components/SellAnywhere";
import SellToAnyone from "../components/SellToAnyone";
import ShareWork from "../components/ShareWork";
import StartSelling from "../components/StartSelling";
import Suggestion from "../components/Suggestion";
import { Playground } from "../components/SVG";

const Section = styled.div`
  /* border: 1px solid black; */
  padding: 2rem 2vw;
  border-bottom: 2px solid #000;
  overflow-x: hidden;
  display: block;

  img {
    border: 1px solid #fff;
    display: block;
    width: 100%;
    height: auto;
  }
`;
const PlaygroundImage = styled.div`
border-bottom: 2px solid #000;
  svg {
    display: block;
  }
`;

const Home = () => {
  return (
    <>
      <Section>
        <img src={logo} alt="" />
      </Section>
      <Navbar />
      <StartSelling />
      <Roadmap />
      <Suggestion />
      <Explore />
      <SellAnything />
      <Review1 />
      <SellToAnyone />
      <Review2 />
      <SellAnywhere />
      <Inspiration />
      <Income/>
      <PlaygroundImage>
        <Playground />
      </PlaygroundImage>
      <ShareWork/>
      <Footer/>
    </>
  );
};

export default Home;
