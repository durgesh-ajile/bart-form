// Form1.js
import React, { useState } from 'react';
import "./FormLast.css"


const FormLast = ({ onHandle7, formData }) => {
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [postal, setPostal] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(e);
        let formData = {
            address : address,
            phone : phone,
            city : city,
            state : state,
            postal : postal
        }
        onHandle7(formData)
    }

  return (
    <div className='form1_container' id='form-last'>
      <h6>Question 3</h6>
      <h3>We will be sending some exclusive goodies & gifts your way!
How do we reach you?</h3>
      <form onSubmit={handleSubmit}>
      <div className="form-div">
      <div className="left-form">
      <input
      required
      placeholder='Address*'
        className="form2-input"
        onChange={(e) => {
          setAddress(e.target.value);
        }}
        value={address}
      />
      <input
      required
      placeholder='City*'
        className="form2-input"
        onChange={(e) => {
          setCity(e.target.value);
        }}
        value={city}
      />
      <input
      required
      placeholder='Postal Code*'
        className="form2-input"
        onChange={(e) => {
          setPostal(e.target.value);
        }}
        value={postal}
      />
      </div>

      <div className="left-form">
      <input
      required
      placeholder='Phone*'
        className="form2-input"
        onChange={(e) => {
          setPhone(e.target.value);
        }}
        value={phone}
        type='number'
      />
      <input
      required
        className="form2-input"
        placeholder='State*'
        onChange={(e) => {
          setState(e.target.value);
        }}
        value={state}
      />
      </div></div>
      <div className='sure-div'>
        <button className='fill' type='submit' >Submit
        </button>
      </div>
      </form>
      
    </div>
  );
};

export default FormLast;
