import React from 'react';
import './App.css';

import UserInfo from './components/Context';
import UserPage from './components/UserPage'

function App() {
  return (
    <div className="App">
      <UserInfo.Provider value={{
        id: 5,
        name: 'Oleksandr',
        login: true,
        theme: 'dark'
      }}>
        <UserPage/>
      </UserInfo.Provider>

    </div>
  );
}

export default App;
