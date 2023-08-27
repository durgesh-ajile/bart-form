import React, { useState } from "react";

const Form5 = ({ onHandle6, formData, category }) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [name, setName] = useState("");

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = {
      "he's a": selectedValue,
    };
    onHandle6(formData);
  };

  return (
    category === "team" ?
    <div className="form2_container">
      <h6>Question 2.4</h6>
      <h3>And, your name is?</h3>
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
    </div> </div>:
    <div className="form2_container">
    <h6>Question 2.3</h6>
    <h3>And, you're a?</h3>
    <select value={selectedValue} onChange={handleSelectChange}>
      <option value="Student">Student</option>
      <option value="Professional">Professional</option>
      <option value="Coding Enthusiast">Coding Enthusiast</option>
    </select>
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

export default Form5;
