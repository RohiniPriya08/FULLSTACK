import React, { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    // Required Name Validation
    if (!name) formErrors.name = "Name is required";

    // Email Regex Validation
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Invalid email format";
    }

    // Phone Regex Validation
    if (!phone) {
      formErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      formErrors.phone = "Phone must be 10 digits";
    }

    // Password Length Validation
    if (!password) {
      formErrors.password = "Password is required";
    } else if (password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    // Compare Validation
    if (!confirmPass) {
      formErrors.confirmPass = "Confirm Password is required";
    } else if (confirmPass !== password) {
      formErrors.confirmPass = "Passwords do not match";
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log({ name, email, phone, password });
    }
  };

  /* ================= INLINE STYLES ================= */
  const containerStyle = {
    width: "350px",
    margin: "80px auto",
    padding: "25px",
    borderRadius: "12px",
    backgroundColor: "#ffffff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
    fontFamily: "Segoe UI, sans-serif"
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333"
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px"
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginBottom: "10px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#667eea",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px"
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Validation Form</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <input
          type="text"
          placeholder="Enter Name"
          style={inputStyle}
          onChange={(e) => setName(e.target.value)}
        />
        <p style={errorStyle}>{errors.name}</p>

        {/* Email */}
        <input
          type="text"
          placeholder="Enter Email"
          style={inputStyle}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p style={errorStyle}>{errors.email}</p>

        {/* Phone */}
        <input
          type="text"
          placeholder="Enter Phone (10 digits)"
          style={inputStyle}
          onChange={(e) => setPhone(e.target.value)}
        />
        <p style={errorStyle}>{errors.phone}</p>

        {/* Password */}
        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyle}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p style={errorStyle}>{errors.password}</p>

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm Password"
          style={inputStyle}
          onChange={(e) => setConfirmPass(e.target.value)}
        />
        <p style={errorStyle}>{errors.confirmPass}</p>

        <button type="submit" style={buttonStyle}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
