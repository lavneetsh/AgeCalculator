import React, { useState } from 'react';
import './App.css';
const AgeCalculator = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [age, setAge] = useState(null);

  const handleInputChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);

    if (isNaN(birthDate)) {
      setAge(null);
      return;
    }

    let calculatedAge = today.getFullYear() - birthDate.getFullYear();

    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      calculatedAge--;
    }

    setAge(calculatedAge);
  };

  return (
    
    <div className="age-calculator">
      <h2>Age Calculator</h2>
      <div>
        <label htmlFor="date-of-birth">Date of Birth:</label>
        <input
          type="date"
          id="date-of-birth"
          value={dateOfBirth}
          onChange={handleInputChange}
        />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <p>Your age is {age} years.</p>}
    </div>
  );
};

export default AgeCalculator;
