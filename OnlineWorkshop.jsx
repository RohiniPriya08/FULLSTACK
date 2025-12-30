import React, { useState } from "react";

function WorkshopRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [workshop, setWorkshop] = useState("");
  const [mode, setMode] = useState("");

  return (
    <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
      
      {/* Registration Form */}
      <div>
        <h2>Online Workshop Registration</h2>

        <label>Name:</label><br />
        <input type="text" onChange={(e) => setName(e.target.value)} /><br /><br />

        <label>Email:</label><br />
        <input type="email" onChange={(e) => setEmail(e.target.value)} /><br /><br />

        <label>Workshop Topic:</label><br />
        <input type="text" onChange={(e) => setWorkshop(e.target.value)} /><br /><br />

        <label>Mode:</label><br />
        <select onChange={(e) => setMode(e.target.value)}>
          <option value="">Select</option>
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>
      </div>

      {/* Live Preview */}
      <div style={{ border: "1px solid gray", padding: "20px", width: "300px" }}>
        <h3>Live Preview</h3>
        <p><b>Name:</b> {name}</p>
        <p><b>Email:</b> {email}</p>
        <p><b>Workshop:</b> {workshop}</p>
        <p><b>Mode:</b> {mode}</p>
      </div>

    </div>
  );
}

export default WorkshopRegistration;
