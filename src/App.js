import React from 'react';
import './styles/App.css';
import FlashcardList from './components/FlashcardList';
import SetList from './components/SetList';

const App = () => {
  return (
    <div className="App">
      <FlashcardList />
      <SetList />
    </div>
  );
};

export default App;
