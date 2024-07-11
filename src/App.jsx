import React, { useState } from 'react';
import './App.css'; // Assuming you have a separate CSS file for styling

function App() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="App">
      <div className="card">
        <h2>Name: dheeraj
        </h2>
        <p>Registration No: 212221040050</p>
        <button onClick={toggleDetails}>
          {showDetails ? 'Show Details' : 'Show Details'}
        </button>
        {showDetails && (
          <div>
            <p>I am from Saveetha Engineering College</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;