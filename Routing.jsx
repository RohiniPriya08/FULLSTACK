import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h3>Welcome to Product Store</h3>;
}

function Electronics() {
  return <ul><li>Laptop</li><li>Mobile</li></ul>;
}

function Clothing() {
  return <ul><li>T-Shirt</li><li>Jeans</li></ul>;
}

function App() {
  return (
    <Router>
      <Link to="/">Home</Link> | 
      <Link to="/electronics"> Electronics</Link> | 
      <Link to="/clothing"> Clothing</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/clothing" element={<Clothing />} />
      </Routes>
    </Router>
  );
}

export default App;
