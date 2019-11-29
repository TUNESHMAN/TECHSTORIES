import React from "react";
import styled from "styled-components";

const NAV = styled.nav`
  height: 70px;
  background-color: green;
  position: fixed;
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  color: white;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top:0;
  left: 0;
`;

function NavBar() {
  return (
    <div>
      <NAV>Tech Stories</NAV>
    </div>
  );
}

export default NavBar;
