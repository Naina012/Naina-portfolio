import React, { useState, useEffect } from 'react';

const DropdownButton = () => {
  const [selectedOption, setSelectedOption] = useState('#Home');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Use useEffect to close the dropdown when clicking outside of it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isDropdownOpen && !e.target.closest('.dropdown')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
    // Implement the action you want when an option is selected
    // In this case, I'm using a smooth scroll to the corresponding section
    const targetElement = document.querySelector(option);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        {selectedOption}
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content">
          <a href="#Home" onClick={() => handleOptionSelect('#Home')}>
            Home
          </a>
          <a href="#About" onClick={() => handleOptionSelect('#About')}>
            About
          </a>
          <a href="#Portfolio" onClick={() => handleOptionSelect('#Portfolio')}>
            Portfolio
          </a>
          <a href="#Education" onClick={() => handleOptionSelect('#Education')}>
            Education
          </a>
          <a href="#Experience" onClick={() => handleOptionSelect('#Experience')}>
            Experience
          </a>
          <a href="#Services" onClick={() => handleOptionSelect('#Services')}>
            Services
          </a>
          <a href="#Contact" onClick={() => handleOptionSelect('#Contact')}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
};

export default DropdownButton;
