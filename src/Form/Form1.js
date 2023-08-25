// Form1.js
import React from 'react';
import "./Form1.css"

const Form1 = ({ onNext }) => {
  return (
    <div className='form1_container'>
      <label>Name</label>
      <input type='text'></input>
      <label>Age</label>
      <input type='text'></input>
      <label>Hobbies</label>
      <input type='text'></input>
      <label>Feedback</label>
      <input type='text'></input>
      <button onClick={onNext}>Next</button>
    </div>
  );
};

export default Form1;
