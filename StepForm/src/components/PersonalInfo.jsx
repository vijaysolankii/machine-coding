import React from "react";
import { useState } from "react";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword : "",
    profession: "",
    hobbies : [],
    dob : "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const {name, result} = e.target;
    setFormData({
        [name]: result
    })
  };

  return (
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <div className="form-input">
              <label htmlFor="firstName">FirstName</label>
              <input type="text" id="firstName" className="form-input" name="firstName" value={formData.firstName} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="form-input">
              <label htmlFor="lastName">LastName</label>
              <input type="text" id="lastName" className="form-input" name="lastName" value={formData.lastName} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" className="form-input" name="email" value={formData.email} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <div className="form-input">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" className="form-input" name="password" value={formData.password} onChange={handleChange} />
            </div>
          </div>
          <div className="form-group">
            <div className="form-input">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input className="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <h5>Hobbies</h5>
            <div className="form-input">
              <label htmlFor="singing">Singing</label>
              <input className="checkbox" id="singing" name="singing" value={formData.hobbies}  />
            </div>
            <div className="form-input">
              <label htmlFor="coding">Coding</label>
              <input className="checkbox" id="coding" name="coding" value={formData.hobbies}  />
            </div>
            <div className="form-input">
              <label htmlFor="walking">Walking</label>
              <input className="checkbox" id="walking" name="walking" value={formData.hobbies}  />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <div className="form-input">
              <label htmlFor="dob">DOB</label>
              <input type="date" id="dob" className="form-input" name="dob" value={formData.dob} onChange={handleChange} />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
