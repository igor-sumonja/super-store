import React from 'react';

const ProductSingle = (props) => {

  return (
    <div>
      Product id is {props.match.params.id}
    </div>
  );
};

export default ProductSingle;
