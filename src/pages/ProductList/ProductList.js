import React from 'react';
import './ProductList.scss';

const ProductList = () => {
  return (
    <div className="productList">
      <div className="rangking">
        <h1>Rangking</h1>
        <ul className="RangkingBox">
          <li>
            <img src="./images/p_1_1.jpeg" alt="SPM 1103" />
            <p>SPM 1103</p>
            <p>MATT</p>
          </li>
          <li>
            <img src="./images/p_1_2.jpeg" alt="SPM 3055" />
            <p>SPM 3055</p>
            <p>MATT</p>
          </li>
          <li>
            <img src="./images/p_1_3.jpeg" alt="SPM 3056" />
            <p>SPM 3056</p>
            <p>MATT</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductList;
