import styled from "styled-components";

const StyledProductCard = styled.div`
  border: 2px solid #979797;  
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  
  .product-image {
    margin-bottom: auto; 
    padding-bottom: 30px;
  }
  
  img {
    max-width: 100%;
    max-height: 260px;
    height: auto;
    object-fit: cover;
  }
  
  .product-details {    
    text-align: left;
    padding-bottom: 40px;
    
    a {
      text-decoration: none;
    }
    
    h3 {
      color: #000;
      font-size: 21px;
      font-weight: normal;
      line-height: normal;
      margin: 0 0 10px;
    }
    
    
    p {
      margin: 5px 0;
    }
    
    .price {
      font-size: 21px;
      font-weight: bold;
      display: flex;
      align-items: center;      
    }
    
    .sale-label {
      background: #C82121;
      color: #fff;
      font-size: 12px;      
      font-weight: bold;
      padding: 5px 12px;
      margin-left: 10px;
    }
    
  }

  .button {
    margin: 0 auto 20px;    
  }

  .star-rating {
    font-size: 16px;

    svg {
      fill: #F6C415;
      margin-right: 3px;
    }
  }
`

export default StyledProductCard
