import React, { useState } from 'react'

const Form4 = ({onHandle5, formData}) => {
    console.log()
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = {
            email: email
        }
        onHandle5(formData)
    }
    return (
      <form onSubmit={handleSubmit}>
        <div className="form2_container">
          <h6>Question 2.3</h6>
          <h3>What's the best email address to contact you, team {formData.formData2.mainName}?</h3>
          <input
            className="form2-input"
            required
            type='email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div className="sure-div">
            <button
              className="fill"
             type='submit'
            >
              Next
            </button>
          </div>
        </div>
        </form>
      );
}

export default Form4