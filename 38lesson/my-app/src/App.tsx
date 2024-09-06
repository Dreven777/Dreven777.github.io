import React, {MouseEvent } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

function App() {
  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('click')
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button title="I'm a button" cb={handleMouseEvent}/>
        
      </header>
    </div>
  );
}
export default App;
