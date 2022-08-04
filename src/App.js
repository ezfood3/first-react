import { Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import WritePage from './pages/WritePage';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
