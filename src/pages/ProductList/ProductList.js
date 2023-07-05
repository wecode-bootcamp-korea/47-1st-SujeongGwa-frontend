import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ProductList.scss';

const ProductList = () => {
  const [rangking, setRangking] = useState([]);
  const [productListData, setProductListData] = useState([]);

  const { sub_category_id } = useParams();
  useEffect(() => {
    fetch('/data/rangkingData.json')
      .then(res => res.json())
      .then(data => {
        setRangking(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://10.58.52.156:3000/goods/category/${sub_category_id}`)
      .then(res => res.json())
      .then(data => {
        setProductListData(data.data);
      });
  }, [sub_category_id]);

  const surfaceType = [
    { id: 1, type: 'MATT' },
    { id: 2, type: 'HARD MATT' },
    { id: 3, type: 'SOFT MATT' },
    { id: 4, type: 'LAPPATO' },
    { id: 5, type: 'GLOSSY' },
  ];

  const findSurFace = surfaceTypeId => {
    return surfaceType.find(el => el.id === surfaceTypeId).type;
  };

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
                <Link to={`/goods/category/${rangking.id}`}>
                  {rangking.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="productListBox">
        <ul className="productListRow">
          {productListData.length > 0 &&
            productListData.map(product => (
              <li key={product.id}>
                <Link to="/">
                  <div className="imgBox">
                    <img src={product.image_url} alt={product.name} />
                    <button type="sumbit">+ 카트 담기</button>
                  </div>
                  <p>{product.name}</p>
                  <span>{findSurFace(product.surface_type_id)}</span>
                </Link>
              </li>
            ))}
        </ul>
      </section>
      {/* <ConstructionCase /> */}
    </div>
  );
};

export default ProductList;

const SUB_CATEGORY = [
  { id: 1, name: '600X600X10MM' },
  { id: 2, name: '600X600X20MM' },
  { id: 3, name: '600X1200X20MM' },
  { id: 4, name: '600X1200X11MM' },
  { id: 5, name: '400X800X10MM' },
  // { id: 6, name: '시공사례' },
];
