import styled from 'styled-components'
import {Link, NavLink} from 'react-router-dom'

const HeaderStyles = styled.header`
  background: var(--blue);
  color: #fff;
  font-weight: bold;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    line-height: normal;
    margin: 0;
  }
  
  .header-nav {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;    
  }
  
  a {
    text-decoration: none;
    color: #fff;
    padding-left: 20px;
    
    &.is-active {
      text-decoration: underline;
    }
  }
`;

export default function Header() {
  return (
    <HeaderStyles>
        <Link to="/"><h1>Super store</h1></Link>
        <ul className="header-nav">
          <li><NavLink exact to="/" activeClassName='is-active'>Home</NavLink ></li>
          <li><NavLink to="/deals" activeClassName='is-active'>Deals</NavLink ></li>
          <li><NavLink to="/cart" activeClassName='is-active'>Cart</NavLink ></li>
        </ul>
    </HeaderStyles>
  );
}
