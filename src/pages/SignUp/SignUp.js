import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Component/Input/Input';
import CheckTextarea from '../../components/Component/CheckTextarea/CheckTextarea';
import Button from '../../components/Component/Button/Button';
import './SignUp.scss';

const INPUT_DATA_INDIVIDUAL = [
  {
    id: 1,
    name: 'name',
    className: 'inputValue',
    type: 'text',
    placeholder: '이름',
  },
  {
    id: 2,
    name: 'email',
    className: 'inputValue',
    type: 'text',
    placeholder: '이메일 주소',
  },
  {
    id: 3,
    name: 'pw',
    className: 'inputValue',
    type: 'password',
    placeholder: '비밀번호',
  },
];

const INPUT_DATA_BUSINESS = [
  {
    id: 1,
    name: 'name',
    className: 'inputValue',
    type: 'text',
    placeholder: '사업자명',
  },
  {
    id: 2,
    name: 'num',
    className: 'inputValue',
    type: 'text',
    placeholder: '사업자번호',
  },
  {
    id: 3,
    name: 'email',
    className: 'inputValue',
    type: 'text',
    placeholder: '이메일 주소',
  },
  {
    id: 4,
    name: 'pw',
    className: 'inputValue',
    type: 'password',
    placeholder: '비밀번호',
  },
];

const BLACK_BTN = {
  className: 'blackBtn',
  btnText: '회원가입',
};

const SignUp = () => {
  const [signUp, setSignUp] = useState(null);
  const [signUpBtn, setSignUpBtn] = useState(false);

  const handleButtonClick = buttonName => {
    setSignUp(buttonName);
    setSignUpBtn(true);
  };

  const renderLayout = () => {
    if (signUp === '개인 회원가입') {
      return (
        <div className="container individual">
          <h1>개인 회원가입</h1>
          <div className="form">
            <div className="userInfo">
              {INPUT_DATA_INDIVIDUAL.map(info => (
                <Input
                  key={info.id}
                  className={info.className}
                  name={info.name}
                  type={info.type}
                  placeholder={info.placeholder}
                />
              ))}
            </div>
            <div className="inputBox">
              <input type="checkbox" name="check1" />
              <label htmlFor="check1">본인은 14세 이상입니다.(필수)</label>
            </div>
            {TERMS.map(info => (
              <CheckTextarea
                key={info.id}
                inputBoxClassName={info.inputBoxClassName}
                inputType={info.inputType}
                inputName={info.inputName}
                labelText={info.labelText}
                textareaClassName={info.textareaClassName}
                textareaName={info.textareaName}
                defaultValue={info.defaultValue}
              />
            ))}
            <Button
              className={BLACK_BTN.className}
              btnText={BLACK_BTN.btnText}
            />
            <span>
              <Link to="/">이미 SJG 계정을 가지고 계십니까?</Link>
            </span>
          </div>
        </div>
      );
    } else if (signUp === '사업자 회원가입') {
      return (
        <div className="container business">
          <h1>사업자 회원가입</h1>
          <div className="form">
            <div className="userInfo">
              {INPUT_DATA_BUSINESS.map(info => (
                <Input
                  className={info.className}
                  key={info.id}
                  name={info.name}
                  type={info.type}
                  placeholder={info.placeholder}
                />
              ))}
            </div>
            {TERMS.map(info => (
              <CheckTextarea
                key={info.id}
                inputBoxClassName={info.inputBoxClassName}
                inputType={info.inputType}
                inputName={info.inputName}
                labelText={info.labelText}
                textareaClassName={info.textareaClassName}
                textareaName={info.textareaName}
                defaultValue={info.defaultValue}
              />
            ))}
            <Button
              className={BLACK_BTN.className}
              btnText={BLACK_BTN.btnText}
            />
            <span>
              <Link to="/">이미 SJG 계정을 가지고 계십니까?</Link>
            </span>
          </div>
        </div>
      );
    }
  };
  return (
    <div className="signUp">
      <div
        className="accountSelect"
        style={{ display: signUpBtn ? 'none' : 'block' }}
      >
        <div className="accountSelectContainer">
          <button
            className="blackBtn"
            onClick={() => handleButtonClick('개인 회원가입')}
          >
            개인 회원가입
          </button>
          <span>|</span>
          <button
            className="blackBtn"
            onClick={() => handleButtonClick('사업자 회원가입')}
          >
            사업자 회원가입
          </button>
        </div>
      </div>
      {renderLayout()}
    </div>
  );
};

export default SignUp;

const TERMS = [
  {
    id: 1,
    inputBoxClassName: 'inputBox',
    inputType: 'checkbox',
    inputName: 'check2',
    labelText: '이용 약관에 동의합니다 (필수)',
    textareaClassName: 'descritextareation',
    textareaName: 'description',
    defaultValue:
      "SJG 온라인 몰 서비스 이용약관 SJG 온라인(이하'본 사이트')에방문해주신 고객님께 감사드립니다. 이 약관은 SJG가 운영하는 사이트에서 제공하는 인터넷 관련 서비스를 이용함에 있어 온라인 쇼핑몰과 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다. SJG는 아래의 약관, 개인정보처리방침 및 고객 서비스와 특정 기능, 게시물 또는 홍보와 관련하여 본 사이트 전체에서 제시하는 여타 조건과 정책에 따라, 이용자에게 본 사이트상 컨텐츠와 서비스를 제공합니다. 회원가입을 하시면 온라인 쇼핑 서비스와 함께 SJG의 소식을 확인하실 수 있습니다.",
  },
  {
    id: 2,
    inputBoxClassName: 'inputBox',
    inputType: 'checkbox',
    inputName: 'check3',
    labelText: ' 개인정보수집 및 이용에 동의합니다(필수)',
    textareaClassName: 'descritextareation',
    textareaName: 'description',
    defaultValue:
      '개인정보수집항목: a) 성명, 이메일 주소, 전화번호, 주소, 기타 귀하가 당사 웹사이트에서 구매 시 알려주신 개인정보; b) 결제 정보 및 구매 정보; c) 구매 내역, 서비스 이용 기록 및 웹사이트 활동 내역 (예: 홈페이지에서 최근 본 내용 추적), 고객 클레임 및 분쟁 해결에 관한 정보.',
  },
  {
    id: 3,
    inputBoxClassName: 'inputBox',
    inputType: 'checkbox',
    inputName: 'check4',
    labelText: '마케팅 정보 수신에 동의합니다 (선택)',
    textareaClassName: 'descritextareation',
    textareaName: 'description',
    defaultValue:
      'SJG는 SJG의 제품, 서비스 및 홍보 행사 관련 정보를 마케팅 목적으로, 고객님이 동의하시고 해지하기 전까지, 고객님께 이메일로 보내드립니다. 마케팅 목적의 개인정보 수집 및 이용에 동의하지 않으셔도 되고, 그러한 경우, 마케팅 정보를 수령하실 수 없습니다.',
  },
];
