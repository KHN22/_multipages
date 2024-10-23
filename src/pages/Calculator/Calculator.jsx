import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === 'C') {
      setInput('');
      setResult('');
    } else if (value === '←') {
      setInput(input.slice(0, -1));
    } else if (value === '=') {
      try {
        // เพิ่มการรองรับเปอร์เซ็นต์, รากที่สอง และการยกกำลัง
        let evaluatedInput = input
          .replace('^', '**')  // แทนที่เครื่องหมายยกกำลัง
          .replace('%', '/100');  // เปลี่ยน % ให้เป็นการหารด้วย 100
        setResult(eval(evaluatedInput));  // คำนวณผลลัพธ์
      } catch {
        setResult('Error');
      }
    } else if (value === '√') {
      try {
        setResult(Math.sqrt(eval(input)));  // คำนวณรากที่สอง
      } catch {
        setResult('Error');
      }
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input || '0'}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        {['C', '←', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=', '√', '^'].map((button, index) => (
          <button
            key={index}
            className={`button ${button === '=' ? 'equals' : ''}`}
            onClick={() => handleClick(button)}
          >
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
