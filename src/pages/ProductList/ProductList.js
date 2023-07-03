import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PorcelainA from './PorcelainA/PorcelainA';
import ConstructionCase from './ConstructionCase/ConstructionCase';
import './ProductList.scss';

const ProductList = () => {
  const [rangking, setRangking] = useState([]);
  const [productListBox, setproductListBox] = useState([]);

  useEffect(() => {
    fetch('/data/rangkingData.json')
      .then(res => res.json())
      .then(data => {
        setRangking(data);
      });
  }, []);

  useEffect(() => {
    fetch('/data/productListBoxData.json')
      .then(res => res.json())
      .then(data => {
        setproductListBox(data);
      });
  }, []);

  return (
    <div className="productList">
      <section className="rangking">
        <h1>RANGKING</h1>
        <ul className="rangkingBox">
          {rangking.map(rangking => (
            <li key={rangking.id}>
              <h2>{rangking.top}</h2>
              <Link to={rangking.link}>
                <div className="imgBox">
                  <img src={rangking.img} alt={rangking.name} />
                  <button type="sumbit">+ 장바구니 담기</button>
                </div>
                <p>{rangking.name}</p>
                <span>{rangking.type}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="subCategory">
        <div className="container">
          <h1>PORCELAIN TILE</h1>
          <span>|</span>
          <ul className="subCategoryBox">
            {SUB_CATEGORY.map(rangking => (
              <li key={rangking.id}>
                <Link to={rangking.to}>{rangking.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <PorcelainA productListBox={productListBox} />
      <ConstructionCase />
    </div>
  );
};

export default ProductList;

const SUB_CATEGORY = [
  { id: 1, to: '/', name: '600X600X10MM' },
  { id: 2, to: '/', name: '600X600X20MM' },
  { id: 3, to: '/', name: '600X1200X20MM' },
  { id: 4, to: '/', name: '600X1200X11MM' },
  { id: 5, to: '/', name: '400X800X10MM' },
  { id: 6, to: '/', name: '시공사례' },
];
