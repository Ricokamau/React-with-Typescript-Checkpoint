// src/App.tsx
import React from 'react';
import Greeting from './components/Greeting';
import Counter from './components/Counter';
import './App.css'; // Import the CSS file

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Greeting name="Africa" />
      <Counter />
    </div>
  );
};

export default App;
