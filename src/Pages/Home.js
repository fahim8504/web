import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to College Chat</h1>
      <Link to="/college">Select College</Link>
    </div>
  );
}

export default Home;
