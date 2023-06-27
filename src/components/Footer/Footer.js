import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="item">
          <p className="bottom-border-box">SJG 커뮤니케이션</p>
          <div>
            <p className="guide-text">
              제품, 서비스, 이벤트 등 다양한 소식을 받아 볼 수 있도록 이메일을
              구독해주세요.
            </p>
            <div className="input-box">
              <input type="checkbox" name="check1" />
              <label for="check1">본인은 14세 이상입니다.(필수)</label>
            </div>
            <div className="input-box">
              <input type="checkbox" name="check2" />
              <label for="check2">
                개인정보수집 및 이용에 동의합니다(필수)
              </label>
            </div>
            <p className="description">
              SJG는 SJG의 제품, 서비스 및 홍보 행사 관련 정보를 마케팅 목적으로,
              고객님이 동의하시고 해지하기 전까지, 고객님께 이메일로
              보내드립니다. 마케팅 목적의 개인정보 수집 및 이용에 동의하지
              않으셔도 되고, 그러한 경우, 마케팅 정보를 수령하실 수 없습니다.
            </p>
            <div className="input-box">
              <input type="checkbox" name="check3" />
              <label for="check3">마케팅 정보 수신에 동의합니다(필수)</label>
            </div>
            <div className="description">
              뉴스레터 이메일을 통한 광고성 정보 수신에 동의합니다.
            </div>
            <div className="email-input">
              <input
                type="text"
                placeholder="이메일주소"
                className="footer-input"
              />
              <button type="button" className="footer-Btn">
                ⇨
              </button>
            </div>
          </div>
        </div>
        <div className="item">
          <p className="bottom-border-box">주문 및 지원</p>
          <p className="guide-text">문의하기</p>
          <p className="guide-text">자주 묻는 질문</p>
          <p className="guide-text">배송</p>
          <p className="guide-text">반품</p>
          <p className="guide-text">배송 조회하기</p>
          <p className="guide-text">주문내역</p>
          <p className="guide-text">이용 약관</p>
        </div>
        <div className="item">
          <p className="bottom-border-box">서비스</p>
          <p className="guide-text">기업체 구매</p>
          <p className="guide-text">페이셜 이포인트먼트</p>
          <p className="guide-text">1:1 채팅 상담</p>
          <p className="guide-text">타일 체험 캠페인</p>
        </div>
        <div className="item">
          <p className="bottom-border-box">위치 기본 설정</p>
          <p className="guide-text">배송:</p>
          <p className="guide-text">대한민국</p>
          <p className="guide-text">언어:</p>
          <p className="guide-text">한국어</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
