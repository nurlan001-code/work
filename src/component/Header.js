import React from "react";

function Header({ darkMode, setDarkMode }) {
  return (
    <header className="header">
      <h1>🎬 Movie Quiz</h1>
      <div className="header-buttons">
        <button className="signin">Sign In</button>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "🌞 Light" : "🌙 Dark"}
        </button>
      </div>
    </header>
  );
}

export default Header;