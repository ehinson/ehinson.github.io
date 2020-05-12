import React from "react";
import styled, { css } from "styled-components";

import { slideUpAndFadeIn } from "./animations";
import ResumePDF from "./ResumePDF";

const StyledResume = styled.div`
  position: absolute;
  background: antiquewhite;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s;
  transform: translateY(100%);
  opacity: 0;
  display: grid;
  grid-template-columns: 45% 55%;
  grid-template-rows: 100%;
  grid-template-areas: "resumeHeader resumeBody";
  ${(p) =>
    p.isOpen &&
    css`
      transform: translateY(0);
      opacity: 1;
      z-index: 190;
      animation: ${slideUpAndFadeIn} 0.3s;
    `}

  @media screen and (max-width: 1024px) {
    grid-template-columns: 100%;
    grid-template-rows: 10em 1fr;
    grid-template-areas:
      "resumeHeader"
      "resumeBody";
  }
`;

const StyledHinson = styled.div`
  font-size: 20rem;
  color: gray;
  opacity: 0.1;
  font-family: "Playfair Display", serif;
  letter-spacing: 0;
  line-height: 0.5;
  display: inline-block;
  font-weight: 900;
  font-style: italic;
  position: absolute;
  top: -2rem;
`;

const StyledResumeHeader = styled.div`
  grid-area: resumeHeader;
`;

const StyledResumeBody = styled.div`
  background: white;
  grid-area: resumeBody;
  z-index: 201;
  padding: 2rem 3rem 0 2rem;
  overflow: scroll;
  position: "relative";
`;

function Resume({ isExperienceOpen }) {
  return (
    <StyledResume isOpen={isExperienceOpen}>
      <StyledResumeHeader>
        <StyledHinson>Hinson</StyledHinson>
      </StyledResumeHeader>
      <StyledResumeBody>
        <ResumePDF />
      </StyledResumeBody>
    </StyledResume>
  );
}

export default Resume;
