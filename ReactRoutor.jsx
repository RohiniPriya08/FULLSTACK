import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'; 

function Home() {
  return (
    <div>
      <h3>Welcome to your Dashboard!</h3>
      <p>Use the navigation links to explore your profile, courses, and grades.</p>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h3>Student Profile</h3>
      <p>Name: Jane Doe</p>
      <p>Enrollment: 2025CS101</p>
      <p>Department: Computer Science</p>
    </div>
  );
}

function Courses() {
  return (
    <div>
      <h3>My Courses</h3>
      <ul>
        <li>Web Development</li>
        <li>Data Structures</li>
        <li>Database Management</li>
        <li>Operating Systems</li>
      </ul>
    </div>
  );
}

function Grades() {
  return (
    <div>
      <h3>My Grades</h3>
      <table>
        <thead>
          <tr>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Web Development</td><td>A</td></tr>
          <tr><td>Data Structures</td><td>B+</td></tr>
          <tr><td>Database Management</td><td>A-</td></tr>
          <tr><td>Operating Systems</td><td>B</td></tr>
        </tbody>
      </table>
    </div>
  );
}

function NotFound() {
  return <h3>404 - Page Not Found</h3>;
}

function App() {
  return (
    <Router>
      <div className="dashboard-container">
        <nav>
          <h2>Student Dashboard</h2>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/grades">Grades</Link>
          </div>
        </nav>

        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
