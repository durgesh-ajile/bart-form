// Form2.js
import React, { useState } from "react";
import "./Form2.css";

const Form2 = ({ onHandle3 }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formTwoData = {
      name: name
    }

    onHandle3(formTwoData)
  };

  return (
    <div className="form2_container">
      <h6>Question 2.1</h6>
      <h3>Can we get your full name?</h3>
      <input
        className="form2-input"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="sure-div">
        <button
          className="fill"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Next
          {/* <span><IoIosArrowForward/></span> */}
        </button>
      </div>
    </div>
  );
};

export default Form2;
