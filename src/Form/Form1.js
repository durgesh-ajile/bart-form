// Form1.js
import React from 'react';
import "./Form1.css"
// import { IoIosArrowForward } from 'react-icons/io';


const Form1 = ({ onHandle2, category }) => {
  return (
    <>
    {category === 'team' ? 
       <div className='form1_container'>
      <h6>Question 2</h6>
      <h3>Team Registration</h3>
      <h4>Please fill in the following questions to your best knowledge to complete the registration.</h4>
      <div className='sure-div'>
        <button className='fill' onClick={onHandle2}>SURE
        </button>
      </div>
    </div> :
    <div className='form1_container'>
      <h6>Question 2</h6>
      <h3>Individual Registration HackerFlow  </h3>
      <h4>Please fill in the following questions to your best knowledge to complete the registration.</h4>
      <div className='sure-div'>
        <button className='fill' onClick={onHandle2}>SURE
        </button>
      </div>
    </div>
    }
    </>
  );
};

export default Form1;
