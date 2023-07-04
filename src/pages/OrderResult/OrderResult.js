import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderResult.scss';

const OrderResult = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('./data/orderResult.json')
      .then(res => res.json())
      .then(data => setOrders(data.data));
  }, []);
  console.log(orders);
  if (!orders) {
    return null;
  }

  return (
    <div className="orderResult">
      {orders.map(data => (
        <div key={data.product_id}>
          <div className="orderText">
            <h1>감사합니다, {data.name} 님</h1>
            <p className="thanksText">
              주문이 완료되었습니다. <br />
              추가 문의 사항이 있으시면 연락 주시기 바랍니다.
            </p>
          </div>
          <div className="orderNumberBox">
            <li>주문번호</li>
            <li>{data.order_number}</li>
            <li>{data.total_weight}</li>
          </div>
          <div className="orderInfoBox">
            <ul className="orderItemBox">
              {ORDER_CATEGORY.map(el => (
                <li key={el.id}>{el.name}</li>
              ))}
            </ul>
            {data.product.map(orderResult => (
              <div className="orderItemBox" key={orderResult.product_id}>
                <li>{orderResult.name}</li>
                <li>{orderResult.surface_type_id}</li>
                <li>{orderResult.quantity}</li>
              </div>
            ))}
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
                <li>{data.name}</li>
                <li>{data.email}</li>
                <li>POINT(포인트)</li>
                <li>{data.name}</li>
                <li>{data.address}</li>
                <li>경비실에 맡겨주세요</li>
              </ul>
            </div>
          </div>
        </div>
      ))}
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
  { id: 3, name: '결제방법' },
  { id: 4, name: '수취인' },
  { id: 5, name: '배송지' },
  { id: 6, name: '배송메모' },
];
