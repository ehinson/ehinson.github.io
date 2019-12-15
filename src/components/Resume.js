import React from "react";
import styled, { css } from "styled-components";

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
  ${p =>
    p.isOpen &&
    css`
      transform: translateY(0);
      opacity: 1;
      z-index: 190;
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
  padding: 1rem 0 1rem;

  span {
    border-top: 1px solid black;
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
  }

  li:nth-child(3) {
    font-size: 1.2rem;
  }
`;

function Resume({ isResumeOpen }) {
  return (
    <StyledResume isOpen={isResumeOpen}>
      <StyledResumeHeader>
        <StyledHinson>Hinson</StyledHinson>
      </StyledResumeHeader>
      <StyledResumeBody>
        <Work>
          <div class="container">
            <StyledH2>
              <span>Work</span>
              <br />
              Experience
            </StyledH2>
            <WorkList>
              <li>2017 - PRESENT</li>
              <li>
                <b>TREETOP COMMONS LLC</b>
              </li>
              <li>FRONT END ENGINEER</li>
            </WorkList>
            <WorkList>
              <li>2015 - 2017</li>
              <li>
                <b>XCELERATION INC</b>
              </li>
              <li>FRONT END DEVELOPER</li>
            </WorkList>
            <WorkList>
              <li>2015</li>
              <li>
                <b>TECHNEKES LLC</b>
              </li>
              <li>UX DEVELOPER</li>
            </WorkList>
            <WorkList>
              <li>2015</li>
              <li>
                <b>TECH TALENT SOUTH</b>
              </li>
              <li>INSTRUCTOR</li>
            </WorkList>
          </div>
        </Work>
        <div class="skills section second" id="skills">
          <Work>
            <StyledH2>
              <span>Skills</span>
            </StyledH2>
            <WorkList>
              <li>HTML / CSS / SASS / Styled Components </li>
            </WorkList>
            <WorkList>
              <li>Javascript / ES6+ / Webpack / Node / React / Redux </li>
            </WorkList>
            <WorkList>
              <li>PostgreSQL / MongoDB</li>
            </WorkList>
            <WorkList>
              <li>Flask / Ruby On Rails</li>
            </WorkList>
          </Work>
        </div>
      </StyledResumeBody>
    </StyledResume>
  );
}

export default Resume;
