import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../components/Component/Input/Input';
import CheckTextarea from '../../../components/Component/CheckTextarea/CheckTextarea';
import Button from '../../../components/Component/Button/Button';

const SignUpContainer = props => {
  const signUpPost = () => {
    const typeName = {
      individual: 1,
      business: 2,
    };

    const typeId =
      signUp === '개인 회원가입' ? typeName.individual : typeName.business;

    fetch('http://52.79.239.240:8080/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        typeId: typeId,
        name: inputValues.name,
        email: inputValues.email,
        password: inputValues.password,
        account: inputValues.account,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('네트워크 오류 또는 서버 오류가 발생했습니다.');
      })
      .then(data => {
        if (data && data.message === 'SIGNUP_SUCCESS') {
          alert('환영합니다! 1000만 포인트가 적립되었습니다 :)');
          navigate('/');
        } else if (data && data.message === 'INVALID_USER_REQUEST') {
          alert('입력한 정보를 다시 확인해 주세요.');
        }
      })
      .catch(error => {
        alert('오류가 발생했습니다: ' + error.message);
      });
  };

  const [inputValues, setInputValues] = useState({
    account: '',
    name: '',
    email: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleInputValue = e => {
    const { name, value } = e.target;
    setInputValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const { signUp, inputDataIndividual, inputDataBusiness, terms, blackBtn } =
    props;

  const handleInput = signUp => {
    if (signUp === '개인 회원가입') {
      return inputDataIndividual;
    } else {
      return inputDataBusiness;
    }
  };
  return (
    <div className="container individual">
      <h1>{signUp}</h1>
      <div className="form">
        <div className="userInfo">
          {handleInput(signUp).map(info => (
            <Input
              key={info.id}
              className={info.className}
              name={info.name}
              type={info.type}
              placeholder={info.placeholder}
              value={inputValues[info.name]}
              handleInputValue={handleInputValue}
            />
          ))}
        </div>
        {signUp === '개인 회원가입' && (
          <div className="inputBox">
            <input type="checkbox" name="check1" />
            <label htmlFor="check1">본인은 14세 이상입니다.(필수)</label>
          </div>
        )}
        {terms.map(info => (
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
          className={blackBtn.className}
          btnText={blackBtn.btnText}
          signUpPost={signUpPost}
        />
        <span>
          <Link to="/users/login">이미 SJG 계정을 가지고 계십니까?</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpContainer;
