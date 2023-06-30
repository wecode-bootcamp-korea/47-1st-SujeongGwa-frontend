import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const SignUp = () => {
  return (
    <div className="login">
      <div className="container individual">
        <h1>로그인</h1>
        <div class="select">
          <div className="inputBox">
            <input type="checkbox" name="check1" />
            <label htmlFor="check1">개인</label>
          </div>
          <div className="inputBox">
            <input type="checkbox" name="check2" />
            <label htmlFor="check2">사업자</label>
          </div>
        </div>
        <div className="form">
          <div className="userInfo">
            <input type="text" placeholder="이메일 주소" />
            <input type="password" placeholder="비밀번호" />
          </div>
          <button>로그인</button>
          <span>
            <Link to="/users/signup">
              회원이 아니신가요? 여기를 클릭하여 회원이 되어주세요.
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
