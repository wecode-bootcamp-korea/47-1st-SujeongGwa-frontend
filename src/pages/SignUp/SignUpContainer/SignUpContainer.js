import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../../components/Component/Input/Input';
import CheckTextarea from '../../../components/Component/CheckTextarea/CheckTextarea';
import Button from '../../../components/Component/Button/Button';

const SignUpContainer = props => {
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
        <Button className={blackBtn.className} btnText={blackBtn.btnText} />
        <span>
          <Link to="/">이미 SJG 계정을 가지고 계십니까?</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpContainer;
