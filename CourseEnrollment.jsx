import React, { useState } from "react";

const CourseEnrollment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    mode: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment Successful 🎉");
    console.log("Enrollment Data:", formData);
    setFormData({
      name: "",
      email: "",
      course: "",
      mode: "",
    });
  };

  const containerStyle = {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const formStyle = {
    background: "rgba(255, 255, 255, 0.92)",
    padding: "30px",
    width: "380px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    marginBottom: "15px",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Course Enrollment
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Select Course</option>
          <option value="React">React Development</option>
          <option value="Java">Java Programming</option>
          <option value="Python">Python Programming</option>
          <option value="Web">Full Stack Web Development</option>
        </select>

        <select
          name="mode"
          value={formData.mode}
          onChange={handleChange}
          style={inputStyle}
          required
        >
          <option value="">Mode of Learning</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>

        <button type="submit" style={buttonStyle}>
          Enroll Now
        </button>
      </form>
    </div>
  );
};

export default CourseEnrollment;
