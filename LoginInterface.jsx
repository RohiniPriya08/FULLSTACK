import React, { useState } from "react";

function RoleBasedLogin() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const handleLogin = () => {
    if (!username || !role) {
      alert("Please enter username and select a role");
      return;
    }

    if (role === "admin") {
      alert("Welcome Admin!");
      window.location.href = "/admin";
    } else if (role === "user") {
      alert("Welcome User!");
      window.location.href = "/user";
    } else {
      alert("Invalid Role");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "60px" }}>
      <h2>Login Page</h2>

      <input
        type="text"
        placeholder="Enter Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <br /><br />

      <select onChange={(e) => setRole(e.target.value)}>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
      <br /><br />

      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default RoleBasedLogin;
