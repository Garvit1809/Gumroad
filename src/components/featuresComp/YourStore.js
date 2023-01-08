import React from "react";
import styled from "styled-components";

const Section = styled.div`
border-bottom: 2px solid #000;
`;

const YourStore = ({heading, title, description}) => {
  return (
    <Section>
      <h4>{heading}</h4>
      <h1>{title}</h1>
      <p>
        {description}
      </p>
    </Section>
  );
};

export default YourStore;
