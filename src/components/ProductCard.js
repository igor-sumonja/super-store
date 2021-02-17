import React from 'react';
import {Link} from 'react-router-dom'
import Button from "./Button";
// import css styles from another file
import StyledProductCard from "./ProductCard.styled";
import StarRating from "./StarRating";

const ProductCard = ({product}) => {
  return (
    <StyledProductCard>
      <div className="product-image">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="product-details">
        <Link to={`/item/${product._id}`}>
          <h3>{product.name}</h3>
        </Link>
        <StarRating rating={product.avgRating} />
        <p className="price">${product.price} {product.isOnSale && <span className="sale-label">On Sale</span>}</p>
      </div>
      <Button text='Add to Cart' url={`/item/${product._id}`} />
    </StyledProductCard>
  );
};

export default ProductCard;
