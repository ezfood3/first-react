import React from 'react';

const Login = () => {
  return (
    <div>
      <h1>로그인 페이지 입니다.</h1>
      <input type="text" placeholder="아이디" />
      <br />
      <input type="text" placeholder="비밀번호" />
      <br />
      <a href="register">회원가입</a>
    </div>
  );
};

export default Login;
