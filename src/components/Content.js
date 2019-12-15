import React from "react";
import styled from "styled-components";

import { slideRightAndFadeIn } from "./animations";

const StyledContent = styled.div`
  grid-area: content;
  text-align: center;
  padding: 2rem 3rem 0 2rem;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.5rem 0 1rem;
  }
`;

const StyledH1 = styled.h1`
  position: relative;
  font-family: "Playfair Display", serif;
  letter-spacing: 0;
  line-height: 1;
  display: inline-block;
  padding: 0.65em 0 0.8em;
  font-size: 8em;
  font-weight: 900;
  font-style: italic;
  animation: ${slideRightAndFadeIn} 0.6s;
  z-index: 19;

  &:before,
  &:after {
    content: "";
    position: absolute;
    transition: transform 0.3s;
    transform: scale3d(0, 1, 1);
    border: 4px solid black;
    border-width: 2px 0;
    box-sizing: border-box;
  }
  &:before {
    width: 50%;
    left: 25%;
    height: 80%;
    top: 10%;
  }

  &:hover {
    font-weight: bold;
    &:before {
      transform: scale3d(1, 1, 1);
    }
  }
`;

function Content({ isResumeOpen }) {
  return (
    <StyledContent>
      <StyledH1 isResumeOpen={isResumeOpen}>Hi.</StyledH1>
    </StyledContent>
  );
}

export default Content;
