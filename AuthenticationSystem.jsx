import React, { useState } from "react";

function BasicAuth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const authenticate = () => {
    // Hardcoded credentials (simulation)
    const validUser = "admin";
    const validPass = "12345";

    if (!username || !password) {
      alert("❌ Please enter username and password");
      return;
    }

    if (username === validUser && password === validPass) {
      alert("✅ Login Successful! Welcome " + username);
    } else {
      alert("❌ Invalid username or password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Basic Authentication System</h2>

      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />

      <button onClick={authenticate}>Login</button>
    </div>
  );
}

export default BasicAuth;
