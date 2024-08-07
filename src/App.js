import React, { useState } from "react";
import Quiz from "./Quiz";
import "./App.css";

const questions = [
  {
    text: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correctAnswer: "Paris",
  },
  {
    text: "What is the largest planet in our solar system?",
    options: ["Earth", "Jupiter", "Mars", "Venus"],
    correctAnswer: "Jupiter",
  },
  {
    text: "What element does 'O' represent on the periodic table?",
    options: ["Oxygen", "Osmium", "Oganesson", "Osmine"],
    correctAnswer: "Oxygen",
  },
  {
    text: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Platinum"],
    correctAnswer: "Diamond",
  },
  {
    text: "What is the square root of 64?",
    options: ["6", "7", "8", "9"],
    correctAnswer: "8",
  },
];

const App = () => {
  const [startQuiz, setStartQuiz] = useState(false);

  const handleStartQuiz = () => {
    setStartQuiz(true);
  };

  return (
    <div className="app">
      {startQuiz ? (
        <>
          <h1>Quiz</h1>
          <Quiz questions={questions} />
        </>
      ) : (
        <div className="home">
          <h1>Welcome to QuizMaster!</h1>
          <p>
            Ready to test your knowledge? Click the button below to start the
            quiz!
          </p>
          <button onClick={handleStartQuiz}>Start Quiz</button>
        </div>
      )}
    </div>
  );
};

export default App;
