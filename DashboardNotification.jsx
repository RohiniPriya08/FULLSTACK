import React, { useState } from "react";

function DashboardNotifications() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const message = prompt("Enter notification message:");

    if (!message) {
      alert("❌ Notification message cannot be empty");
      return;
    }

    setNotifications([...notifications, message]);
    alert("🔔 New notification added!");
  };

  return (
    <div style={{ margin: "40px" }}>
      <h2>Dashboard Notifications</h2>

      <button onClick={addNotification}>Add Notification</button>

      <ul style={{ marginTop: "20px" }}>
        {notifications.map((note, index) => (
          <li key={index}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default DashboardNotifications;
