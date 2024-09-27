import React, { createContext, useContext } from 'react';
import './App.css';

const UserInfo = createContext({});

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

function UserPage() {
  const UserData = useContext(UserInfo);
    return (
    <div>
        ID: {UserData.id}<br/>
        Name: {UserData.name}<br/>
        Theme: {UserData.theme}
        <UserLogout/>
    </div>
  );
}

function UserLogout() {
  const UserData = useContext(UserInfo);
  const handleClick = () => console.log('logout');
    return (
    <div>
        {UserData.login && <button onClick={handleClick}>Logout</button>}
    </div>
  );
}

export default App;
