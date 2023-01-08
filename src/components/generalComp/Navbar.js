import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  /* border: 1px solid red; */
  border-bottom: 2px solid #000;
  padding-left: 2vw;
  position: sticky;
  top: 0;
  background-color: #fff;
  /* border-top: 2px solid #000; */
  z-index: 100;
`;

const Menu = styled.div`
  /* border: 1px solid black; */
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

const MenuItems = styled.span`
  /* border: 1px solid red; */
  margin: 0rem 2rem 0 0;
  font-size: 1.4rem;
  font-family: Darker Grotesque;
  font-weight: 500;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0%;
    top: auto;
    right: auto;
    bottom: 0%;
    width: 0%;
    background-color: black;
    height: 1px;
    transition: all 0.15s linear;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const Options = styled.div``;

const Navbar = () => {
  return (
    <Section>
      <Menu>
        <MenuItems>
          <Link to="/features">Features</Link>
        </MenuItems>
        <MenuItems>Pricing</MenuItems>
        <MenuItems>University</MenuItems>
        <MenuItems>Blog</MenuItems>
        <MenuItems>Discover</MenuItems>
      </Menu>
      <Options></Options>
    </Section>
  );
};

export default Navbar;