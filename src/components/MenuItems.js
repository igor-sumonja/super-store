import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const StyledMenuItems = styled.nav`
  .menu-items {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  
  a {
    text-decoration: none;
    color: #fff;
    padding-left: 20px;

    &.is-active {
      text-decoration: underline;
    }
  }
`;

export default function MenuItems() {
  return (
    <StyledMenuItems>
      <ul className="menu-items">
        <li><NavLink exact to="/" activeClassName='is-active'>Home</NavLink ></li>
        <li><NavLink to="/deals" activeClassName='is-active'>Deals</NavLink ></li>
        <li><NavLink to="/cart" activeClassName='is-active'>Cart</NavLink ></li>
      </ul>
    </StyledMenuItems>
  );
}
