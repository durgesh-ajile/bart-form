import React, { useState } from "react";

const Form5 = ({ onHandle6, formData }) => {
  const [selectedValue, setSelectedValue] = useState("");

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
