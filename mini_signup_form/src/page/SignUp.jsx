import React, { useState, useEffect, useRef } from 'react';
import { regex } from '../util/regex';

const SignUp = () => {
  const [formState, setFormState] = useState({
    email: { value: '', isValid: false },
    password: { value: '', isValid: false },
    passwordConfirm: '',
  });
  const emailInputRef = useRef(null);

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  console.log(formState);

  const onEmailChange = (e) => {
    const { value } = e.target;
    const isValid = regex.email.test(value);
    setFormState({ ...formState, email: { value, isValid } });
  };
  const onPasswordChange = (e) => {
    const { value } = e.target;
    const isValid = regex.password.test(value);
    setFormState({ ...formState, password: { value, isValid } });
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
