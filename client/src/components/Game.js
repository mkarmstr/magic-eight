import React, { useState } from 'react';
import Ball from './Ball.js';
import Question from './Question.js';

export default function Game(props) {
  const [isGlowing, setIsGlowing] = useState(false);

  return (
    <div className='game'>
      <Question setIsGlowing={setIsGlowing} />
      <Ball isGlowing={isGlowing} setIsGlowing={setIsGlowing} />
    </div>
  );
}
