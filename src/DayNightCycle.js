import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DayNightCycle = ({ darkMode, onModeToggle }) => {
  const [nightMode, setNightMode] = useState(darkMode);

  useEffect(() => {
    // Set the color based on the mode
    document.documentElement.style.setProperty(
      '--text-color',
      nightMode ? '#ffffff' : '#000000'
    );

    // Set the border based on the mode
    document.documentElement.style.setProperty(
      '--border-color',
      nightMode ? 'transparent' : '#000000'
    );

    // Set the footer color based on the mode
    document.documentElement.style.setProperty(
      '--footer-color',
      nightMode ? '#ffffff' : '#000000'
    );
  }, [nightMode]);

  const handleModeToggle = () => {
    setNightMode(!nightMode);
    onModeToggle();
  };

  return (
    <button className="mode-toggle" onClick={handleModeToggle}>
      {nightMode ? (
        <FontAwesomeIcon icon={faMoon} className="icon-moon" />
      ) : (
        <FontAwesomeIcon icon={faSun} className="icon-sun" />
      )}
    </button>
  );
};

export default DayNightCycle;
