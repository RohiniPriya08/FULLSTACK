import React, { useState } from "react";

const AttendanceTracker = () => {
  // Sample student list
  const studentsList = [
    "Alice Johnson",
    "Bob Smith",
    "Charlie Brown",
    "Diana Prince",
    "Ethan Hunt",
  ];

  const [attendance, setAttendance] = useState(
    studentsList.reduce((acc, student) => {
      acc[student] = null; // null = not marked, true = present, false = absent
      return acc;
    }, {})
  );

  const handleMark = (student, status) => {
    setAttendance({ ...attendance, [student]: status });
  };

  const containerStyle = {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1596496050203-1732ef60e5a1')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "30px",
    width: "500px",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
  };

  const studentRowStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "15px",
    padding: "8px",
    borderRadius: "5px",
    backgroundColor: "#f5f5f5",
  };

  const buttonStyle = (isActive, color) => ({
    padding: "6px 12px",
    marginLeft: "5px",
    backgroundColor: isActive ? color : "#ccc",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  });

  const summaryStyle = {
    marginTop: "20px",
    fontWeight: "bold",
  };

  const totalPresent = Object.values(attendance).filter((v) => v === true)
    .length;
  const totalAbsent = Object.values(attendance).filter((v) => v === false)
    .length;

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Attendance Tracker 📝
        </h2>

        {studentsList.map((student) => (
          <div key={student} style={studentRowStyle}>
            <span>{student}</span>
            <div>
              <button
                style={buttonStyle(attendance[student] === true, "#28a745")}
                onClick={() => handleMark(student, true)}
              >
                Present
              </button>
              <button
                style={buttonStyle(attendance[student] === false, "#dc3545")}
                onClick={() => handleMark(student, false)}
              >
                Absent
              </button>
            </div>
          </div>
        ))}

        <div style={summaryStyle}>
          <p>Total Present: {totalPresent}</p>
          <p>Total Absent: {totalAbsent}</p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;
