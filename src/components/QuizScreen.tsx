import React from 'react';

interface Question {
  id: number;
  text: string;
  options: Array<{ id: number; text: string }>;
  correctOptionId: number;
}

interface QuizScreenProps {
  question: Question;
  onAnswer: (selectedOption: number) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({ question, onAnswer }) => {
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
