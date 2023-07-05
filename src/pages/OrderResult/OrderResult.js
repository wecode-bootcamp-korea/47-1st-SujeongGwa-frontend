import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderResult.scss';

const OrderResult = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch('http://api주소:3000/oder', {
      method: 'GET',
      headers: {
        authorization: 'Bearer 어쩌고저쩌고',
      },
    })
      .then(res => res.json())
      .then(data => {
        setResult([data.data]);
        // console.log(data);
        // console.log('가져온 데이터:', data);
      });
  }, []);

  return (
    <div className="orderResult">
      {result &&
        result.map(data => (
          <div key={data.order_number}>
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
            </div>

            <div className="orderInfoBox">
              <ul className="orderItemBox">
                {ORDER_CATEGORY.map(el => (
                  <li key={el.id}>{el.name}</li>
                ))}
              </ul>
              <div className="orderItemBox">
                <div className="orderItemBox2">
                  {data.product.map((productData, index) => (
                    <ul className="column" key={index}>
                      <li>{productData.name}</li>
                      <li>{productData.surface_type_id}</li>
                      <li>{productData.quantity} 개</li>
                    </ul>
                  ))}
                </div>
              </div>

              <div className="orderNumberBox2">
                <li> 총 무게 : {data.total_weight} Kg</li>
                <li> 총 가격 : {data.total_price} 원</li>
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
  { id: 1, name: '이름' },
  { id: 2, name: '타입' },
  { id: 3, name: '구매수량' },
  // { id: 4, name: 'KG' },
  // { id: 5, name: '수량' },
  // { id: 6, name: '금액' },
];

const ORDERUSER_CATEGORY = [
  { id: 1, name: '이름' },
  { id: 2, name: 'Email' },
  { id: 3, name: '결제방법' },
  { id: 4, name: '수취인' },
  { id: 5, name: '배송지' },
  { id: 6, name: '배송메모' },
];
