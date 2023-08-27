// Form2.js
import React, { useState } from "react";
import "./Form2.css";

const Form2 = ({ onHandle3, category }) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let formTwoData = {
      name: name
    }

    onHandle3(formTwoData)
  };
  return (
    category === "team" ? 
    <div className="form2_container">
      <h6>Question 2.1</h6>
      <h3>What would be your team name?</h3>
      <input
        className="form2-input"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="sure-div">
      {name ? 
        <button
          className="fill"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Next
        </button> :
        <button
         disabled
        >
          Next
        </button>
      }
      </div>
    </div> :
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
    {name ? 
      <button
        className="fill"
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Next
      </button> :
      <button
       disabled
      >
        Next
      </button>
    }
    </div>
  </div>
  );
};

export default Form2;
