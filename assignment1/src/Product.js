import React from 'react';
import ProductDetails from './ProductDetails';

const Product = ({ product, onUpdate }) => {
  return (
    <div>
      {/* Pass product data and update method as props */}
      <ProductDetails product={product} onUpdate={onUpdate} />
    </div>
  );
};

export default Product;
