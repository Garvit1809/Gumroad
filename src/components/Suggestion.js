import React from "react";
import styled from "styled-components";

const Section = styled.div``;

const TopSection = styled.div`
  display: flex;
  border-bottom: 2px solid #000;
`;

const LeftContainer = styled.div`
  width: 50vw;
  border-right: 2px solid #000;
  background-color: #b23386;
  `;

const RightContainer = styled.div`
width: 50vw;
  background-color: #ff90e8;
`;

const BottomSection = styled.div`
  display: flex;
  border-bottom: 2px solid #000;
`;

const BottomLeftContainer = styled.div`
  width: 50vw;
  border-right: 2px solid #000;
  background-color: #000;
`;

const BottomRightContainer = styled.div`
  width: 50vw;
  background-color: #ffc900;
  color: #000;
`;

const Suggestion = () => {
  return (
    <div>
      <TopSection>
        <LeftContainer>
          <h1>
            Don't take risks.
            <span>That's scary</span>
          </h1>
        </LeftContainer>
        <RightContainer>
          <h1>
            Place small bets.
            <span>That's exciting!</span>
          </h1>
        </RightContainer>
      </TopSection>
      <BottomSection>
        <BottomLeftContainer>
        
        </BottomLeftContainer>
        <BottomRightContainer>
        
        </BottomRightContainer>
      </BottomSection>
    </div>
  );
};

export default Suggestion;
