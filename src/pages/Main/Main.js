import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <main className="Main">
      <div className="container">
        <div className="mainVisual">
          <div className="left">
            <div className="logo">
              <img src="./images/logo.png" alt="logo" />
            </div>
            <div className="text">
              <p>끊임없는 연구와 투자로 인한</p>
              <p>“우수한 품질과 높은 강도”</p>
              <p>변색 걱정없는 반영구성</p>
            </div>
          </div>
          <div className="right bgImg">
            <img src="./images/mv_1.jpeg" alt="mv" />
          </div>
        </div>
        <div className="mainContents">
          {MAIN_CONTENTS_LIST.map(info => (
            <section className={`slide ${info.className}`} key={info.id}>
              <div className="text">
                <p className="discriptTitle">{info.discriptTitle}</p>
                <p className="discriptText">{info.discriptText}</p>
                <p className="itemStory">{info.itemStory}</p>
              </div>
              <div className="productBox">
                {PRODUCT_LIST_01.map(info => (
                  <div className="product" key={info.id}>
                    <img src={info.img} alt={info.name} />
                    <p>{info.name}</p>
                    <span>{info.type}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;

const PRODUCT_LIST_01 = [
  { id: 1, img: './images/p_1_1.jpeg', name: 'SPM 1103', type: 'MATT' },
  { id: 2, img: './images/p_1_2.jpeg', name: 'SPM 3055', type: 'MATT' },
  { id: 3, img: './images/p_1_3.jpeg', name: 'SPM 3056', type: 'MATT' },
  { id: 4, img: './images/p_1_1.jpeg', name: 'SPM 1103', type: 'MATT' },
];

const MAIN_CONTENTS_LIST = [
  {
    id: 1,
    className: 'mc01',
    discriptTitle: '건축용 스톤이라면',
    discriptText:
      '외부 환경에 강해야 한다. 외벽부터 실내까지 연출이 다양해야한다. 라돈 걱정 없이 안전해야 한다.',
    itemStory: '자연석에 바라는 모든 것, 더 튼튼하게, 더 아름답게, 더 안전하게',
  },
  {
    id: 2,
    className: 'mc02',
    discriptTitle: '건축용 스톤이라면',
    discriptText:
      '외부 환경에 강해야 한다. 외벽부터 실내까지 연출이 다양해야한다. 라돈 걱정 없이 안전해야 한다.',
    itemStory: '자연석에 바라는 모든 것, 더 튼튼하게, 더 아름답게, 더 안전하게',
  },
  {
    id: 3,
    className: 'mc03',
    discriptTitle: '건축용 스톤이라면',
    discriptText:
      '외부 환경에 강해야 한다. 외벽부터 실내까지 연출이 다양해야한다. 라돈 걱정 없이 안전해야 한다.',
    itemStory: '자연석에 바라는 모든 것, 더 튼튼하게, 더 아름답게, 더 안전하게',
  },
];
