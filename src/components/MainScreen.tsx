// src/components/MainScreen.tsx

import React from 'react';
import { Question,Screen } from '../types';

interface MainScreenProps {
  setScreen: (screen: Screen) => void;
  setQuestions: (Question: Question[]) => void;
  beginnerQuestions: Question[];
  intermediateQuestions: Question[];
}

export const MainScreen: React.FC<MainScreenProps> = ({ setScreen,setQuestions,beginnerQuestions, intermediateQuestions }) => {
  const handleClick = (questions: Question[], screen: Screen) => {
    setQuestions(questions);
    setScreen(screen);
  };
  return (
    <div>
      <h1>QuizApp</h1>
      <button onClick={() => handleClick(beginnerQuestions, 'quiz')}>初級編へ</button>
      <button onClick={() => handleClick(intermediateQuestions, 'quiz')}>中級編へ</button>
      <button onClick={() => setScreen('title')}>タイトル戻る</button>
    </div>
  );
};
