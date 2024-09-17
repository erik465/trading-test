import React from "react";
import Quiz from "../components/Quiz";
import quizzes from "../data/quizzes";

const QuizPage = () => {
  return (
    <div>
      {quizzes.map((quiz, index) => (
        <Quiz
          key={index}
          question={quiz.question}
          options={quiz.options}
          correctAnswer={quiz.correctAnswer}
        />
      ))}
    </div>
  );
};

export default QuizPage;
