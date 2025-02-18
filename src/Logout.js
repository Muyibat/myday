import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ setUserName }) {
  const navigate = useNavigate();

  useEffect(() => {
    setUserName("");
    navigate("/login");
  }, [setUserName, navigate]);

  return <div>Logging you out...</div>;
}

export default Logout;


