import React, { useState } from "react";

const RequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.request) {
      setMessage("Please fill all fields.");
      return;
    }

    // Example API call
    /*
    const response = await fetch("http://localhost:5000/api/request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    */

    setMessage("Request submitted successfully!");
    setFormData({ name: "", email: "", request: "" });
  };

  return (
    <div style={styles.container}>
      <h2>Submit Your Request</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
        />

        <textarea
          name="request"
          placeholder="Enter your request"
          rows="4"
          value={formData.request}
          onChange={handleChange}
          style={styles.textarea}
        ></textarea>

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>

      {message && <p style={styles.message}>{message}</p>}
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    width: "400px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fafafa",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    fontSize: "16px",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    background: "#742f41ff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  message: {
    marginTop: "15px",
    color: "green",
    fontWeight: "bold",
  },
};

export default RequestForm;
