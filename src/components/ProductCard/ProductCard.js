import React from 'react';
import {Link} from 'react-router-dom'
import Button from "../Button";
import StarRating from "../StarRating/StarRating";
import PropTypes from 'prop-types';

// import css styles from another file
import StyledProductCard from "./ProductCard.styled";

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
        <StarRating rating={product.avgRating} uniquekey={product._id}/>
        <p className="price">${product.price} {product.isOnSale && <span className="sale-label">On Sale</span>}</p>
      </div>
      <Button text='Add to Cart' url={`/item/${product._id}`} />
    </StyledProductCard>
  );
};

ProductCard.propTypes= {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    price: PropTypes.number,
    imageUrl: PropTypes.string,
    isOnSale: PropTypes.bool
  }),
}

export default ProductCard;


