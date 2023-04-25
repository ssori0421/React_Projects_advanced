import React, { useState, useEffect, useRef } from 'react';
import { regex } from '../util/regex';
import styled from 'styled-components';

const SignUp = () => {
  const [formState, setFormState] = useState({
    id: { value: '', isValid: false },
    password: { value: '', isValid: false },
    passwordConfirm: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    id: '',
    password: '',
    passwordConfirm: '',
  });

  const idInputRef = useRef(null);

  useEffect(() => {
    idInputRef.current.focus();
  }, []);

  console.log(formState);

  const onIdChange = (e) => {
    const { value } = e.target;
    const isValid = regex.id.test(value);
    setFormState({ ...formState, id: { value, isValid } });
  };
  const onPasswordChange = (e) => {
    const { value } = e.target;
    const isValid = regex.password.test(value);
    setFormState({ ...formState, password: { value, isValid } });
  };
  const onPasswordConfirmChange = (e) => {
    setFormState({ ...formState, passwordConfirm: e.target.value });
  };

  const onIdBlur = (e) => {
    const { value } = e.target;
    const isValid = regex.id.test(value);
    if (!isValid) {
      setErrorMessage({
        ...errorMessage,
        id: '5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.',
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        id: '',
      });
    }
  };
  const onPasswordBlur = (e) => {
    const { value } = e.target;
    const isValid = regex.password.test(value);
    if (!isValid) {
      setErrorMessage({
        ...errorMessage,
        password: '8~16자 영문 대 소문자, 숫자를 사용하세요.',
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        password: '',
      });
    }
  };
  const onPasswordConfirmBlur = (e) => {
    const { value } = e.target;
    if (value !== formState.password.value) {
      setErrorMessage({
        ...errorMessage,
        passwordConfirm: '비밀번호가 일치하지 않습니다.',
      });
    } else {
      setErrorMessage({
        ...errorMessage,
        passwordConfirm: '',
      });
    }
  };

  return (
    <div>
      <StInputForm>
        <p>아이디</p>
        <StInput
          ref={idInputRef}
          data-testid='id-input'
          onChange={onIdChange}
          onBlur={onIdBlur}
        />
        {errorMessage.id && <StErrorMessage>{errorMessage.id}</StErrorMessage>}
        <p>비밀번호</p>
        <StInput
          data-testid='password-input'
          onChange={onPasswordChange}
          onBlur={onPasswordBlur}
        />
        {errorMessage.id && (
          <StErrorMessage>{errorMessage.password}</StErrorMessage>
        )}
        <p>비밀번호 확인</p>
        <StInput
          data-testid='password-confirm-input'
          onChange={onPasswordConfirmChange}
          onBlur={onPasswordConfirmBlur}
        />
        <StErrorMessage>{errorMessage.passwordConfirm}</StErrorMessage>
        <StButton data-testid='signup-button'>가입하기</StButton>
      </StInputForm>
    </div>
  );
};

export default SignUp;

const StInputForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  gap: 10px;
`;

const StInput = styled.input`
  padding: 8px 15px;
  border: 1px solid lightgray;
`;

const StButton = styled.button`
  background-color: skyblue;
  color: white;
  height: 30px;
  border-radius: 8px;
`;

const StErrorMessage = styled.div`
  color: red;
`;
