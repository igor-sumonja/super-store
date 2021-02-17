import React, {useState} from 'react';
import MenuItems from "./MenuItems";
import {FaBars, FaRegTimesCircle} from "react-icons/fa";
import styled from "styled-components";
import breakpoints from "../common/breakpoints";

const StyledMobileMenu = styled.div`
  @media screen and ${breakpoints.device.lg} {
    display: none;
  }
  
  .mobile-slide-menu {
    display: none;
    position: absolute;    
    right: 0;
    top: 0;
    background: var(--blue);
    width: 250px;
    height: 100%;
    padding: 10px;
    transform: translateX(100%);
    
    &.menu-active {
      display: block;
      transform: translateX(0);
      text-align: right;
    }

    .menu-items {
      margin-top: 40px;    
      list-style: none;
      display: block; 
      padding: 0;
    }    
  }

  svg:hover {
    cursor: pointer;
  }
`;

export default function MobileMenu() {

  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen(!open)
  }

  return (
    <StyledMobileMenu>
      <FaBars onClick={toggleMobileMenu}/>
      <div className={`mobile-slide-menu ${open ? 'menu-active' : ''}`}>
        <FaRegTimesCircle onClick={toggleMobileMenu}/>
        <MenuItems />
      </div>
    </StyledMobileMenu>
  );
}
