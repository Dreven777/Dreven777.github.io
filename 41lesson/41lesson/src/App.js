import './App.css';
import React, { useState, useEffect } from 'react';
import List from './components/List';
import Item from './components/Item';

function App() {
  const [id, setID] = useState(-1);

  function userInput(e){
    setID(e.target.value);
    console.log(id);
  }
  return (
    <div className="App">
      <input type="number" min="1" max="100" onChange={userInput}/>
      {id === -1 ? <List/> : <Item id={id}/>}
    </div>
  );
}

export default App;
