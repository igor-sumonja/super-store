import styled from 'styled-components'
import {Link} from 'react-router-dom'
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";

const StyledHeader = styled.header`
  background: var(--blue);
  color: #fff;
  font-weight: bold;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h1 {
    line-height: normal;
    margin: 0;    
  }
  
  a {
    color: #fff;
    text-decoration: none;
  }
  
  
`;

export default function Header() {
  return (
    <StyledHeader>
      <Link to="/"><h1>Super store</h1></Link>
      <DesktopNav />
      <MobileMenu />
    </StyledHeader>
  );
}
