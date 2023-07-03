import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderResult.scss';

const OrderResult = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('./data/orderUser.json')
      .then(res => res.json())
      .then(data => setUsers(data.user));
  }, []);

  useEffect(() => {
    fetch('./data/orderResult.json')
      .then(res => res.json())
      .then(data => setOrders(data.orderResult));
  }, []);

  return (
    <div className="orderResult">
      {users.map(user => (
        <div className="orderText" key={user.id}>
          <h1> 감사합니다, {user.name} 님</h1>
          <p className="thanksText">
            주문이 완료되었습니다. <br />
            추가 문의 사항이 있으시면 연락 주시기 바랍니다.
          </p>
        </div>
      ))}
      {orders.map(orderResult => (
        <div className="orderNumberBox" key={orderResult.id}>
          <li> 주문번호 </li>
          <li> {orderResult.id} </li>
          <li> {orderResult.date} </li>
        </div>
      ))}
      <div className="orderInfoBox">
        <ul className="orderItemBox">
          {ORDER_CATEGORY.map(el => (
            <li key={el.id}>{el.name}</li>
          ))}
        </ul>
        {orders.map(orderResult => (
          <div className="orderItemBox" key={orderResult.id}>
            <li>{orderResult.name} </li>
            <li>{orderResult.size} </li>
            <li>{orderResult.type} </li>
            <li>{orderResult.kg} </li>
            <li>{orderResult.count} </li>
            <li>{orderResult.totalPrice} </li>
          </div>
        ))}
      </div>
      <div className="orderUserInfoBox">
        <div className="orderUserBox">
          {ORDERUSER_CATEGORY.map(el => (
            <ul className="orderUserInfo" key={el.id}>
              <li>{el.name} </li>
            </ul>
          ))}
        </div>
        <div className="orderUserBox">
          {users.map(user => (
            <ul className="orderUserInfo" key={user.id}>
              <li>{user.name}</li>
              <li>{user.email}</li>
              <li>{user.phoneNumber}</li>
              <li>{user.payWay}</li>
              <li>{user.receiveMan}</li>
              <li>{user.deliveryLocation}</li>
              <li>{user.deliveryRequest}</li>
            </ul>
          ))}
        </div>
      </div>

      <div className="gotoHomeBox">
        <button
          className="gotoHome"
          onClick={() => {
            navigate('/');
          }}
        >
          메인페이지로 이동
        </button>
      </div>
    </div>
  );
};

export default OrderResult;

const ORDER_CATEGORY = [
  { id: 1, name: '종류' },
  { id: 2, name: '사이즈' },
  { id: 3, name: '재질' },
  { id: 4, name: 'KG' },
  { id: 5, name: '수량' },
  { id: 6, name: '금액' },
];

const ORDERUSER_CATEGORY = [
  { id: 1, name: '이름' },
  { id: 2, name: 'Email' },
  { id: 3, name: 'PhoneNumber' },
  { id: 4, name: '결제방법' },
  { id: 5, name: '수취인' },
  { id: 6, name: '배송지' },
  { id: 7, name: '배송메모' },
];
