import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <main className="Main">
      <div className="container">
        <div className="mainVisual">
          <div className="logo">
            <img src="./images/logo.png" alt="logo" />
          </div>
          <div class="text">
            <p>끊임없는 연구와 투자로 인한</p>
            <p>“우수한 품질과 높은 강도”</p>
            <p>변색 걱정없는 반영구성</p>
          </div>
          <div className="bgImg">
            <img src="./images/mv_1.jpeg" alt="mv" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
