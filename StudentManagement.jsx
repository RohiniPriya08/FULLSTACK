import React, { useState } from "react";

function StudentDashboard() {
  const [page, setPage] = useState("home");

  const students = [
    { id: 1, name: "Rohini", dept: "Computer Science", year: "III" },
    { id: 2, name: "Anu", dept: "Information Technology", year: "II" },
    { id: 3, name: "Priya", dept: "Computer Science", year: "I" }
  ];

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      {/* Sidebar Navigation */}
      <div
        style={{
          width: "220px",
          background: "#f2f2f2",
          padding: "20px"
        }}
      >
        <h3>Dashboard</h3>
        <button onClick={() => setPage("home")}>Home</button><br /><br />
        <button onClick={() => setPage("students")}>Students</button><br /><br />
        <button onClick={() => setPage("about")}>About</button>
      </div>

      {/* Main Content */}
      <div style={{ flex: 1, padding: "30px" }}>
        {page === "home" && (
          <>
            <h2>Welcome to Student Management System</h2>
            <p>Select an option from the menu.</p>
          </>
        )}

        {page === "students" && (
          <>
            <h2>Student List</h2>
            <table border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {students.map((stu) => (
                  <tr key={stu.id}>
                    <td>{stu.id}</td>
                    <td>{stu.name}</td>
                    <td>{stu.dept}</td>
                    <td>{stu.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {page === "about" && (
          <>
            <h2>About</h2>
            <p>This dashboard is used to manage student information.</p>
          </>
        )}
      </div>

    </div>
  );
}

export default StudentDashboard;
