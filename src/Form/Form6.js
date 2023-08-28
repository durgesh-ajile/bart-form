import axios from "axios";
import React, { useEffect } from "react";

const Form6 = ({ formData }) => {
  console.log(formData);
  let finalObj;
  useEffect(() => {
    let role = formData.formData2.category;
    if (role === "team") {
      finalObj = {
        role: role,
        TeamName: formData.formData2.mainName,
        NoOfTeamMembers: formData.formData3.totalMember,
        LeadName: formData.formData5.leadName,
        emailId: formData.formData4.email,
        address: formData.formData6.address,
        city: formData.formData6.city,
        phone: formData.formData6.phone,
        state: formData.formData6.state,
        postalCode: formData.formData6.postal,
      };
    } else {
      finalObj = {
        role: role,
        fullName: formData.formData2.mainName,
        email: formData.formData4.email,
        Designation: formData.formData5.designation,
        address: formData.formData6.address,
        city: formData.formData6.city,
        phone: formData.formData6.phone,
        state: formData.formData6.state,
        postalCode: formData.formData6.postal,
      };
    }
    axios({
      method: "post",
      url: "https://bartsurvey.onrender.com/api/fillsurveryform",
      data: finalObj,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="form1_container" id="thanks">
      <h3>Thank you for your time.</h3>
      <h4>
        Your registration has been successfully completed. We will reach out to
        you soon.
      </h4>
    </div>
  );
};

export default Form6;
