import React, { useContext } from 'react';
import UserInfo from './Context';

function UserLogout() {
    const UserData = useContext(UserInfo);
    const handleClick = () => console.log('logout');
      return (
      <div>
          {UserData.login && <button onClick={handleClick}>Logout</button>}
      </div>
    );
  }

export default UserLogout;