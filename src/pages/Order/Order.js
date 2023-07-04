// // import { useState, useEffect } from 'react';
// // import './Order.scss';
// // import Count from '../../components/Count/Count';

// // const Order = () => {
// //   const [items, setItems] = useState([]);
// //   const [users, setUsers] = useState([]);
// //   const [countNumber, setCount] = useState([]);

// //   useEffect(() => {
// //     fetch('./data/order.json')
// //       .then(res => res.json())
// //       .then(data => setItems(data.item));
// //   }, []);

// //   useEffect(() => {
// //     fetch('./data/user.json')
// //       .then(res => res.json())
// //       .then(data => setUsers(data.user));
// //   }, []);

// //   const setCountArray = () => {
// //     items.forEach(v => {
// //       items.push(v);
// //     });
// //     setCount(items.count);
// //   };

// //   return (
// //     <div className="order">
// //       {users.map(el => (
// //         <div className="buyerInfo" key={users.id}>
// //           <h1>주문자 정보</h1>
// //           <p className="userInfo"> {el.name} </p>
// //           <p className="userInfo"> {el.email}</p>
// //           <div class="shippingAddress">
// //             <h2>주문을 어디로 보내시겠습니까?</h2>
// //             <div className="orderTypeName"> 이름</div>
// //             <input
// //               className="name input"
// //               placeholder="받으실 분 성함을 적어주세요"
// //             />
// //             <div className="orderTypeName">주소</div>
// //             <input
// //               className="address input"
// //               placeholder="배송 상세주소를 적어주세요"
// //             />
// //             <div className="orderTypeName">배송 요청</div>
// //             <input
// //               className="detailAddress input"
// //               placeholder="경비실에 맡겨주세요"
// //             />
// //           </div>
// //         </div>
// //       ))}
// //       <div className="perchaseBox">
// //         <div className="payBox">
// //           <div className="indexBox">
// //             <p className="resultText"> 최종가격</p>
// //             <p className="resultText"> 배송비</p>
// //           </div>
// //           <div className="final">
// //             <p className="resultText">40000 원</p>
// //             <p className="resultText">0 원</p>
// //           </div>
// //         </div>
// //         {items.map(el => (
// //           <div className="total" key={items.id}>
// //             <div className="item">
// //               <img
// //                 src={el.imageUrl}
// //                 alt="perchaseProduct"
// //                 className="perchaseImage"
// //               />
// //               <div className="perchaseOption">
// //                 <p className="descriptionOption">{el.name}</p>
// //                 <p className="descriptionOption">{el.type}</p>
// //                 <p className="descriptionOption">{el.size}</p>
// //               </div>
// //               <div className="perchaseOption">
// //                 <Count countNumber={el.count} setCount={setCountArray} />
// //                 <p className="descriptionOption">{el.weight} KG</p>
// //                 <p className="descriptionOption">{el.price} 원</p>
// //               </div>
// //               <div className="deleteBox">
// //                 <button type="submit" className="deleteButton">

// //                 </button>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //         <div className="buttonBox">
// //           <button type="submit" className="payment">
// //             결제하기
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Order;

// import React, { useState, useEffect } from 'react';
// import './Order.scss';
// import Count from '../../components/Count/Count';

// const Order = () => {
//   const [items, setItems] = useState([]);
//   const [users, setUsers] = useState([]);
//   const [countNumber, setCount] = useState(1);
//   const [weights, setWeights] = useState([]);
//   const [prices, setPrices] = useState([]);

//   useEffect(() => {
//     fetch('./data/order.json')
//       .then(res => res.json())
//       .then(data => {
//         setItems(data.item);
//         setWeights(data.item[1].weight);
//         setPrices(data.item[1].price);
//       });
//   }, []);

//   useEffect(() => {
//     fetch('./data/user.json')
//       .then(res => res.json())
//       .then(data => setUsers(data.user));
//   }, []);

//   const setCountArray = (itemId, newCount) => {
//     setItems(prevItems => {
//       const updatedItems = prevItems.map(item => {
//         if (item.id === itemId) {
//           return { ...item, count: newCount };
//         }
//         return item;
//       });
//       return [...updatedItems];
//     });
//     setCount(newCount);
//   };

//   useEffect(() => {
//     const totalPrice = prices * countNumber;
//     const totalWeight = weights * countNumber;
//     setTotalPrice(totalPrice);
//     setTotalWeight(totalWeight);
//   }, [items, countNumber, prices, weights]);

