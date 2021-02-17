import React from 'react';
import ProductCard from "./ProductCard";
import styled from "styled-components";
import breakpoints from "../common/breakpoints";

const StyledProductGrid = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  
  @media screen and ${breakpoints.device.sm} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }

  @media screen and ${breakpoints.device.lg} {   
    grid-template-columns: 1fr 1fr 1fr;
  }  
  
`

const ProductGrid = ({products}) => {
  return (
    <StyledProductGrid>
      { products.length > 0 && products.map((prod) => <ProductCard key={prod._id} product={prod}/>) }
    </StyledProductGrid>
  );
};

export default ProductGrid;
