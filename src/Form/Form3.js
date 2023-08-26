import React, { useState } from "react";
import "./Form3.css";
import left from "../Image/left.gif";
import right from "../Image/right.gif";

const Form3 = ({ onHandle4 }) => {
  let transColor = "#ffffff1a";
  let txtcolor = "#fff"

  const [bgColor, setBgColor] = useState(transColor);
  const [bgRightColor, setRightBgColor] = useState(transColor);
  const [textColor, setTextColor] = useState(txtcolor);
  const [textRightColor, setTextRightColor] = useState(txtcolor);

  const handleClick = () => {
    console.log("first")
    let white = "#D3D3D3";
    let txtclrchnage = "#000"
    setBgColor(white);
    setTextColor(txtclrchnage)
    setTimeout(() => {}, 2000);
  };

  const cardTwo = () => {
    console.log("second")
    let white = "#D3D3D3";
    let txtclrchnage = "#000"
    setRightBgColor(white);
    setTextRightColor(txtclrchnage)
    setTimeout(() => {}, 2000);
  }

  return (
    <div className="form1_container">
      <h6>Question 1</h6>
      <h4>Would you like to register as a team, or as an individual?</h4>
      <div className="img-gif">
        <div
          className="left gif-color"
          style={{ backgroundColor: bgColor }}
          onClick={handleClick}
        >
          <img src={left} alt="left" />
          <div className="name">
            <p style={{color: textColor}}>Team</p>
            <p className="aaaa">A</p>
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
      <div className="next-save">
        <h6 className="skip">SKIP</h6>
      </div>
    </div>
  );
};

export default Form3;
