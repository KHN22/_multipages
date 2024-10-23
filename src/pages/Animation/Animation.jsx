import React, { useState, useEffect } from 'react';
import './Animation.css'; // ใช้สำหรับใส่ CSS

const fieldWidth = 700;
const fieldHeight = 400;
const diameter = 100;

const maxLeft = fieldWidth - diameter - 2;
const maxTop = fieldHeight - diameter - 2;
const vx = 5;
const vy = 5;

const Animation = () => {
  const [running, setRunning] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [imageName, setImageName] = useState(''); // State for the ball image

  // ฟังก์ชันสลับการทำงานของปุ่ม RUN/PAUSE
  const toggleRunning = () => {
    setRunning(!running);
  };

  // ฟังก์ชันคำนวณตำแหน่งของลูกบอล
  const calculate = () => {
    let newX = x;
    let newY = y;
    let right = goRight;
    let down = goDown;

    if (right) {
      newX += vx;
      if (newX >= maxLeft) {
        right = false;
      }
    } else {
      newX -= vx;
      if (newX <= 0) {
        right = true;
      }
    }

    if (down) {
      newY += vy;
      if (newY >= maxTop) {
        down = false;
      }
    } else {
      newY -= vy;
      if (newY <= 0) {
        down = true;
      }
    }

    setX(newX);
    setY(newY);
    setGoRight(right);
    setGoDown(down);
  };

  // ใช้ useEffect สำหรับ animation loop
  useEffect(() => {
    if (running) {
      const interval = setInterval(() => {
        calculate();
      }, 25);

      return () => clearInterval(interval);
    }
  }, [running, x, y, goRight, goDown]);

  // Function to change the ball's image
  const changeImage = (image) => {
    setImageName(image);
  };

  return (
    <div id="container">
      <div
        id="field"
        style={{
          position: 'relative',
          width: `${fieldWidth}px`,
          height: `${fieldHeight}px`,
          border: '1px solid black',
          overflow: 'hidden',
        }}
      >
        <div
          id="ball"
          style={{
            position: 'absolute',
            width: `${diameter}px`,
            height: `${diameter}px`,
            borderRadius: '50%',
            backgroundColor: 'red',
            backgroundImage: `url(${imageName})`, // Set the ball's image
            backgroundSize: 'cover', // Ensure the image covers the ball
            left: `${x}px`,
            top: `${y}px`,
          }}
        ></div>
      </div>

      <div id="controlsContainer" style={{ display: 'flex', alignItems: 'center' }}>
        <button
          id="run"
          className={`btn ${running ? 'btn-warning' : 'btn-success'}`}
          onClick={toggleRunning}
        >
          {running ? (
            <span>
              <i className="bi bi-pause">&nbsp;PAUSE</i>
            </span>
          ) : (
            <span>
              <i className="bi bi-play">&nbsp;RUN</i>
            </span>
          )}
        </button>
        <div id="control">
          <button className="btn btn-primary" onClick={() => changeImage('src/pages/Animation/Basketball.png')}>BASKETBALL</button>
          <button className="btn btn-primary" onClick={() => changeImage('src/pages/Animation/Football.png')}>FOOTBALL</button>
          <button className="btn btn-primary" onClick={() => changeImage('src/pages/Animation/Volleyball.jpg')}>VOLLEYBALL</button>
          <button className="btn btn-primary" onClick={() => changeImage('src/pages/Animation/Human.jpg')}>HUMAN</button>
          <button className="btn btn-primary" onClick={() => changeImage('src/pages/Animation/Cartoon.avif')}>CARTOON</button>
          <button className="btn btn-primary" onClick={() => changeImage('src/pages/Animation/LOGO.jpg')}>LOGO</button>
        </div>
      </div>
    </div>
  );
};

export default Animation;
