import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faList,
  faCalendar,
  faHourglassEnd,
  faStopwatch,
  faBell,
  faClock,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <h2>My Day</h2>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/todo-list"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Todo List
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendar"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Calendar
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/timer"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Timer
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/stopwatch"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Stopwatch
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alarm"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Alarm
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/time"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Time
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/logout"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <header className="sidebar-header">
        <h2>My Day</h2>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faHouse} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/todo-list"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faList} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/calendar"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faCalendar} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/logout"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </NavLink>
          </li>
        </ul>
      </header>
      <footer className="sidebar-footer">
        <ul>
          <li>
            <NavLink
              to="/timer"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faHourglassEnd} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stopwatch"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faStopwatch} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alarm"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faBell} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/time"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <FontAwesomeIcon icon={faClock} />
            </NavLink>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Sidebar;
