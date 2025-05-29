import React from 'react';
import { useNavigate } from 'react-router-dom';
import Rating from './Rating';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.image} alt={product.title} className="card-image" />
      <h3 className="product-title">{product.title}</h3>
      <p className="card-price">${product.price}</p>
      <Rating value={Math.round(product.rating?.rate || 0)} />
    </div>
  );
};


export default ProductCard;
