import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderResult.scss';

const OrderResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const info = location.state;

  const handleGoMain = () => {
    navigate('/');
  };
  return (
    <div className="orderResult">
      <div className="orderText">
        <h1>감사합니다, 김땡땡 님</h1>
        <p className="thanksText">
          주문이 완료되었습니다. <br />
          추가 문의 사항이 있으시면 연락 주시기 바랍니다.
        </p>
      </div>
      <div className="orderNumberBox">
        <li>주문번호</li>
        <li>12312312323213123</li>
      </div>
      <div className="orderInfoBox">
        <ul className="orderItemBox">
          {ORDER_CATEGORY.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
        <div className="orderItemBox">
          <div className="orderItemBox2">
            <ul className="column">
              <li>상품명</li>
              <li>상품타입</li>
              <li>구매개수 개</li>
            </ul>
          </div>
        </div>
        <div className="orderNumberBox2">
          <li> 총 무게 : 총무게 Kg</li>
          <li> 총 가격 : 총가격 원</li>
        </div>
      </div>
      <div className="orderUserInfoBox">
        <div className="orderUserBox">
          {ORDERUSER_CATEGORY.map(el => (
            <ul className="orderUserInfo" key={el.id}>
              <li>{el.name}</li>
            </ul>
          ))}
          <div className="orderUserBox2">
            <ul className="orderUserInfo">
              <li>userName</li>
              <li>email</li>
              <li>POINT(포인트)</li>
              <li>userName</li>
              <li>address</li>
              <li>경비실에 맡겨주세요</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="gotoHomeBox">
        <button className="gotoHome" onClick={handleGoMain}>
          메인페이지로 이동
        </button>
      </div>
    </div>
  );
};
export default OrderResult;

const ORDER_CATEGORY = [
  { id: 1, name: '이름' },
  { id: 2, name: '타입' },
  { id: 3, name: '구매수량' },
];

const ORDERUSER_CATEGORY = [
  { id: 1, name: '이름' },
  { id: 2, name: 'Email' },
  { id: 3, name: '결제방법' },
  { id: 4, name: '수취인' },
  { id: 5, name: '배송지' },
  { id: 6, name: '배송메모' },
];
