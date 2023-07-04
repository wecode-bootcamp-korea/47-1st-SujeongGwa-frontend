import React, { useState, useEffect } from 'react';
import './Order.scss';
import Count from '../../components/Count/Count';
import { useNavigate } from 'react-router-dom';

const Order = () => {
  const [items, setItems] = useState([]);
  const [originalItems, setOriginalItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [weights, setTotalWeight] = useState(0);
  const [prices, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('./data/order.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.data);
        setOriginalItems(data.data);
        setTotalWeight(calculateTotalWeight(data.data));
        setTotalPrice(calculateTotalPrice(data.data));
      });
  }, []);

  useEffect(() => {
    fetch('./data/user.json')
      .then(res => res.json())
      .then(data => setUsers(data.user));
  }, []);

  const setCountArray = (itemId, count) => {
    setItems(prevItems => {
      const updatedItems = prevItems.map(item => {
        if (item.id === itemId) {
          const originalItem = originalItems.find(i => i.id === itemId);
          const updatedItem = { ...item, count: count };
          updatedItem.weight = originalItem.weight * count;
          updatedItem.price = Number(originalItem.price) * count;
          return updatedItem;
        }
        return item;
      });

      setTotalWeight(calculateTotalWeight(updatedItems));
      setTotalPrice(calculateTotalPrice(updatedItems));

      return updatedItems;
    });
  };

  const calculateTotalWeight = items => {
    return items.reduce((total, item) => total + Number(item.weight), 0);
  };

  const calculateTotalPrice = items => {
    return items.reduce((total, item) => total + Number(item.price), 0);
  };

  const [inputValues, setInputValues] = useState({});
  const handleInputValue = e => {
    const { name, value } = e.target;
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const totalWeight = weights;
  const showAlert = totalWeight > 1000;

  //post요청시
  const postProduct = () => {
    fetch('api/oder/주문번호', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        address: inputValues.address,
        total_price: prices,
        total_weight: weights,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.message === 'CREATE_USER_SUCCESS!') {
          navigate('/orderResult');
        } else if (data.message === '백엔드 메세지') {
          alert('구매에 실패하였습니다.');
        }
      });
  };

  return (
    <div className="order">
      {users.map(el => (
        <div className="buyerInfo" key={el.id}>
          <h1>주문자 정보</h1>
          <p className="userInfo"> {el.name} </p>
          <div className="shippingAddress">
            <h2>주문을 어디로 보내시겠습니까?</h2>
            <div className="orderTypeName"> 이름</div>
            <input
              className="name input"
              name="name"
              placeholder="받으실 분 성함을 적어주세요"
              onChange={handleInputValue}
            />
            <div className="orderTypeName">주소</div>
            <input
              className="address input"
              placeholder="배송 상세주소를 적어주세요"
              name="address"
              onChange={handleInputValue}
            />
            <div className="orderTypeName">배송 요청</div>
            <input
              className="detailAddress input"
              placeholder="경비실에 맡겨주세요"
              name="memo"
              onChange={handleInputValue}
            />
          </div>
        </div>
      ))}
      <div className="perchaseBox">
        <div className="payBox">
          <div className="indexBox">
            <p className="resultText"> 최종가격</p>
            <p className="resultText"> 총 무게</p>
          </div>
          <div className="final">
            <p className="resultText">{prices} 원</p>
            <p className="resultText">{weights} KG</p>
          </div>
        </div>
        {items.map(el => (
          <div className="total" key={el.id}>
            <div className="item">
              <img
                src={el.image_url}
                alt="perchaseProduct"
                className="perchaseImage"
              />
              <div className="perchaseOption">
                <p className="descriptionOption">{el.name}</p>
                <p className="descriptionOption">{el.surface_type_id}</p>
                <p className="descriptionOption">{el.sub_category_id}</p>
              </div>
              <div className="perchaseOption">
                <Count
                  className="count"
                  count={el.count}
                  setCount={newCount => setCountArray(el.id, newCount)}
                  isDisabled={showAlert}
                />
                <p className="descriptionOption">{el.weight} KG</p>
                <p className="descriptionOption">{Number(el.price)} 원</p>
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
          <button
            type="submit"
            className="payment"
            onClick={() => {
              navigate('/orderResult');
            }}
            disabled={showAlert}
          >
            결제하기
          </button>
          {showAlert && (
            <div className="alertTextBox">
              <p className="alertText">
                무게는 1000Kg 이상 구매하실 수 없습니다.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Order;
