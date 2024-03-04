import React from "react";
import * as Yup from "yup";

import { useState } from "react";



const PersonalInfo = () => {
  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profession: "",
    hobbies: [],
    dob: "",
  });

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Lastname is required"),

    email: Yup.string()
      .email("invalid mail format")
      .required("Please add your email"),
    password: Yup.string()
      .required("password is required")
      .min(8, "must be 8 charecter long")
      .matches(/[!@#$%^&*(),.?":{}|<>]/,'password must include spcial charecter')
      .matches(/[0-9]/,'password must contain least one number')
      .matches(/[A-Z]/,'password must contain least one capital latter')
      .matches(/[a-z]/,'password must contain least one lowercase latter'),

    confirmPassword : Yup.string().oneOf([Yup.ref('password')],"password must match").required('confirm password is required'),
    dob: Yup.date().required("Date of birth is required"),

  });

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
      await validationSchema.validate(formData,{abortEarly:false})
      console.log('form submitted successfully')
    } catch (errors) {
      const newError = {}
      errors.inner.forEach(error => newError[error.path] = error.message)
      setErrors(newError)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              id="firstName"
              className="form-input"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <div className="error">{errors.firstName}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              id="lastName"
              className="form-input"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-input"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="error">{errors.email}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="error">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              className="form-input"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <h5>Hobbies</h5>
            <div className="cbParentWrap">
              <div className="checkboxWrap">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="singing"
                  name="singing"
                  value={formData.hobbies}
                />
                <label htmlFor="singing">Singing</label>
              </div>
              <div className="checkboxWrap">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="coding"
                  name="coding"
                  value={formData.hobbies}
                />
                <label htmlFor="coding">Coding</label>
              </div>
              <div className="checkboxWrap">
                <input
                  type="checkbox"
                  className="checkbox"
                  id="walking"
                  name="walking"
                  value={formData.hobbies}
                />
                <label htmlFor="walking">Walking</label>
              </div>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">DOB</label>
            <input
              type="date"
              id="dob"
              className="form-input"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
          {errors.dob && <div className="error">{errors.dob}</div>}
        </div>
        <div className="form-row" >
          <div className="form-group" >
            <input
              style={{width:"calc(100% - 5px)",cursor:"pointer"}}
              type="submit"
              value="Submit Data"
              className="form-input"
              
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
