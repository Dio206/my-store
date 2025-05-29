import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Rating from '../components/Rating';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Загрузка...</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="200" />
      <p><strong>Цена:</strong> {product.price}</p>
      <p><strong>Описание:</strong> {product.description}</p>
      <Rating value={Math.round(product.rating?.rate || 0)} />
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
    </div>
  );
};

export default ProductDetail;
