import React from 'react';

const SignUp = () => {
  return (
    <div>
      <input data-testid='email-input' />
      <input data-testid='password-input' />
      <input data-testid='password-confirm-input' />
      <button data-testid='signup-button'>회원가입</button>
    </div>
  );
};

export default SignUp;
