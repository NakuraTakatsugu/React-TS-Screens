import React from 'react';

interface ResultScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ score, totalQuestions, onRestart }) => {
  const isPerfectScore = score === totalQuestions;

  return (
    <div>
      <h2>Result</h2>
      <p>
        あなたは{totalQuestions}問中、{score}問正解しました.
      </p>
      {isPerfectScore && <p>おめでとう！全問正解です！</p>}
      <button onClick={onRestart}>全問正解を目指す</button>
    </div>
  );
};
