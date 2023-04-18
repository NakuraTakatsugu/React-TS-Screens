import React, { useState } from 'react';

import './App.css';

import { Question, Screen } from "./types";

import { beginnerQuestions, intermediateQuestions } from "./data";

import { MainScreen, TitleScreen, ResultScreen, QuizScreen } from './components';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('title');
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState<Question[]>([]);
  const handleStart = () => {
    setScreen('main');
  };

  const handleAnswer = (selectedOption: number) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctOptionId) {
      setScore(score + 1);
    }
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setScreen('result');
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setScreen('main');
  };

  return (
    <div className="App">
      {screen === 'title' && <TitleScreen onStart={handleStart} />}
      {screen === 'main' &&
        <MainScreen
          setQuestions={setQuestions}
          setScreen={setScreen}
          beginnerQuestions={beginnerQuestions}
          intermediateQuestions={intermediateQuestions}
        />}
      {screen === 'quiz' && (
        <QuizScreen
          question={questions[currentQuestionIndex]}
          onAnswer={handleAnswer}
        />
      )}
      {screen === 'result' && (
        <ResultScreen
          score={score}
          totalQuestions={questions.length}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
};

export default App;
