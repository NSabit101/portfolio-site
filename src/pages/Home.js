import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Welcome to My Portfolio</h1>
      <p>Mission: Creating meaningful digital experiences through design and development.</p>
      <Link to="/about"><button>Learn More</button></Link>
    </div>
  );
}

export default Home;
