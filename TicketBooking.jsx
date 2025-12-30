import React from "react";

function TicketBooking() {

  const bookTicket = () => {
    const name = prompt("Enter your name:");
    const source = prompt("Enter source city:");
    const destination = prompt("Enter destination city:");
    const seats = prompt("Enter number of seats:");

    const confirmation = window.confirm(
      `Confirm Booking Details:

Name: ${name}
From: ${source}
To: ${destination}
Seats: ${seats}`
    );

    if (confirmation) {
      alert("✅ Booking Successful!");
    } else {
      alert("❌ Booking Cancelled");
    }
  };

  return (
    <div>
      <h2>Flight Ticket Booking System</h2>
      <button onClick={bookTicket}>Book Ticket</button>
    </div>
  );
}

export default TicketBooking;


    
