import React from 'react'
import helloGif from "../Image/output-onlinegiftools.gif"
import "./Form3.css"

const Form3 = ({onHandle4, formData}) => {
  
  return (
    <div >
      <h2 className='heading-one'>Hello, {formData.formData2.name}</h2>
      <div>
        <img className='image-setting' src={helloGif}></img>
      </div>
      <h2 className='heading-one'>Welcome ! to Bart-flow</h2>
      <div className="sure-div">
        <button
          className="fill"
          onClick={onHandle4}
        >
          Next
          {/* <span><IoIosArrowForward/></span> */}
        </button>
      </div>
    </div>
  )
}

export default Form3
