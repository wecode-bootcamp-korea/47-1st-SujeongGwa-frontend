import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import './ProductDetail.scss';
import Count from '../../components/Count/Count';

const ProductDetail = () => {
  const navigate = useNavigate();
  const [countNumber, setCount] = useState(1);
  const [product, setProduct] = useState([]);
  const [weight, setWeight] = useState(product.weight);

  useEffect(() => {
    fetch('./data/product.json')
      .then(res => res.json())
      .then(data => {
        setProduct(data.product);
        if (data.product.length > 0) {
          setWeight(data.product[0].weight);
        }
      });
  }, []);

  const totalPrice =
    product.length > 0 ? product[0].price * countNumber.toLocaleString() : 0;
  const totalWeight = weight * countNumber.toLocaleString();
  const showAlert = totalWeight > 1000;

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
              <li className="usingType">
                <div>TYPE</div>
                <p className="itemUsingType">{product.type}</p>
              </li>
              <li className="usingType">
                <div>용도</div>
                <p className="itemUsingType">{product.using}</p>
              </li>
              <li className="usingType">
                <div>SIZE</div>
                <p className="itemUsingType">{product.size}</p>
              </li>
              <li className="usingType">
                <div>THICKNESS</div>
                <p className="itemUsingType">{product.thickness}</p>
              </li>
              <li className="usingType">
                <div>WEIGHT</div>
                <p className="itemUsingType">{product.weight}</p>
              </li>
            </ul>
            <div className="productCountBox">
              <Count
                countNumber={countNumber}
                setCount={setCount}
                isDisabled={showAlert}
              />
              <div className="totalPrice">{totalPrice}원</div>
              <div className="totalPrice">{totalWeight}Kg</div>
            </div>
            {showAlert && (
              <div className="alertTextBox">
                <p className="alertText">
                  무게는 1000Kg 이상 구매하실 수 없습니다.
                </p>
              </div>
            )}
            <button
              type="submit"
              className="saveCart"
              onClick={() => {
                setWeight({ totalWeight });
                navigate('/cart');
              }}
              disabled={totalWeight > 1000}
            >
              장바구니에 담기
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
