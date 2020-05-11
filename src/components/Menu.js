import React from "react";
import styled, { css } from "styled-components";
import { PDFDownloadLink, Document, Page } from "@react-pdf/renderer";

import ResumePDF from "./ResumePDF";

import { slideLeftAndFadeIn } from "./animations";

const StyledMenuOverlay = styled.div`
  opacity: 0;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: black;

  ${(p) =>
    p.isOpen &&
    css`
      opacity: 0.7;
      z-index: 199;
    `}
`;

const StyledMenuContent = styled.div`
  width: 45%;
  text-align: right;
  color: white;
  padding-top: 8rem;
  padding-right: 3rem;
  font-size: 2em;
  box-sizing: border-box;

  ${(p) =>
    p.isOpen &&
    css`
      animation: ${slideLeftAndFadeIn} 0.6s;
      z-index: 300;
      margin-top: 2em;
    `}
  > div {
    padding: 0.6rem 0 0 0;
    margin-bottom: 0.6rem;
    a {
      color: white;
      text-decoration: none;
      font-size: 0.8em;
      text-transform: uppercase;

      &:hover {
        border-bottom: 1px solid white;
        font-weight: bold;
      }
    }
  }

  button {
    outline: none;
    background: none;
    border: none;
    padding: 0.6rem 0 0 0;
    margin-bottom: 0.6rem;
    color: white;
    cursor: pointer;
    font-size: 0.8em;
    text-transform: uppercase;

    &:hover {
      border-bottom: 1px solid white;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

function Menu({
  menuIsOpen,
  handleHomeClick,
  handleResumeClick,
  handleExperienceClick,
}) {
  return (
    <StyledMenuOverlay isOpen={menuIsOpen}>
      <StyledMenuContent isOpen={menuIsOpen}>
        <button type="button" onClick={handleHomeClick}>
          Home
        </button>
        <div>
          <a href="mailto:erinqhinson@gmail.com?Subject=Hi!" target="_top">
            Say Hi.
          </a>
        </div>
        <button type="button" onClick={handleResumeClick}>
          Resume
        </button>
        <button type="button" onClick={handleExperienceClick}>
          Resume
        </button>
        {/* <div>
          <PDFDownloadLink document={<ResumePDF />} fileName="erinqhinson.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
          </PDFDownloadLink>
        </div> */}
      </StyledMenuContent>
    </StyledMenuOverlay>
  );
}

export default Menu;
