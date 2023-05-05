import React, { useState, useEffect } from 'react';

export default function Left(props) {
    const [showContents, setShowContents] = useState(false);
    const [answers, setAnswers] = useState([]);

    const handleClick = () => {
        setShowContents(!showContents);
    };

    const fetchAnswers = () => {
        fetch('/answers')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setAnswers(data);
            })
            .catch(error => {
                console.log('Error fetching answers:', error);
            });
    };

    useEffect(() => {
        if (showContents) {
            fetchAnswers();
        }
    }, [showContents]);

    return (
        <div className="left">
            <div className={`left-panel ${showContents ? 'show' : ''}`}>
                <div className="left-text"></div>
                <button className="left-button" onClick={handleClick}>
                    VIEW ALL ANSWERS
                </button>
            </div>
            {showContents && (
                <div className="left-content">
                    {answers.map((answer, index) => (
                        <div className="answers" key={index}>{answer.answer}</div>
                    ))}

                </div>
            )}
           
        </div>
    );
}

