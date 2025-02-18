import React, { useState, useRef } from "react";

function Stopwatch({ userName }) {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (!isRunning) {
      setIsRunning(true);
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setIsRunning(false);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (timeInMs) => {
    const hrs = Math.floor(timeInMs / 3600000);
    const mins = Math.floor((timeInMs % 3600000) / 60000);
    const secs = Math.floor((timeInMs % 60000) / 1000);
    const hundredths = Math.floor((timeInMs % 1000) / 10);

    return `${hrs.toString().padStart(2, "0")} : ${mins.toString()
      .padStart(2, "0")} : ${secs.toString().padStart(2, "0")} : ${hundredths
        .toString()
        .padStart(2, "0")}`;
  };

  return (
    <div className="stopwatch-container">
      <h1>{userName}'s Stopwatch</h1>
      <div className="stopwatch-display">{formatTime(time)}</div>
      <div className="stopwatch-buttons">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
