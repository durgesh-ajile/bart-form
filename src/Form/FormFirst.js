import React, { useState } from "react";
import "./FormFirst.css";
import left from "../Image/left.gif";
import right from "../Image/right.gif";

const FormFirst = ({ onHandle1, formData, setCategory }) => {
  let transColor = "#ffffff1a";
  let txtcolor = "#fff";

  const [bgColor, setBgColor] = useState(transColor);
  const [bgRightColor, setRightBgColor] = useState(transColor);
  const [textColor, setTextColor] = useState(txtcolor);
  const [textRightColor, setTextRightColor] = useState(txtcolor);

  const handleClick = () => {
    let white = "#D3D3D3";
    let txtclrchnage = "#000"
    setBgColor(white);
    setTextColor(txtclrchnage)
    setRightBgColor(transColor);
    setTextRightColor(txtcolor);
    setCategory('team')
    setTimeout(() => {}, 2000);
  };

  const cardTwo = () => {
    let white = "#D3D3D3";
    let txtclrchnage = "#000"
    setRightBgColor(white);
    setTextRightColor(txtclrchnage);
    setBgColor(transColor);
    setTextColor(txtcolor);
    setCategory('individual')
    setTimeout(() => {}, 2000);
  }

  return (
    <div className="form1_container">
      <h6>Question 1</h6>
      <h3 style={{marginBottom:'20px'}}>Would you like to register as a team, or as an individual?</h3>
      <div className="img-gif">
        <div
          className="left gif-color"
          style={{ backgroundColor: bgColor }}
          onClick={handleClick}
        >
          <img src={left} alt="left" />
          <div className="name">
            <p style={{color: textColor}}>Team</p>
            <p className="bbbb">A</p>
          </div>
        </div>
        <div
          className="right gif-color"
          style={{ backgroundColor: bgRightColor }}
          onClick={cardTwo}
        >
          <img src={right} alt="right" />
          <div className="name">
            <p style={{color: textRightColor}}>Individual</p>
            <p className="bbbb">B</p>
          </div>
        </div>
      </div>
      <div className="sure-div">
      {textRightColor === '#000' ||  textColor === '#000' ? <button
          className="fill"
          onClick={onHandle1}
        >
          Next
       </button> : <button
          className="fill"
           disabled
        >
          Next
       </button>}
        
      </div>
    </div>
  );
};

export default FormFirst;