import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Count from '../../components/Count/Count';
import './Cart.scss';

const Cart = () => {
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [weights, setTotalWeight] = useState(0);
  const [prices, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('./data/cartListData.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.data);
        setOriginalItems(data.data);
        setTotalWeight(calculateTotalWeight(data.data));
        setTotalPrice(calculateTotalPrice(data.data));
      });
  }, []);

  const setCountArray = (cartId, count) => {
    setItems(prevItems => {
      const updatedItems = prevItems.map(data => {
        if (data.cartId === cartId) {
          const originalItem = originalItems.find(i => i.cartId === cartId);
          const updatedItem = { ...data, count: count };
          updatedItem.weight = originalItem.weight * count;
          updatedItem.price = parseFloat(originalItem.price) * count;
          return updatedItem;
        }
        return data;
      });

      setTotalWeight(calculateTotalWeight(updatedItems));
      setTotalPrice(calculateTotalPrice(updatedItems));

      return updatedItems;
    });
  };

  const calculateTotalWeight = items => {
    return items.reduce((total, data) => total + Number(data.weight), 0);
  };

  const calculateTotalPrice = items => {
    return items.reduce((total, data) => total + Number(data.price), 0);
  };

  const showAlert = weights > 1000;

  const onRemove = cartId => {
    const itemsFilter = items.filter(data => data.cartId !== cartId);
    setItems(itemsFilter);
  };

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
          <div className="cartEmpty">
            <p>장바구니가 비었습니다.</p>
          </div>
          {/* <div className="cartListBox">
            {items.map(el => (
              <ul className="cartList" key={el.cartId}>
                <li>{el.kindId}</li>
                <li>{el.sizeId}</li>
                <li>{el.tileName}</li>
                <li>{Number(el.weight)}</li>
                <li>
                  <Count
                    count={el.count}
                    setCount={newCount => setCountArray(el.cartId, newCount)}
                    isDisabled={showAlert}
                  />
                </li>
                <li>{Number(el.price)} 원</li>
                <li className="deletBtn">
                  <button onClick={() => onRemove(el.cartId)}>X</button>
                </li>
              </ul>
            ))}
          </div> */}
        </div>
        <div className="right">
          <div className="totalBox">
            <ul className="totalTitle">
              {TOTAL_TITLE.map(info => (
                <li key={info.id}>{info.name}</li>
              ))}
            </ul>
            <ul className="totalList">
              <li className="totalKg">{Number(weights)}</li>
              <li className="totalAmount">{Number(prices)}</li>
            </ul>
            <div className="weightLimitTextBox">
              {showAlert && (
                <p className="weightLimitText">
                  무게는 1000Kg 이상 구매하실 수 없습니다.
                </p>
              )}
            </div>
          </div>
          <ul className="buttonBox">
            <li>
              <Link to="/">
                <button className="blackBtn">메인으로</button>
              </Link>
            </li>
            <li>
              <button
                className="blackBtn"
                onClick={() => window.history.back()}
              >
                이전으로
              </button>
            </li>
            <li>
              <Link to="/order">
                <button className="blackBtn" disabled={showAlert}>
                  결제하기
                </button>
              </Link>
            </li>
          </ul>
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
