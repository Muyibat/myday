import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Sidebar from "./Sidebar";
import Home from "./Home";
import TodoList from "./TodoList";
import Calendar from "./Calendar";
import Timer from "./Timer";
import Stopwatch from "./Stopwatch";
import Alarm from "./Alarm";
import Time from "./Time";
import Logout from "./Logout";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("");

  return (
      <Router basename="/myday">
      <div className="app-container">
        {userName ? (
          <>
            <Sidebar />
            <div className="main-content">
              <Routes>
                <Route path="/" element={<Home userName={userName} />} />
                <Route
                  path="/todo-list"
                  element={<TodoList userName={userName} />}
                />
                <Route
                  path="/calendar"
                  element={<Calendar userName={userName} />}
                />
                <Route path="/timer" element={<Timer userName={userName} />} />
                <Route
                  path="/stopwatch"
                  element={<Stopwatch userName={userName} />}
                />
                <Route path="/alarm" element={<Alarm userName={userName} />} />
                <Route path="/time" element={<Time userName={userName} />} />
                <Route path="/logout" element={<Logout setUserName={setUserName} />} />

              </Routes>
            </div>
          </>
        ) : (
          <Routes>
            <Route path="/login" element={<Login setUserName={setUserName} />} />
            <Route path="/" element={<Login setUserName={setUserName} />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
