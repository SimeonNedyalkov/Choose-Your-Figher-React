import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const futureDate = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 10); // Future date for demo
    const diff = futureDate - now;

    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 5.9));

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="clock-container">
      <div className="time-box-container">
        <div className="label-box">Days</div>
        <div className="time-box">{time.days}</div>
      </div>
      <div className="time-box-container">
        <div className="label-box">Hours</div>
        <div className="time-box">{time.hours}</div>
      </div>
      <div className="time-box-container">
        <div className="label-box">Minutes</div>
        <div className="time-box">{time.minutes}</div>
      </div>
      <div className="time-box-container">
        <div className="label-box">Seconds</div>
        <div className="time-box">{time.seconds}</div>
      </div>
    </div>
  );
};

export default Clock;