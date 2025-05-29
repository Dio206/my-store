import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Страница не найдена</h2>
      <button onClick={() => navigate('/products')}>На главную</button>
    </div>
  );
};

export default NotFoundPage;