import React from 'react';
import { Link } from 'react-router-dom';

const PorcelainA = ({ productListBox }) => {
  return (
    <section className="PorcelainA">
      <ul className="productListRow">
        {productListBox.map(product => (
          <li key={product.id}>
            <Link to={product.to}>
              <div className="imgBox">
                <img src={product.img} alt={product.name} />
                <button type="sumbit">+ 장바구니 담기</button>
              </div>
              <p>{product.name}</p>
              <span>{product.type}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PorcelainA;
