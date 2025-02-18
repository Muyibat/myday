import React, { useState, useEffect, useRef, useCallback } from "react";

const soundFiles = [
  { name: "Alarm 1", file: "alarm/casino-win-alarm.wav" },
  { name: "Alarm 2", file: "alarm/classic-alarm.wav" },
  { name: "Alarm 3", file: "alarm/facility-alarm.wav" },
  { name: "Alarm 4", file: "alarm/rooster-crowing.wav" },
  { name: "Alarm 5", file: "alarm/sci-fi-alarm.wav" },
];

function Alarm({ userName }) {
  const [currentTime, setCurrentTime] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [message, setMessage] = useState("");
  const [selectedSound, setSelectedSound] = useState(soundFiles[0].file);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startAlarm = useCallback(() => {
    if (!isPlaying) {
      if (!audioRef.current) {
        audioRef.current = new Audio(selectedSound);
        audioRef.current.loop = true;
        audioRef.current.play();
        setIsPlaying(true);
        setMessage("Alarm ringing! Click Stop to turn it off.");
      }
    }
  }, [isPlaying, selectedSound]);

  const stopAlarm = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
      setMessage("Alarm stopped.");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString("en-US", { hour12: false });
      setCurrentTime(now);

      if (now === alarmTime && !isPlaying) {
        startAlarm();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarmTime, isPlaying, startAlarm]);

  const setAlarm = () => {
    if (alarmTime) {
      setMessage(`Alarm set for ${alarmTime}`);
    } else {
      setMessage("Please set a valid alarm time.");
    }
  };

  return (
    <div className="alarm-container">
      <h1>{userName}'s Alarm Clock</h1>
      <p>Current Time: {currentTime}</p>

      <div className="alarm-inputs">
        <input
          type="time"
          onChange={(e) => setAlarmTime(e.target.value + ":00")}
        />

        <select onChange={(e) => setSelectedSound(e.target.value)}>
          {soundFiles.map((sound, index) => (
            <option key={index} value={sound.file}>
              {sound.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={setAlarm}>Set Alarm</button>
      {isPlaying && <button onClick={stopAlarm}>Stop Alarm</button>}

      <p>{message}</p>
    </div>
  );
}

export default Alarm;