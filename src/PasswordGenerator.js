import React, { useState } from 'react';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChar, setIncludeSpecialChar] = useState(true);
  const [length, setLength] = useState(8); // Default password length

  const generatePassword = () => {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()-_+=';

    let passwordChars = '';
    if (includeLowercase) {
      passwordChars += lowercaseChars;
    }
    if (includeUppercase) {
      passwordChars += uppercaseChars;
    }
    if (includeNumbers) {
      passwordChars += numbers;
    }
    if (includeSpecialChar) {
      passwordChars += specialChars;
    }

    if (!passwordChars) {
      setPassword('Please select at least one character type.');
      return;
    }

    let newPassword = '';
    // Ensure at least one character from each selected character set
    if (includeLowercase) {
      const randomLowercaseChar = lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)];
      newPassword += randomLowercaseChar;
    }
    if (includeUppercase) {
      const randomUppercaseChar = uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)];
      newPassword += randomUppercaseChar;
    }
    if (includeNumbers) {
      const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
      newPassword += randomNumber;
    }
    if (includeSpecialChar) {
      const randomSpecialChar = specialChars[Math.floor(Math.random() * specialChars.length)];
      newPassword += randomSpecialChar;
    }

    // Add remaining characters based on password length
    while (newPassword.length < length) {
      const randomIndex = Math.floor(Math.random() * passwordChars.length);
      newPassword += passwordChars[randomIndex];
    }

    
    setPassword(newPassword);
  };

  return (
    <div>
      <h1>Password Generator</h1>
      <div>
        <label>
          Include Lowercase:
          <input
            type="checkbox"
            checked={includeLowercase}
            onChange={(e) => setIncludeLowercase(e.target.checked)}
          />
        </label>
        <label>
          Include Uppercase:
          <input
            type="checkbox"
            checked={includeUppercase}
            onChange={(e) => setIncludeUppercase(e.target.checked)}
          />
        </label>
        <label>
          Include Numbers:
          <input
            type="checkbox"
            checked={includeNumbers}
            onChange={(e) => setIncludeNumbers(e.target.checked)}
          />
        </label>
        <label>
          Include Special Characters:
          <input
            type="checkbox"
            checked={includeSpecialChar}
            onChange={(e) => setIncludeSpecialChar(e.target.checked)}
          />
        </label>
      </div>
      <div>
        <label>
          Password Length:
          <input
            type="number"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button onClick={generatePassword}>Generate Password</button>
      <div>Password: {password}</div>
    </div>
  );
};

export default PasswordGenerator;
