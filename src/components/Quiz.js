import React, { useState } from "react";

const Quiz = ({ question, options, correctAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleSubmit = () => {
    setIsCorrect(selectedOption === correctAnswer);
  };

  return (
    <div>
      <h2>{question}</h2>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <input
              type="radio"
              name="quiz"
              value={option}
              onChange={(e) => setSelectedOption(e.target.value)}
            />
            {option}
          </li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Submit</button>
      {isCorrect !== null && (
        <p>{isCorrect ? "Correct!" : "Sorry, that's incorrect."}</p>
      )}
    </div>
  );
};

export default Quiz;
