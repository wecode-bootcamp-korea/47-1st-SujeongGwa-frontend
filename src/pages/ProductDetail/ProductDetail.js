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
            </div>
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
        ))}
      </div>
      <div className="productExample">
        <div className="constructionText">
          <h1 className="constructionTitle">SJG TILE 시공 방법</h1>
          <h3>페데스탈 시공</h3>
          <h3>BUILD PEDESTAL</h3>
          <p className="exampleText">
            바닥청소 → 수평확인 및 기준점 셋팅 → 페데스탈 조립 및 배열 → 마감재
            시공
          </p>
          <p className="exampleText">테라스, 데크, 수경시설, 옥상바닥 추천</p>
        </div>
        <div className="constructionWay">
          <img
            src="./images/constructWay1.png"
            alt="testCase"
            className="testCase"
          />
        </div>
      </div>
      <div className="productExample">
        <div className="constructionWay">
          <img
            src="./images/constructWay2.png"
            alt="testCase"
            className="testCase"
          />
        </div>
        <div className="constructionText">
          <h1 className="constructionTitle">SJG TILE 시공 방법</h1>
          <h3>페데스탈 시공</h3>
          <h3>BUILD PEDESTAL</h3>
          <p className="exampleText">
            바닥청소 → 수평확인 및 기준점 셋팅 → 페데스탈 조립 및 배열 → 마감재
            시공
          </p>
          <p className="exampleText">테라스, 데크, 수경시설, 옥상바닥 추천</p>
        </div>
      </div>
      <div className="productTableBox">
        <table className="productInformation">
          {TABLE_TITLE.map(el => (
            <tr className="column-left" key={el.id}>
              {el.text}
            </tr>
          ))}
        </table>
        <table className="productInformation">
          {TABLE_CONTENT.map(el => (
            <tr className="column-right" key={el.id}>
              {el.text}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default ProductDetail;

const TABLE_TITLE = [
  { id: '1', text: '꺾임 강도(Bending Strength)' },
  { id: '2', text: '' },
  { id: '3', text: '흡수율(Water Absorption)' },
  { id: '4', text: '내마모성(Abrasion Resistance)' },
  { id: '5', text: '내균열성(Crazing Resistance)' },
  { id: '6', text: '내화확성(Chemical Resistance(Acid/Alkali))' },
  { id: '7', text: '내동해성(Freezing Damage Resistance)' },
  { id: '8', text: '미끄럼저항성(Slip Resistance Test: Wettability)' },
];

const TABLE_CONTENT = [
  { id: '1', text: '200N/cm이상(9.0이상)' },
  { id: '2', text: '1200N/cm이상(20.0이상)' },
  { id: '3', text: '0.5% 이하' },
  { id: '4', text: '0.05g 이하' },
  { id: '5', text: '2회 이상 무' },
  { id: '6', text: '이상없음(No Attack)' },
  { id: '7', text: '이상없음(No Attack)' },
  { id: '8', text: '0.4 이상' },
];
