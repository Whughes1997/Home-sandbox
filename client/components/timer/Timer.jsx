import React, { useState } from 'react';
import Countdown, { formatTimeDelta } from 'react-countdown';
import './timer.css'
import img from "../../assets/playicon.png";

export default function Timer() {
  const [time, setTime] = useState(0);
  const handleTimeSet = (time) => {
    setTime(time * 60 * 1000)
  }
  return (
    <div className="container">
      <div className="times">
        <button onClick={() => handleTimeSet(15)}>15m</button>
        <button>10m</button>
        <button>5m</button>
      </div>
      <div className="playButton">
        <div>
          <img style={{ maxHeight: '450px' }} src={img} alt="play button" />
        </div>
        <div>
          <Countdown daysInHours date={Date.now() + time}>
            <div>we like meditation</div>
          </Countdown>
        </div>
      </div>
      <div className="daynight">
        <button>day</button>
        <button>night</button>
      </div>
    </div>
  );
}