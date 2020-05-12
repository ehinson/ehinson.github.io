import React from "react";
import styled, { css } from "styled-components";
import background from "../images/background.jpg";
import linkedin from "../svg/linkedin.svg";
import github from "../svg/github.svg";

import { slideUpAndFadeIn } from "./animations";

const StyledStage = styled.div`
  grid-area: stage;
  background: white;
  display: grid;
  grid-template-rows: 78% 22%;
  grid-template-areas:
    "top"
    "bottom";
  position: relative;
`;

const StyledStageBottom = styled.div`
  grid-area: bottom;
  background: white;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;

  @media screen and (max-width: 1024px) {
    padding: 0;
  }
`;

const StyledStageTop = styled.div`
  grid-area: top;
  background: url(${background}) center center;
  background-size: cover;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  @media screen and (max-width: 1024px) {
    justify-content: flex-start;
  }
`;

const StyledStageContent = styled.div`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  bottom: 100px;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  z-index: 4;
  transition-delay: 0.3s;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 100px;

  ${(p) =>
    p.isOpen &&
    css`
      opacity: 1;
      z-index: 15;
    `};

  > div {
    max-width: 65%;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    img {
      padding: 1rem;
    }

    a {
      color: darkgray;
      line-height: 1;
      padding: 0.5rem;
    }
  }

  @media screen and (max-width: 1250px) {
    > div {
      max-width: 85%;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 100%;
    padding-top: 65px;
  }

  @media screen and (max-width: 500px) {
    padding-top: 35px;

    > div {
      max-width: 85%;
    }
  }
`;

const StyledItem = styled.div`
  height: 100%;
  width: 33.33%;
  position: absolute;
  top: 0;
  will-change: transform;
  transition: all 0.3s;
  transform-origin: left;
  transform: translateY(78%);
  z-index: 1;
  background: white;
  opacity: 0.9;
  padding: 2rem 3rem 0 2rem;

  &:nth-child(1) {
    left: 0;
  }
  &:nth-child(3) {
    left: 33.33%;
  }
  &:nth-child(5) {
    left: 66.66%;
  }

  ${(p) =>
    p.isOpen &&
    css`
      transform: translateY(0) scaleX(3);
      z-index: 3;
      &:nth-child(1) {
        left: 0;
      }
      &:nth-child(3) {
        left: 0;
      }
      &:nth-child(5) {
        left: 0;
      }
    `};

  @media screen and (max-width: 1024px) {
    height: 100%;
  }
`;

const StyledItemContent = styled.div`
  position: relative;
  top: 0;
  width: 33.33%;
  left: 0;
  text-align: center;
  box-sizing: border-box;
  transition: all 0.3s;
  z-index: 20;

  &:nth-child(2) {
    padding: 2rem 0 2rem 4rem;
  }
  &:nth-child(4) {
    padding: 2rem 0;
  }
  &:nth-child(6) {
    padding: 2rem 4rem 2rem 0;
  }

  @media screen and (max-width: 1024px) {
    font-size: 0.8rem;
    white-space: nowrap;
  }
`;

const Link = styled.div`
  position: relative;
  line-height: 1;
  display: inline-block;
  padding: 0.8em 0 0.8em;
  cursor: pointer;
  z-index: 200;
  animation: ${slideUpAndFadeIn} 0.3s;

  &:before,
  &:after {
    content: "";
    position: absolute;
    transition: transform 0.3s;
    transform: scale3d(0, 1, 1);
    border: 1px solid black;
    border-width: 1px 0;
    box-sizing: border-box;
  }
  &:before {
    width: 50%;
    left: 25%;
    height: 80%;
    top: 10%;
  }

  &:hover:before {
    transform: scale3d(1, 1, 1);
  }
`;

const StyledH2 = styled.h2`
  font-size: 2rem;
  font-family: "Playfair Display", serif;
  letter-spacing: 0;
  font-style: italic;
  font-weight: 900;
  transition: all 0.3s;

  span {
    border-top: 1px solid black;
    padding: 1rem 0 1rem;
  }
`;

const Work = styled.div`
  padding: 2rem 3rem 0 2rem;
  display: flex;
  flex-direction: column;
`;

function Header({ handleItemClick, isOpen }) {
  return (
    <StyledStage>
      <StyledStageTop />
      <StyledStageBottom>
        <StyledItem isOpen={isOpen === 1} />
        <StyledItemContent onClick={() => handleItemClick(1)}>
          <Link>Credits</Link>
        </StyledItemContent>
        <StyledItem isOpen={isOpen === 2} />
        <StyledItemContent onClick={() => handleItemClick(2)}>
          <Link>About Me</Link>
        </StyledItemContent>
        <StyledItem isOpen={isOpen === 3} />
        <StyledItemContent onClick={() => handleItemClick(3)}>
          <Link>Find Me</Link>
        </StyledItemContent>
        <StyledStageContent isOpen={isOpen === 1}>
          <div>Photo by Craig Garner on Unsplash</div>
          <div>
            Icons by{" "}
            <a href="https://feathericons.com/" rel="noopener noreferrer">
              Feather Icons
            </a>
          </div>
        </StyledStageContent>
        <StyledStageContent isOpen={isOpen === 2}>
          <div>
            <Work>
              <StyledH2>
                <span>About me</span>
              </StyledH2>
              I'm a Full-stack Engineer with a front-end focus, offering
              extensive experience building software in both onsite and remote
              team environments. I have strong SaaS experience with an eye for
              design, and exceptional mindfulness for scalability, code quality
              and user experience.{" "}
              <span>
                Excellent reputation as a team leader, collaborator, and web
                developer, with passion for taking on complex problems and
                helping drive solutions that positively impact both the products
                and people involved.
              </span>
              <br />
              <br />
              Trivia Nerd.
              <br />
              <br />
              Cat person.
            </Work>
          </div>
        </StyledStageContent>
        <StyledStageContent isOpen={isOpen === 3}>
          <div>
            <img src={linkedin} alt="LinkedIn" />
            <a
              href="https://www.linkedin.com/in/eqhinson/"
              rel="noopener noreferrer"
            >
              eqhinson
            </a>
          </div>
          <div>
            <img src={github} alt="Github" />
            <a href="https://github.com/ehinson" rel="noopener noreferrer">
              ehinson
            </a>
          </div>
        </StyledStageContent>
      </StyledStageBottom>
    </StyledStage>
  );
}

export default Header;
