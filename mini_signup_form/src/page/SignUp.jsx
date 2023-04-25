import React, { useState, useEffect, useRef } from 'react';
import { regex } from '../util/regex';

const SignUp = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  const onEmailChange = (e) => {
    setFormState({ ...formState, email: e.target.value });
    console.log('email', regex.email.test(e.target.value));
  };
  const onPasswordChange = (e) => {
    console.log('password', regex.password.test(e.target.value));
    setFormState({ ...formState, password: e.target.value });
  };
  const onPasswordConfirmChange = (e) => {
    setFormState({ ...formState, passwordConfirm: e.target.value });
  };
  console.log(formState);

  return (
    <div>
      <input
        ref={emailInputRef}
        data-testid='email-input'
        onChange={onEmailChange}
      />
      <input data-testid='password-input' onChange={onPasswordChange} />
      <input
        data-testid='password-confirm-input'
        onChange={onPasswordConfirmChange}
      />
      <button data-testid='signup-button'>회원가입</button>
    </div>
  );
};

export default SignUp;
