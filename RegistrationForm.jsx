import React, { useState } from "react";
import "./StudentRegistration.css"; // Import CSS file

const StudentRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    course: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Student Registered Successfully!");

    setFormData({
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      course: "",
    });
  };

  return (
    <div className="container">
      <h1>Student Registration Form</h1>

      <form className="form-table" onSubmit={handleSubmit}>
        
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
        />

        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
        />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Course:</label>
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">Select Course</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="Computer Science">Computer Science</option>
          <option value="English">English</option>
        </select>

        <button type="submit" className="btn">Register</button>
      </form>

      {message && <p className="msg">{message}</p>}
    </div>
  );
};

export default StudentRegistrationForm;
