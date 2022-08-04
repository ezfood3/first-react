import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [user, setUser] = useState({
    id: '',
    pw: '',
  });
  const { id, pw } = user;
  const onClick = (e) => {
    alert('id : ' + id + '\npw : ' + pw);
  };
  const onChange = (e) => {
    const newUser = {
      ...user,
      [e.target.name]: e.target.value,
    };
    setUser(newUser);
  };
  return (
    <div>
      <h1>회원가입 페이지 입니다.</h1>
      <div className="from-group">
        <input
          type="text"
          id="id"
          name="id"
          placeholder="아이디"
          onChange={onChange}
        />
      </div>
      <div className="from-group">
        <input
          type="password"
          id="pw"
          name="pw"
          placeholder="비밀번호"
          onChange={onChange}
        />
      </div>
      <div className="from-group">
        <input
          type="password"
          id="pwck"
          name="pwck"
          placeholder="비밀번호 체크"
          onChange={onChange}
        />
      </div>
      <button className="btn-primary" onClick={onClick}>
        회원가입
      </button>
    </div>
  );
};

export default Register;
