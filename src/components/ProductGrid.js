import React from 'react';
import ProductCard from "./ProductCard/ProductCard";
import styled from "styled-components";
import breakpoints from "../common/breakpoints";

const StyledProductGrid = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 15px;
  
  @media screen and ${breakpoints.device.sm} {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and ${breakpoints.device.lg} {   
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
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
