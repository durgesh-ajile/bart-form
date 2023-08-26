// Form1.js
import React from 'react';
import "./FormLast.css"


const FormLast = ({ onHandle2 }) => {
  return (
    <div className='form1_container' id='form-last'>
      <h6>Question 3</h6>
      <h3>We will be sending some exclusive goodies & gifts your way!
How do we reach you?</h3>
      <div className="form-div">
        
      </div>
      <div className='sure-div'>
        <button className='fill' onClick={onHandle2}>Submit
        </button>
      </div>
    </div>
  );
};

export default FormLast;
