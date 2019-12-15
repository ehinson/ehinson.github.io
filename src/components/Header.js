import React from "react";
import styled, { css } from "styled-components";

const StyledHeader = styled.header`
  grid-area: header;
  padding: 2rem 3rem 0 2rem;
  display: flex;
  justify-content: space-between;
  color: black;
  font-family: "Playfair Display", serif;
  letter-spacing: 0;
  font-style: italic;
  z-index: 200;
  > div {
    font-weight: 900 !important;

    span {
      font-weight: 400;
    }
  }
`;

const StyledMenu = styled.button`
  width: 40px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  outline: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 200;

  > span {
    height: 1px;
    width: 40px;
    display: block;
    background: black;
    transition: all 0.3s;
    transform: rotate(0deg);
    ${p =>
      p.isOpen &&
      css`
        background: white;
        &:nth-child(1) {
          transform: rotate(45deg) translateY(14px);
        }
        &:nth-child(2) {
          transform: translateX(-100%);
          opacity: 0;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translateY(-14px);
        }
      `}
  }
`;

function Header({ menuIsOpen, setMenuOpen }) {
  return (
    <StyledHeader>
      <div>
        <span>EQ</span>Hinson
      </div>
      <StyledMenu
        type="button"
        aria-label="Menu"
        aria-controls="navigation"
        isOpen={menuIsOpen}
        onClick={() => setMenuOpen(!menuIsOpen)}
      >
        <span />
        <span />
        <span />
      </StyledMenu>
    </StyledHeader>
  );
}

export default Header;
