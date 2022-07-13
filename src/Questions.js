import React, { useState } from 'react';

const Questions = ({question, answers}) => {
  
  const [show, setShow] = useState(false)
  
  return (
    <div>
      <div class="question">
        <h3>{question}</h3>
        <button onClick={() => setShow(!show)} class="btn">{show ? "-" : "+"}</button>
      </div>
      {show && <p>{answers}</p>}
    </div>
  )
}

export default Questions;