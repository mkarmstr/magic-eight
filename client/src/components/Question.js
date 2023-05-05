import React from 'react';

export default function Question(props) {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
        event.target.value = '';
      props.setIsGlowing(true);
    }
  };

  return (
    <div className='question' >
      <h4 style={{ fontWeight: '200', fontFamily: '"Helvetica Neue", Arial, sans-serif', marginRight: '10px', color: 'white' }}>ASK ME ANYTHING   </h4>
      <input type="text" style={{ backgroundColor: 'rgba(255, 255, 255, 0.3)', color: 'white', border: 'none', padding: '5px' }} onKeyPress={handleKeyPress} />
    </div>
  );
}
