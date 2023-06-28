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
            <img src="./images/mv_2.jpeg" alt="mv" />
          </div>
        </div>
        <div className="mainContents">
          {MAIN_CONTENTS_LIST.map(info => (
            <div key={info.id}>
              <section className={info.SlideClassName}>
                <div className="text">
                  <p className="discriptTitle">{info.SlideDiscriptTitle}</p>
                  <p className="discriptText">{info.SlideDiscriptText}</p>
                  <p className="itemStory">{info.SlideItemStory}</p>
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

              <section className={info.SceneClassName}>
                <div className="sceneBox">
                  <div className="scene">
                    <img src={info.SceneImg} alt="현장이미지" />
                  </div>
                </div>
                <div className="text">
                  <p className="discriptTitle">{info.SceneDiscriptTitle}</p>
                  <p className="discriptText">{info.SceneDiscriptText}</p>
                  <p className="itemStory">{info.SceneItemStory}</p>
                </div>
              </section>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;

const MAIN_CONTENTS_LIST = [
  {
    id: 1,
    SlideClassName: 'mainContetnSlide01',
    SlideDiscriptTitle: '건축용 스톤이라면',
    SlideDiscriptText:
      '외부 환경에 강해야 한다. 외벽부터 실내까지 연출이 다양해야한다. 라돈 걱정 없이 안전해야 한다.',
    SlideItemStory:
      '자연석에 바라는 모든 것, 더 튼튼하게, 더 아름답게, 더 안전하게',
    SceneClassName: 'mainCotentScene01',
    SceneImg: './images/mc_1.jpeg',
    SceneDiscriptTitle: '건축용 스톤이라면',
    SceneDiscriptText:
      '외부 환경에 강해야 한다. 외벽부터 실내까지 연출이 다양해야한다. 라돈 걱정 없이 안전해야 한다.',
    SceneItemStory:
      '자연석에 바라는 모든 것, 더 튼튼하게, 더 아름답게, 더 안전하게',
  },
  {
    id: 2,
    SlideClassName: 'mainContetnSlide02',
    SlideDiscriptTitle: '건축용 스톤이라면',
    SlideDiscriptText:
      '외부 환경에 강해야 한다. 외벽부터 실내까지 연출이 다양해야한다. 라돈 걱정 없이 안전해야 한다.',
    SlideItemStory:
      '자연석에 바라는 모든 것, 더 튼튼하게, 더 아름답게, 더 안전하게',
    SceneClassName: 'mainCotentScene02',
    SceneImg: './images/mc_2.jpeg',
    SceneDiscriptTitle: '건축용 스톤이라면',
    SceneDiscriptText:
      '외부 환경에 강해야 한다. 외벽부터 실내까지 연출이 다양해야한다. 라돈 걱정 없이 안전해야 한다.',
    SceneItemStory:
      '자연석에 바라는 모든 것, 더 튼튼하게, 더 아름답게, 더 안전하게',
  },
  {
    id: 3,
    SlideClassName: 'mainContetnSlide03',
    SlideDiscriptTitle: '건축용 스톤이라면',
    SlideDiscriptText:
      '외부 환경에 강해야 한다. 외벽부터 실내까지 연출이 다양해야한다. 라돈 걱정 없이 안전해야 한다.',
    SlideItemStory:
      '자연석에 바라는 모든 것, 더 튼튼하게, 더 아름답게, 더 안전하게',
    SceneClassName: 'mainCotentScene03',
    SceneImg: './images/mc_3.jpeg',
    SceneDiscriptTitle: '건축용 스톤이라면',
    SceneDiscriptText:
      '외부 환경에 강해야 한다. 외벽부터 실내까지 연출이 다양해야한다. 라돈 걱정 없이 안전해야 한다.',
    SceneItemStory:
      '자연석에 바라는 모든 것, 더 튼튼하게, 더 아름답게, 더 안전하게',
  },
];

const PRODUCT_LIST_01 = [
  { id: 1, img: './images/p_1_1.jpeg', name: 'SPM 1103', type: 'MATT' },
  { id: 2, img: './images/p_1_2.jpeg', name: 'SPM 3055', type: 'MATT' },
  { id: 3, img: './images/p_1_3.jpeg', name: 'SPM 3056', type: 'MATT' },
  { id: 4, img: './images/p_1_1.jpeg', name: 'SPM 1103', type: 'MATT' },
];
