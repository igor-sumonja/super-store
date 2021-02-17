import React from 'react';
import MenuItems from "./MenuItems";
import styled from "styled-components";
import breakpoints from "../common/breakpoints";

const StyledDesktopNav = styled.div`
  display: none;

  @media screen and ${breakpoints.device.lg}{
    display: block;
  }
`;

const DesktopNav = () => {
  return (
    <StyledDesktopNav>
      <MenuItems />
    </StyledDesktopNav>
  );
};

export default DesktopNav;
