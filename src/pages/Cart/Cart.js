import React, { useState, useEffect } from 'react';
import Count from '../../components/Count/Count';
import './Cart.scss';

const Cart = () => {
  const [cartList, setCartList] = useState([]);

  useEffect(() => {
    fetch('./data/cartListData.json')
      .then(res => res.json())
      .then(data => {
        setCartList(data);
      });
  }, []);

  return (
    <div className="cart">
      <div className="container">
        <h1>CART</h1>
        <div className="cartBox">
          <ul className="cartTitle">
            {CART_TITLE.map(info => (
              <li key={info.id}>{info.name}</li>
            ))}
          </ul>
          <div className="cartListBox">
            {cartList.map(info => (
              <ul className="cartList" key={info.id}>
                <li>{info.kind}</li>
                <li>{info.size}</li>
                <li>{info.tileName}</li>
                <li>{info.weight}</li>
                <li>
                  <Count />
                </li>
                <li>{info.price}원</li>
                <li className="deletBtn">
                  <button>X</button>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="right">
          <div className="totalBox">
            <ul className="totalTitle">
              {TOTAL_TITLE.map(info => (
                <li key={info.id}>{info.name}</li>
              ))}
            </ul>
            <ul className="totalList">
              <li className="totalKg">500</li>
              <li className="totalAmount">160,000</li>
            </ul>
          </div>
          <div className="buttonBox">
            {/* <Count /> */}
            {/* 버튼컴포넌트 사용예정입니다 */}
            <button className="blackBtn">메인으로</button>
            <button className="blackBtn">이전으로</button>
            <button className="blackBtn">결체하기</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CART_TITLE = [
  { id: 1, name: '종류' },
  { id: 2, name: '사이즈' },
  { id: 3, name: '상품명' },
  { id: 4, name: 'Kg' },
  { id: 5, name: '수량' },
  { id: 6, name: '금액' },
  { id: 7, name: '상품삭제' },
];

const TOTAL_TITLE = [
  { id: 1, name: '전체 Kg' },
  { id: 2, name: '전체 금액' },
];
