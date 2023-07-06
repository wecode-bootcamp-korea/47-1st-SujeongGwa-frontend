import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './OrderResult.scss';

const OrderResult = ({ setModal }) => {
  const navigate = useNavigate();

  const handleGoMain = () => {
    navigate('/');
  };

  const closeModal = () => {
    setModal(false);
  };
  return (
    <div className="orderResult">
      <button onClick={closeModal} className="closeBtn">
        ✕
      </button>
      <div className="orderText">
        <h1>감사합니다, userName님</h1>
        <p className="thanksText">
          주문이 완료되었습니다. <br />
          추가 문의 사항이 있으시면 연락 주시기 바랍니다.
        </p>
      </div>
      <div className="orderNumberBox">
        <li>주문번호</li>
        <li>orderNumber</li>
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
              <li>productname</li>
              <li>producttype</li>
              <li>productquantity 개</li>
            </ul>
          </div>
        </div>
        <div className="orderNumberBox2">
          <li> 총 무게 : weight Kg</li>
          <li> 총 가격 : price 원</li>
        </div>
      </div>
      <div className="orderUserInfoBox">
        <div className="orderUserBox">
          {ORDERUSER_CATEGORY.map(el => (
            <ul className="orderUserInfo" key={el.id}>
              <li>{el.name}</li>
            </ul>
          ))}
        </div>
        <div className="orderUserBox">
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
