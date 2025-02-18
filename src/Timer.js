import React, { useState, useEffect } from "react";

const Timer = ({ userName }) => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [message, setMessage] = useState("");

  const formatTime = (timeInSeconds) => {
    const hrs = Math.floor(timeInSeconds / 3600);
    const mins = Math.floor((timeInSeconds % 3600) / 60);
    const secs = timeInSeconds % 60;
    return `${hrs < 10 ? "0" : ""}${hrs} : ${mins < 10 ? "0" : ""}${mins} : ${secs < 10 ? "0" : ""}${secs}`;
  };

  useEffect(() => {
    let interval;
    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isRunning) {
      clearInterval(interval);
      setMessage("Time is up!");
    }
    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  const handleStart = () => {
    setTimeLeft(hours * 3600 + minutes * 60 + seconds);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(0);
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className="timer-container">
      <h1>{userName}'s Timer</h1>

      <div className="timer-inputs">
        <input
          type="number"
          value={hours}
          onChange={(e) => setHours(Math.min(23, Math.max(0, e.target.value)))}
          min="0"
          max="23"
          placeholder="HH"
        />

        <input
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(Math.min(59, Math.max(0, e.target.value)))}
          min="0"
          max="59"
          placeholder="MM"
        />

        <input
          type="number"
          value={seconds}
          onChange={(e) => setSeconds(Math.min(59, Math.max(0, e.target.value)))}
          min="0"
          max="59"
          placeholder="SS"
        />
      </div>

      <div className="timer-display">{formatTime(timeLeft)}</div>
      <div className="timer-buttons">

        <button
          onClick={handleStart}
          className="button"
          disabled={isRunning || (hours === 0 && minutes === 0 && seconds === 0)}
        >
          Start
        </button>
        <button onClick={handleStop} className="button" disabled={!isRunning}>
          Stop
        </button>
        <button onClick={handleReset} className="button">
          Reset
        </button>
      </div>
      <div className="timer-message">
        {message && <p>{message}</p>}
      </div>
    </div>
  );
};

export default Timer;