//   const [totalPrice, setTotalPrice] = useState(0);
//   const [totalWeight, setTotalWeight] = useState(0);
//   const showAlert = totalWeight > 1000;

//   return (
//     <div className="order">
//       {users.map(el => (
//         <div className="buyerInfo" key={el.id}>
//           <h1>주문자 정보</h1>
//           <p className="userInfo"> {el.name} </p>
//           <p className="userInfo"> {el.email}</p>
//           <div className="shippingAddress">
//             <h2>주문을 어디로 보내시겠습니까?</h2>
//             <div className="orderTypeName"> 이름</div>
//             <input
//               className="name input"
//               placeholder="받으실 분 성함을 적어주세요"
//             />
//             <div className="orderTypeName">주소</div>
//             <input
//               className="address input"
//               placeholder="배송 상세주소를 적어주세요"
//             />
//             <div className="orderTypeName">배송 요청</div>
//             <input
//               className="detailAddress input"
//               placeholder="경비실에 맡겨주세요"
//             />
//           </div>
//         </div>
//       ))}
//       <div className="perchaseBox">
//         <div className="payBox">
//           <div className="indexBox">
//             <p className="resultText"> 최종가격</p>
//             <p className="resultText"> 배송비</p>
//           </div>
//           <div className="final">
//             <p className="resultText">40000 원</p>
//             <p className="resultText">0 원</p>
//           </div>
//         </div>
//         {items.map(el => (
//           <div className="total" key={el.id}>
//             <div className="item">
//               <img
//                 src={el.imageUrl}
//                 alt="perchaseProduct"
//                 className="perchaseImage"
//               />
//               <div className="perchaseOption">
//                 <p className="descriptionOption">{el.name}</p>
//                 <p className="descriptionOption">{el.type}</p>
//                 <p className="descriptionOption">{el.size}</p>
//               </div>
//               <div className="perchaseOption">
//                 <Count
//                   count={el.count}
//                   setCount={newCount => setCountArray(el.id, newCount)}
//                   isDisabled={showAlert}
//                 />

//                 <p className="descriptionOption">{totalWeight} KG</p>
//                 <p className="descriptionOption">{totalPrice} 원</p>
//               </div>
//               <div className="deleteBox">
//                 <button type="submit" className="deleteButton">
//                   ✕
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//         <div className="buttonBox">
//           <button type="submit" className="payment">
//             결제하기
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Order;

import React, { useState, useEffect } from 'react';
import './Order.scss';
import Count from '../../components/Count/Count';

const Order = () => {
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [countNumber, setCount] = useState(1);
  const [weights, setTotalWeight] = useState(0);
  const [prices, setTotalPrice] = useState(0);

  useEffect(() => {
    fetch('./data/order.json')
      .then(res => res.json())
      .then(data => {
        setItems(data.item);
        setTotalWeight(calculateTotalWeight(data.item));
        setTotalPrice(calculateTotalPrice(data.item));
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
          const updatedItem = { ...item, count: count };
          updatedItem.weight = item.weight * count;
          updatedItem.price = item.price * count;
          return updatedItem;
        }
        return item;
      });
      return [...updatedItems];
    });

    setCount(count);
    setTotalWeight(calculateTotalWeight(items));
    setTotalPrice(calculateTotalPrice(items));
  };
  const calculateTotalWeight = items => {
    return items.reduce((total, item) => total + item.weight, 0);
  };

  const calculateTotalPrice = items => {
    return items.reduce((total, item) => total + item.price, 0);
  };
  return (
    <div className="order">
      {users.map(el => (
        <div className="buyerInfo" key={el.id}>
          <h1>주문자 정보</h1>
          <p className="userInfo"> {el.name} </p>
          <p className="userInfo"> {el.email}</p>
          <div className="shippingAddress">
            <h2>주문을 어디로 보내시겠습니까?</h2>
            <div className="orderTypeName"> 이름</div>
            <input
              className="name input"
              placeholder="받으실 분 성함을 적어주세요"
            />
            <div className="orderTypeName">주소</div>
            <input
              className="address input"
              placeholder="배송 상세주소를 적어주세요"
            />
            <div className="orderTypeName">배송 요청</div>
            <input
              className="detailAddress input"
              placeholder="경비실에 맡겨주세요"
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
            <p className="resultText">{prices} 원</p>
            <p className="resultText">0 원</p>
          </div>
        </div>
        {items.map(el => (
          <div className="total" key={el.id}>
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
                <Count
                  count={el.count}
                  setCount={newCount => setCountArray(el.id, newCount)}
                  // isDisabled={showAlert}
                />
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
