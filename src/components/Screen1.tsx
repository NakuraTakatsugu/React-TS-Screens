import React from 'react';
import { Question } from "../types";

interface ScreenProps {
  question: Question;
  onAnswer: (selectedOption: number) => void;
}

export const Screen1: React.FC<ScreenProps> = ({ question, onAnswer }) => {
  const handleAnswer = (selectedOption: number) => {
    onAnswer(selectedOption);
  };

  return (
    <div>
      <h2>問題 {question.id}:</h2>
      <p>{question.text}</p>
      {question.options.map((option) => (
        <button key={option.id} onClick={() => handleAnswer(option.id)}>
          {option.text}
        </button>
      ))}
    </div>
  );
};
