import React, { useState } from "react";
import styled, { css } from "styled-components";
import { workHistory } from "../data/work";

import { slideUpAndFadeIn } from "./animations";

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

  span {
    border-top: 1px solid black;
    padding: 1rem 0 1rem;
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

function Resume({ isResumeOpen }) {
  const [workList, setActiveWorkList] = useState(null);
  const [activeSections, setActiveSection] = useState({
    skills: false,
    work: false,
  });

  const handleOpenSections = (name) => {
    console.log("hi");
    const newState = {
      ...activeSections,
      [name]: !activeSections[name],
    };

    console.log(newState, activeSections[name]);
    setActiveSection(newState);
  };
  return (
    <StyledResume isOpen={isResumeOpen}>
      <StyledResumeHeader>
        <StyledHinson>Hinson</StyledHinson>
      </StyledResumeHeader>
      <StyledResumeBody>
        <p>
          {workList &&
            Object.keys(workList).length > 0 &&
            workList.detail[0].description}
        </p>
        <Work>
          <StyledH2 onClick={() => handleOpenSections("work")}>
            <span>Work</span>
            <br />
            Experience
          </StyledH2>
          {/* <a type="application/pdf" href="../pdf/EHinsonResume2020.pdf">
            Download full resume
          </a> */}
          {activeSections.work && (
            <>
              {workHistory.map((workItem) => (
                <WorkList
                  key={workItem.employer}
                  onClick={() => setActiveWorkList(workItem)}
                >
                  <li>{workItem.years}</li>
                  <li>
                    <b>{workItem.employer}</b>
                  </li>
                  <li>{workItem.title}</li>
                </WorkList>
              ))}
            </>
          )}
        </Work>
        <Work>
          <StyledH2 onClick={() => handleOpenSections("skills")}>
            <span>Skills</span>
          </StyledH2>
          {activeSections.skills && (
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
          )}
        </Work>
      </StyledResumeBody>
    </StyledResume>
  );
}

export default Resume;
