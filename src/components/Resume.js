import React, { useState } from "react";
import styled, { css } from "styled-components";
import { workHistory } from "../data/work";

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

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  letter-spacing: 0;
  font-style: italic;
  font-weight: 900;
  cursor: pointer;
  transition: all 0.3s;

  span {
    border-top: 1px solid black;
    padding: 1rem 0 1rem;
  }

  &:hover {
    color: rgba(0, 0, 0, 0.55);
  }
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

const Work = styled.div`
  padding: 2rem 3rem 0 2rem;
`;

const WorkList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;

  li:nth-child(1) {
    font-size: 0.8rem;
  }

  li:nth-child(2) {
    color: darkgray;
    font-size: 0.8rem;
    padding: 0.2rem 0;
  }

  li:nth-child(3) {
    font-size: 1.2rem;
  }
`;

function Resume({ isExperienceOpen }) {
  return (
    <StyledResume isOpen={isExperienceOpen}>
      <StyledResumeHeader>
        <StyledHinson>Hinson</StyledHinson>
      </StyledResumeHeader>
      <StyledResumeBody>
        <Work>
          <StyledH2>
            <span>Summary</span>
          </StyledH2>
          <p>
            I'm a Full-stack Engineer with a front-end focus, offering extensive
            experience building software in both onsite and remote team
            environments. I have strong SaaS experience with an eye for design,
            and exceptional mindfulness for scalability, code quality and user
            experience. Excellent reputation as a team leader, collaborator, and
            web developer, with passion for taking on complex problems and
            helping drive solutions that positively impact both the products and
            people involved.
          </p>
        </Work>
        <Work>
          <StyledH2>
            <span>Skills</span>
          </StyledH2>
          <>
            <WorkList>
              <li>JavaScript / ES6+ / Webpack / Node / React / Redux</li>
            </WorkList>
            <WorkList>
              <li>CSS-in-JS libraries (Styled Components, Emotion)</li>
            </WorkList>
            <WorkList>
              <li>PostgreSQL / MongoDB</li>
            </WorkList>
            <WorkList>
              <li>Flask / Ruby On Rails</li>
            </WorkList>
          </>
        </Work>
        <ResumePDF />
      </StyledResumeBody>
    </StyledResume>
  );
}

export default Resume;
