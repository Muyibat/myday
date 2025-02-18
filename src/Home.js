import React from 'react';

function Home({ userName }) {
  return (
    <div className="home-container">
      <h1>Hello {userName}!</h1>
      <h2> Welcome to My-Day App. I am here to help you manage your day.</h2>
    </div>
  );
}

export default Home;
