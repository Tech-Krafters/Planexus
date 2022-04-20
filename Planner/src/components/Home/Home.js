import React from 'react';
import './Home.css';
import Taipeipana from '../assets/Taipeipana.png';

function Home() {
  return (
    <div className='home'>
      <div className="container">
        <div className="row">
          <div className="column">
            <img className="trip" src={Taipeipana} alt="Taipei-pana" />
          </div>
          <div className="column">
            <div className="title">
              <h1>WELCOME TO PLANEXUS!</h1>
              {/* <h2>The Nxt Gen Of Collabrative Planning</h2> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default Home;