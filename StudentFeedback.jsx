import React, { useState } from "react";

function StudentFeedback() {
  const [rating, setRating] = useState("");
  const [comments, setComments] = useState("");

  const submitFeedback = () => {
    if (!rating || !comments) {
      alert("❌ Please provide both rating and comments");
      return;
    }

    alert(
      `✅ Feedback Submitted Successfully!\n\nRating: ${rating}\nComments: ${comments}`
    );

    // Clear fields after submission
    setRating("");
    setComments("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Student Feedback Form</h2>

      <label>Rating:</label><br />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value="">Select Rating</option>
        <option value="1">1 - Poor</option>
        <option value="2">2 - Fair</option>
        <option value="3">3 - Good</option>
        <option value="4">4 - Very Good</option>
        <option value="5">5 - Excellent</option>
      </select>

      <br /><br />

      <label>Comments:</label><br />
      <textarea
        rows="4"
        cols="30"
        placeholder="Enter your feedback..."
        value={comments}
        onChange={(e) => setComments(e.target.value)}
      />

      <br /><br />

      <button onClick={submitFeedback}>Submit Feedback</button>
    </div>
  );
}

export default StudentFeedback;
