"use client";
import { useState } from "react";
export const PatientForm = () => {
  const [patientData, setPatientData] = useState({
    fname: "",
    lname: "",
    mobilenumber: "",
    email: "",
    age: "",
    bloodgroup: "",
  });
  const onInputChange = (e: any) => {
    setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };
  const onSubmit = () => {
    console.log(patientData);
  };
  return (
    <div>
      <form>
        <label htmlFor="fname">First name:</label>

        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="First Name"
          onChange={onInputChange}
          required
        />
        <br />
        <label htmlFor="lname">Last name:</label>

        <input
          type="text"
          id="ltname"
          name="lname"
          placeholder="Last Name"
          onChange={onInputChange}
          required
        />
        <br />
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="fname"
          name="fname"
          placeholder="Mobile Number"
          onChange={onInputChange}
          required
        />
        <br />
        <label htmlFor="Age">Age:</label>
        <input
          type="number"
          id="Age"
          name="Age"
          placeholder="Age"
          required
          onChange={onInputChange}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={onInputChange}
          required
        />
        <br />
        <label htmlFor="BloodGrouop">Blood Group:</label>
        <input
          type="text"
          id="BloodGroup"
          name="BloodGroup"
          placeholder="Blood Group"
          required
          onChange={onInputChange}
        />
        <br />
      </form>
      <button onClick={onSubmit}>Submit </button>
    </div>
  );
};
