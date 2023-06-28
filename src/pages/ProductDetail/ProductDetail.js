import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './ProductDetail.scss';

const ProductDetail = () => {
  const navigate = useNavigate();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch('./data/product.json')
      .then(res => res.json())
      .then(data => setProduct(data.product));
  }, []);
  return (
    <div className="productDetail">
      <div className="productBox">
        <div className="itemImageBox">
          <img
            src="./images/6.jpg"
            alt="productImage"
            className="productImage"
          />
        </div>
        {product.map(product => (
          <div className="productDescription" key={product.id}>
            <h1 className="productName">상품이름:{product.name}</h1>
            <p className="mainDescription">{product.description}</p>
            <ul className="descriptionBox">
              <li className="usingType">TYPE</li>
              <p className="itemUsingType">{product.type}</p>
              <li className="usingType">용도</li>
              <p className="itemUsingType">{product.using}</p>
              <li className="usingType">SIZE</li>
              <p className="itemUsingType">{product.size}</p>
              <li className="usingType">THICKNESS</li>
              <p className="itemUsingType">{product.thickness}</p>
              <li className="usingType">WEIGHT</li>
              <p className="itemUsingType">{product.weight}</p>
            </ul>
            <div className="productCountBox">
              <div className="count">여기는 카운트 컴포넌트</div>
              <button
                type="submit"
                className="saveCart"
                onClick={() => {
                  navigate('/cart');
                }}
              >
                장바구니 버튼 컴포넌트 분리
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
