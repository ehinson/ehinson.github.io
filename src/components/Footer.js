import React from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  grid-area: footer;
  text-align: center;
`;

function Content() {
  return (
    <StyledFooter>
      <div>My name is Erin.</div>
    </StyledFooter>
  );
}

export default Content;
