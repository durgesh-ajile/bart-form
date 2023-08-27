import React, { useState } from 'react'
import helloGif from "../Image/output-onlinegiftools.gif"
import "./Form3.css"

const Form3 = ({onHandle4, formData, category}) => {
    const [member, setMember] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let formTwoData = {
          totalMember: member
        }
    
        onHandle4(formTwoData)
      };
  return (
category === 'team' ?
    <div className='form1_container' id = 'form3-main'>
          <h6>Question 2.2</h6>
          <h3>Welcome to HackerFlow!</h3>

      <div>
        <img className='image-setting' src={helloGif}></img>
      </div>
      <h3>Can we get the number of participants in {formData.formData2.mainName} ?</h3>
      <input
      type='number'
        className="form2-input"
        onChange={(e) => {
          setMember(e.target.value);
        }}
      />
      <div className="sure-div">
      {member ? 
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
    :
    <div className='form1_container' id = 'form3-main'>
    <h3>Hello, {formData.formData2.mainName}?</h3>

<div>
  <img className='image-setting' src={helloGif}></img>
</div>
<h3>Welcome to HackerFlow!</h3>

<div className="sure-div">
  <button
    className="fill"
    onClick={onHandle4}
  >
    Next
  </button>
</div>
</div>
  )
}

export default Form3
