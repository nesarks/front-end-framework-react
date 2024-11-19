import React from 'react';
import './Product.css';

const ProductDetails = ({ product, onUpdate }) => {
  const handleUpdate = () => {
    const newDetails = {
      name: 'Updated Product',
      price: 39.99,
      description: 'This is an updated product description.',
    };
    onUpdate(newDetails);
  };

  return (
    <div className="product-container">
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">Price: ${product.price}</p>
      <p className="product-description">{product.description}</p>
      <button className="update-button" onClick={handleUpdate}>Update Product</button>
    </div>
  );
};

export default ProductDetails;
