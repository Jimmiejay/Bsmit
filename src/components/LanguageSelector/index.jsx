import React, { useState } from 'react'
import './style.css'

function LanguageSelector({ onLanguageChange }) {
    const [selectedLanguage, setSelectedLanguage] = useState('th');
  
    const handleChange = (event) => {
      const newLanguage = event.target.value;
      setSelectedLanguage(newLanguage);
      if (onLanguageChange) {
        onLanguageChange(newLanguage);
      }
    };
  
    return (
      <div className="language-selector">
        <select value={selectedLanguage} onChange={handleChange} className="language-select">
          <option value="th">TH</option>
          <option value="en">EN</option>
        </select>
      </div>
    );
  }

export default LanguageSelector;