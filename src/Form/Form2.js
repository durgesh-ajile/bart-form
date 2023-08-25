// Form2.js
import React from 'react';
import "./Form2.css"

const Form2 = ({ onPrevious }) => {
  return (
    <div className='form2_container'>
      <h6>Question 2.1</h6>
      <h3>Can we get your full name?</h3>
      <input className='form2-input'/>
      <div className='sure-div'>
        <button className='fill' onClick={onPrevious}>Next
        {/* <span><IoIosArrowForward/></span> */}
        </button>
      </div>
      </div>
  );
};

export default Form2;
