import React from 'react';
import "./Login.css"; // Assuming you have some custom styles

const Login = () => {
  return (
    <div className="container mx-auto p-4">
      {/* First line with 1 card */}
      <div className="grid grid-cols-1 gap-4 mb-4">
        <div className="card">
          <h2>Student Plain</h2>
        </div>
      </div>

      {/* Second line with 2 cards */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="card">
          <h2>Student Plain</h2>
        </div>
        <div className="card">
          <h2>Student Plain</h2>
        </div>
      </div>

      {/* Third line with 3 cards */}
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="card">
          <h2>Student Plain</h2>
        </div>
        <div className="card">
          <h2>Student Plain</h2>
        </div>
        <div className="card">
          <h2>Student Plain</h2>
        </div>
      </div>

      {/* Fourth line with 2 cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="card">
          <h2>Student Plain</h2>
        </div>
        <div className="card">
          <h2>Student Plain</h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
