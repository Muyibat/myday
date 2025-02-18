import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ setUserName }) {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (name.trim()) {
      setUserName(name);
      navigate('/');
    } else {
      alert('Please enter your name!');
    }
  };


  return (
    <div className="login-container">
      <h1>Welcome to My Day App</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;

