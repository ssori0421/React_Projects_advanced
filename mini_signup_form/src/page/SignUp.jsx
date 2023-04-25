import React, { useState, useEffect, useRef } from 'react';
import { regex } from '../util/regex';

const SignUp = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  console.log(isValidEmail, isValidPassword);

  const onEmailChange = (e) => {
    const { value } = e.target;
    const isValid = regex.email.test(value);
    setIsValidEmail(isValid);
    setFormState({ ...formState, email: e.target.value });
  };
  const onPasswordChange = (e) => {
    const { value } = e.target;
    const isValid = regex.password.test(value);
    setIsValidPassword(isValid);
    console.log('password', regex.password.test(e.target.value));
    setFormState({ ...formState, password: e.target.value });
  };
  const onPasswordConfirmChange = (e) => {
    setFormState({ ...formState, passwordConfirm: e.target.value });
  };

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
