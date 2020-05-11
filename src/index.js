import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { Normalize } from "styled-normalize";

import Header from "./components/Header";
import Stage from "./components/Stage";
import Resume from "./components/Resume";
import ResumePDF from "./components/ResumePDF";
import Menu from "./components/Menu";
import Content from "./components/Content";
import Footer from "./components/Footer";

const StyledApp = styled.div`
  height: 100vh;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 0.1rem;
  overflow: hidden;
  display: grid;
  position: relative;
  background: antiquewhite;
  grid-template-columns: 45% 55%;
  grid-template-rows: 22% 57% 22%;
  grid-template-areas:
    "header stage"
    "content stage"
    "footer stage";
  @media screen and (max-width: 1024px) {
    height: 100%;
    grid-template-columns: 100%;
    grid-template-rows: 100px 40% 100px 500px;
    grid-template-areas:
      "header"
      "content"
      "footer"
      "stage";
  }
`;

function App() {
  const [isOpen, setIsOpen] = useState(null);
  const [menuIsOpen, setMenuOpen] = useState(false);
  const [isExperienceOpen, setIsExperienceOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const handleItemClick = (item) => {
    if (isOpen === item) {
      setIsOpen(null);
    } else {
      setIsOpen(item);
    }
  };

  const handleResumeClick = () => {
    setMenuOpen(false);
    setIsResumeOpen(true);
    setIsExperienceOpen(false);
  };

  const handleExperienceClick = () => {
    setMenuOpen(false);
    setIsResumeOpen(false);
    setIsExperienceOpen(true);
  };

  const handleHomeClick = () => {
    setMenuOpen(false);
    setIsResumeOpen(false);
    setIsExperienceOpen(false);
  };
  return (
    <StyledApp>
      <Header menuIsOpen={menuIsOpen} setMenuOpen={setMenuOpen} />
      <Content isResumeOpen={isResumeOpen} />
      <Footer />
      <Stage handleItemClick={handleItemClick} isOpen={isOpen} />
      <Menu
        menuIsOpen={menuIsOpen}
        handleHomeClick={handleHomeClick}
        handleResumeClick={handleResumeClick}
        handleExperienceClick={handleExperienceClick}
      />
      <Resume isExperienceOpen={isExperienceOpen} />
      {/* <ResumePDF isResumeOpen={isResumeOpen} /> */}
    </StyledApp>
  );
}

const Root = () => (
  <React.Fragment>
    <Normalize />
    <App />
  </React.Fragment>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<Root />, rootElement);
