import React from "react";

function HotelReservation() {

  const reserveRoom = () => {
    // Prompt dialogs for user input
    const name = prompt("Enter your name:");
    const hotelName = prompt("Enter hotel name:");
    const roomType = prompt("Enter room type (Single / Double / Deluxe):");
    const nights = prompt("Enter number of nights:");

    // Confirmation dialog
    const confirmation = window.confirm(
      `Please confirm your reservation details:

Name: ${name}
Hotel: ${hotelName}
Room Type: ${roomType}
Number of Nights: ${nights}`
    );

    // Alert result
    if (confirmation) {
      alert(`✅ Reservation Confirmed!\nEnjoy your stay, ${name} 🏨`);
    } else {
      alert("❌ Reservation Cancelled.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Hotel Reservation System</h2>
      <button onClick={reserveRoom}>Reserve Room</button>
    </div>
  );
}

export default HotelReservation;
