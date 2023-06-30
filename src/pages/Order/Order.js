import { useState, useEffect } from 'react';
import './Order.scss';

const Order = () => {
  const [item, setItem] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch('./data/order.json')
      .then(res => res.json())
      .then(data => setItem(data.item));
  }, []);

  useEffect(() => {
    fetch('./data/user.json')
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, []);

  return (
    <div className="order">
      {user.map(el => (
        <div className="buyerInfo" key={user.id}>
          <h1>주문자 정보</h1>
          <p className="userInfo"> {el.name} </p>
          <p className="userInfo"> {el.email}</p>
          <div class="shippingAddress">
            <h2>주문을 어디로 보내시겠습니까?</h2>
            <input className="name input" placeholder="이름" />
            <div className="zipCodeBox">
              <input className="zipCodeInput" placeholder="우편번호" />
              <button className="findZipCode">우편번호 찾기</button>
            </div>
            <input className="address input" placeholder="주소" />
            <input
              className="detailAddress input"
              placeholder="상세주소(동/호수/일반주택 등)"
            />
          </div>
        </div>
      ))}
      <div className="perchaseBox">
        <div className="payBox">
          <div className="indexBox">
            <p className="resultText"> 최종가격</p>
            <p className="resultText"> 배송비</p>
          </div>
          <div className="final">
            <p className="resultText">40000 원</p>
            <p className="resultText">0 원</p>
          </div>
        </div>
        {item.map(el => (
          <div className="total" key={item.id}>
            <div className="item">
              <img
                src={el.imageUrl}
                alt="perchaseProduct"
                className="perchaseImage"
              />
              <div className="perchaseOption">
                <p className="descriptionOption">{el.name}</p>
                <p className="descriptionOption">{el.type}</p>
                <p className="descriptionOption">{el.size}</p>
              </div>
              <div className="perchaseOption">
                <button type="button" className="descriptionOption">
                  {el.count}
                </button>
                <p className="descriptionOption">{el.weight} KG</p>
                <p className="descriptionOption">{el.price} 원</p>
              </div>
              <div className="deleteBox">
                <button type="submit" className="deleteButton">
                  ✕
                </button>
              </div>
            </div>
          </div>
        ))}
        <div className="buttonBox">
          <button type="submit" className="payment">
            결제하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
