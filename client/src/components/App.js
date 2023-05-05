import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import GameContainer from './GameContainer.js';
import Header from './Header.js';
import '../style.css';

export default function App(props) {
  const [state, setState] = useState({ displayAnswer: false, randomNumber: 1 });

  const displayMyAnswer = () => {
    setState({ ...state, displayAnswer: !state.displayAnswer });
  };

  return (
    <div className="app">
      <Header/>
      <GameContainer isDisplayed={state.displayAnswer} displayMyAnswer={displayMyAnswer} />
    </div>
  );
}
