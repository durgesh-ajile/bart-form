// Form2.js
import React from 'react';
import "./Form2.css"

const Form2 = ({ onPrevious }) => {
  return (
    <div className='form2_container'>
      <label>testing1</label>
      <input type='text'></input>
      <label>testing2</label>
      <input type='text'></input>
      <label>testing3</label>
      <input type='text'></input>
      <label>testing4</label>
      <input type='text'></input>
      <button onClick={onPrevious}>Previous</button>
    </div>
  );
};

export default Form2;
