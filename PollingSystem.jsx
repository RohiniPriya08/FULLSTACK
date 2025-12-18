import React, { useState } from "react";

const PollingSystem = () => {
  const [votes, setVotes] = useState({
    React: 0,
    Angular: 0,
    Vue: 0,
    Svelte: 0,
  });

  const [hasVoted, setHasVoted] = useState(false);

  const totalVotes =
    votes.React + votes.Angular + votes.Vue + votes.Svelte;

  const handleVote = (option) => {
    if (hasVoted) return;
    setVotes({ ...votes, [option]: votes[option] + 1 });
    setHasVoted(true);
  };

  const getPercentage = (count) =>
    totalVotes === 0 ? 0 : ((count / totalVotes) * 100).toFixed(1);

  const containerStyle = {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.95)",
    padding: "30px",
    width: "420px",
    borderRadius: "10px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
  };

  const buttonStyle = {
    padding: "10px",
    marginBottom: "10px",
    width: "100%",
    fontSize: "15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "#fff",
  };

  const barContainer = {
    background: "#e0e0e0",
    borderRadius: "5px",
    overflow: "hidden",
    height: "10px",
    marginTop: "5px",
    marginBottom: "15px",
  };

  const barStyle = (width) => ({
    height: "100%",
    width: `${width}%`,
    backgroundColor: "#28a745",
    transition: "width 0.5s ease",
  });

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Real-Time Polling System 📊
        </h2>

        <p><strong>Which frontend framework do you prefer?</strong></p>

        {!hasVoted && (
          <>
            <button style={buttonStyle} onClick={() => handleVote("React")}>
              React
            </button>
            <button style={buttonStyle} onClick={() => handleVote("Angular")}>
              Angular
            </button>
            <button style={buttonStyle} onClick={() => handleVote("Vue")}>
              Vue
            </button>
            <button style={buttonStyle} onClick={() => handleVote("Svelte")}>
              Svelte
            </button>
          </>
        )}

        {hasVoted && (
          <>
            {Object.entries(votes).map(([option, count]) => (
              <div key={option}>
                <strong>
                  {option}: {getPercentage(count)}%
                </strong>
                <div style={barContainer}>
                  <div style={barStyle(getPercentage(count))}></div>
                </div>
              </div>
            ))}

            <p style={{ textAlign: "center", marginTop: "10px" }}>
              Total Votes: <strong>{totalVotes}</strong>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PollingSystem;
