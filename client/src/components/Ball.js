import React, { useState, useRef, useEffect } from 'react';
import '../style.css';

export default function Ball(props) {
  const [isDragging, setIsDragging] = useState(false);
  const [isShaken, setIsShaken] = useState(false);
  const [randomNumber, setRandomNumber] = useState(null);
  const [answer, setAnswer] = useState(null);

  const dragRef = useRef(null);

  useEffect(() => {
    if (isShaken && randomNumber !== null) {
      if (props.isGlowing) {
        props.setIsGlowing(true);
      } else {
        props. setIsGlowing(false);
      }

      fetch(`/answers/${randomNumber}`)
        .then(response => response.json())
        .then(data => {
          setAnswer(data.answer);
        })
        .catch(error => {
          console.error('Error fetching answer:', error);
        });
    }
  }, [isShaken, randomNumber, props.isGlowing]);

  const handleDragStart = () => {
    if (!isShaken) {
      setIsDragging(true);
      dragRef.current = setInterval(generateRandomNumber, 50);
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    clearInterval(dragRef.current);
    setIsShaken(true);
  };

  const generateRandomNumber = () => {
    const generatedRandomNumber = Math.floor(Math.random() * 28) + 1;
    setRandomNumber(generatedRandomNumber);
  };

  const tryAgain = () => {
    props.setIsGlowing(false);
    setIsShaken(false);
    setAnswer(null);
    setRandomNumber(null);
  };

  return (
    <div className="ball-container">
      <div className={`ball ${isDragging ? 'shake' : ''}`}>
        {isShaken ? (
          <div>
            <img
              className={`imgBall ${props.isGlowing ? 'glow' : ''}`}
              id="ball"
              src="src/components/assets/shaken.png"
              draggable="true"
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              alt="Shaken Ball"
            />
            {answer && <p className="answer-text">{answer}</p>}
          </div>
        ) : (
          <img
            className={`imgBall ${props.isGlowing ? 'glow' : ''}`}
            id="ball"
            src="src/components/assets/notshaken.png"
            draggable="true"
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            alt="Not Shaken Ball"
          />
        )}
      </div>
      <h1></h1>
      <button
        className="button-noshake"
        onClick={tryAgain}
        style={{ backgroundColor: 'transparent', color: 'white', border: 'none', cursor: 'pointer', fontSize: '16px', fontWeight: 200, fontFamily: '"Helvetica Neue", Arial, sans-serif'}}
      >
        TRY AGAIN
      </button>
    </div>
  );
}
