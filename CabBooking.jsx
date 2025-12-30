import React from "react";

function CabBooking() {

  const bookCab = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter your name:");
    const pickup = prompt("Enter pickup location:");
    const drop = prompt("Enter drop location:");
    const cabType = prompt("Enter cab type (Mini / Sedan / SUV):");

    // Confirm booking
    const confirmation = window.confirm(
      `Please confirm your cab booking details:

Name: ${name}
Pickup Location: ${pickup}
Drop Location: ${drop}
Cab Type: ${cabType}`
    );

    // Alert result
    if (confirmation) {
      alert(`✅ Cab Booked Successfully!\nYour ${cabType} cab is on the way 🚖`);
    } else {
      alert("❌ Cab Booking Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Online Cab Booking Application</h2>
      <button onClick={bookCab}>Book Cab</button>
    </div>
  );
}

export default CabBooking;
