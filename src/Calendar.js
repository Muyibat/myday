import React, { useState } from "react";
import {
  format,
  addDays,
  isSameDay,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  isSameMonth,
  subMonths,
  addMonths,
} from "date-fns";

function Calendar({ userName }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedYear, setSelectedYear] = useState(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(currentDate.getMonth());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = addDays(monthEnd, 6 - monthEnd.getDay());

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const generateDays = () => {
    const days = [];
    let day = startDate;

    const handleDateClick = (day) => () => {
      setSelectedDate(day);
    };

    while (day <= endDate) {
      days.push(
        <div
          key={day}
          className={`calendar-day ${isSameMonth(day, monthStart) ? "" : "disabled"
            } 
          ${isSameDay(day, selectedDate) ? "selected" : ""}`}
          onClick={handleDateClick(day)}
        >
          {format(day, "d")}
        </div>
      );
      day = addDays(day, 1);
    }

    return days;
  };

  const generateWeeks = () => {
    const days = generateDays();
    const weeks = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(
        <div key={i} className="calendar-week">
          {days.slice(i, i + 7)}
        </div>
      );
    }
    return weeks;
  };

  const handleDateChange = () => {
    const newDate = new Date(selectedYear, selectedMonth, 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="calendar-container">
      <h1>{userName}'s Calendar</h1>
      <div className="picker-controls">
        <select
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
        >
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>

        <input
          type="number"
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value))}
          placeholder="Enter year"
        />

        <button onClick={handleDateChange}>Go</button>
      </div>

      <div className="navigation-and-display">
        <button onClick={() => setCurrentDate(subMonths(currentDate, 1))}>
          &lt;
        </button>
        <h2>{format(currentDate, "MMMM yyyy")}</h2>
        <button onClick={() => setCurrentDate(addMonths(currentDate, 1))}>
          &gt;
        </button>
      </div>
      <div className="calendar-days-header">
        {daysOfWeek.map((day) => (
          <div key={day} className="calendar-day-header">
            {day}
          </div>
        ))}
      </div>
      <div className="calendar-weeks">{generateWeeks()}</div>
    </div>
  );
}

export default Calendar;
