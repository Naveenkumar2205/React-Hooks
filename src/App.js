import { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  // Load dark mode state from localStorage
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  const [count, setCount] = useState(0);

  // Save dark mode state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <div className={`App ${darkMode ? "dark-mode" : ""}`}>
      <div className="header-container">
        <h1>Hello React</h1>

        {/* Dark Mode Toggle Switch with Icons */}
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
          />
          <span className="slider">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1164/1164954.png"
              alt="Sun"
              className="icon sun"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/731/731985.png"
              alt="Moon"
              className="icon moon"
            />
          </span>
        </label>
      </div>

      <h2>First React App</h2>

      {/* Buttons for increment & decrement */}
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Add</button>
        <button onClick={() => setCount(count - 1)}>Subtract</button>
      </div>

      {/* Input field showing count */}
      <input type="number" value={count} readOnly />
    </div>
  );
}
