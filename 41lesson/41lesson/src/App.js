import './App.css';
import React, { useState } from 'react';
import List from './components/List';

function App() {
  const [id, setID] = useState('');

  function userInput(e){
    setID(e.target.value);
  }
  return (
    <div className="App">
      <input type="number" min="1" max="100" onChange={userInput}/>
      <List id={id}/>
    </div>
  );
}

export default App;
