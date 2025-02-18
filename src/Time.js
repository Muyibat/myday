import React, { useState, useEffect } from "react";

function Time({ userName }) {
  const [hours24, sethours24] = useState(true);
  const [time, setTime] = useState("");

  useEffect(() => {
    const getTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");

      if (!hours24) {
        const period = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return `${hours} : ${minutes} : ${seconds} ${period}`;
      }

      return `${String(hours).padStart(2, "0")} : ${minutes} : ${seconds}`;
    };

    setTime(getTime());

    const interval = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [hours24]);

  const handleClick = () => {
    sethours24(!hours24);
  };

  return (
    <div className="time-container">
      <h1>{userName}'s Time</h1>
      <p className="time-display">{time}</p>
      <button onClick={handleClick}>{hours24 ? "12-hour" : "24-hour"}</button>
    </div>
  );
}

export default Time;
