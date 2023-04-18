// src/questions.ts

import { Question } from "../types";

export const beginnerQuestions: Question[] = [
  {
    id: 1,
    text: '初級問題1',
    options: [
      { id: 1, text: '選択肢1' },
      { id: 2, text: '選択肢2' },
      { id: 3, text: '選択肢3' },
    ],
    correctOptionId: 2,
  },
  // Add more beginner questions here
];

export const intermediateQuestions: Question[] = [
  {
    id: 1,
    text: '中級問題1',
    options: [
      { id: 1, text: '選択肢1' },
      { id: 2, text: '選択肢2' },
      { id: 3, text: '選択肢3' },
    ],
    correctOptionId: 2,
  },
  // Add more intermediate questions here
];
