import React, { useContext } from 'react';
import UserInfo from './Context';
import UserLogout from './UserLogout';

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

  export default UserPage;