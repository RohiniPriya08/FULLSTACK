import React, { useState } from "react";

function BlogWithComments() {
  const [comment, setComment] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const addComment = () => {
    if (!comment) {
      alert("❌ Comment cannot be empty");
      return;
    }

    setCommentsList([...commentsList, comment]);
    setComment("");
  };

  return (
    <div style={{ maxWidth: "800px", margin: "auto", padding: "20px" }}>
      
      {/* Blog Content */}
      <h1>My Blog Post</h1>
      <p>
        This is a simple responsive blog layout created using React.js.
        Users can add comments and see them updated instantly.
      </p>

      <hr />

      {/* Comment Section */}
      <h3>Comments</h3>

      <textarea
        rows="3"
        style={{ width: "100%" }}
        placeholder="Write a comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <br /><br />

      <button onClick={addComment}>Post Comment</button>

      <ul style={{ marginTop: "20px" }}>
        {commentsList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogWithComments;
