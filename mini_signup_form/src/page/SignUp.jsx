import React, { useState, useEffect, useRef } from 'react';

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
  };
  const onPasswordChange = (e) => {
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
