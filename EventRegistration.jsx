import React from "react";

function EventRegistration() {

  const registerEvent = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter your name:");
    const eventName = prompt("Enter event name:");
    const email = prompt("Enter your email address:");
    const participants = prompt("Enter number of participants:");

    // Confirmation alert
    const confirmation = window.confirm(
      `Please confirm your registration details:

Name: ${name}
Event: ${eventName}
Email: ${email}
Participants: ${participants}`
    );

    // Final alert
    if (confirmation) {
      alert(`✅ Registration Successful!\nYou are registered for ${eventName} 🎉`);
    } else {
      alert("❌ Registration Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Event Registration System</h2>
      <button onClick={registerEvent}>Register for Event</button>
    </div>
  );
}

export default EventRegistration;
