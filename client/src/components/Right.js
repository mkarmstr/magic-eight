import React, { useState, useEffect } from 'react';

export default function Right(props) {
    const [showContents, setShowContents] = useState(false);
    const [answers, setAnswers] = useState([]);

    const handleClick = () => {
        setShowContents(!showContents);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          const userInput = event.target.value;
          event.target.value = '';
        //   console.log(JSON.stringify({userInput }));
          
          fetch('/answers', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ input: userInput }),
          })
            .then((response) => response.json())
            .then((data) => {
            //   console.log(data);
            })
            .catch((error) => {
              // Handle any errors
              console.error('Error:', error);
            });
        }
      };
      
   

    return (
        <div className="left">
            <div className={`left-panel ${showContents ? 'show' : ''}`}>
                <div className="left-text"></div>
                <button className="left-button" onClick={handleClick}>
                    ADD AN ANSWER
                </button>
            </div>
            {showContents && (
                <div className="left-content">
            <input type="text" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', color: 'white', border: 'none', padding: '5px' }} onKeyPress={handleKeyPress} />

                </div>
            )}
           
        </div>
    );
}

