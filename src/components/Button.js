import React from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";

const StyledButton = styled(Link)`  
  padding: 10px 25px;
  background: #F08700;
  color: #fff;
  text-decoration: none;
  font-size: 16px;  
`

const Button = ({text, url}) => {
  return (
    <StyledButton className="button" to={url}>
      {text}
    </StyledButton>
  );
};

export default Button;
