import React, { useState } from "react";

const QuizForm = () => {
  const questions = [
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "Java Syntax Extension",
        "JSON XML",
        "Java Source X",
      ],
      answer: "JavaScript XML",
    },
    {
      question: "Which hook is used for state in React?",
      options: ["useData", "useState", "useEffect", "useRef"],
      answer: "useState",
    },
    {
      question: "React is mainly used for?",
      options: [
        "Database",
        "Styling",
        "User Interface",
        "Server-side logic",
      ],
      answer: "User Interface",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    setSelectedOption("");

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const containerStyle = {
    height: "100vh",
    width: "100%",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const cardStyle = {
    background: "rgba(255, 255, 255, 0.9)",
    padding: "30px",
    width: "400px",
    borderRadius: "10px",
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
  };

  const buttonStyle = {
    marginTop: "15px",
    padding: "10px",
    width: "100%",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {showResult ? (
          <div style={{ textAlign: "center" }}>
            <h2>Quiz Completed 🎉</h2>
            <p>
              Your Score: <strong>{score}</strong> / {questions.length}
            </p>
          </div>
        ) : (
          <>
            <h3>
              Question {currentQuestion + 1} of {questions.length}
            </h3>
            <p>{questions[currentQuestion].question}</p>

            {questions[currentQuestion].options.map((option, index) => (
              <label
                key={index}
                style={{
                  display: "block",
                  marginBottom: "10px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={(e) => setSelectedOption(e.target.value)}
                />{" "}
                {option}
              </label>
            ))}

            <button
              style={buttonStyle}
              onClick={handleNext}
              disabled={!selectedOption}
            >
              {currentQuestion === questions.length - 1
                ? "Submit"
                : "Next"}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default QuizForm;
