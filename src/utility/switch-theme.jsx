import React, { useEffect, useState } from "react";

const SwitchTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className={`dark-mode btn-icon ${
        isDarkMode ? "is-dark" : ""
      } nav-icons nav-theme-btn`}
    >
      <i className={`fas ${isDarkMode ? "is-dark" : ""} fa-moon`} />
    </button>
  );
};

export { SwitchTheme };
