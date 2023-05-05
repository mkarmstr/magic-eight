import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game.js';
import Left from './Left.js';
import Right from './Right.js';

export default function GameContainer(props) {
    
  return (
    <div className='gamecontainer'>
      <Left/>
      <Game displayMyAnswer={props.displayMyAnswer} />
      <Right/>
    </div>
  );
}
