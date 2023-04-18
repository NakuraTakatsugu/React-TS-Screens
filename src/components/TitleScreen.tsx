import React from 'react';

interface TitleScreenProps {
  onStart: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({ onStart }) => {
  return (
    <div>
      <h1>ようこそ</h1>
      <button onClick={onStart}>選択する</button>
    </div>
  );
};
