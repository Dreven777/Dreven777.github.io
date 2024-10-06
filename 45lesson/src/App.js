import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import AdminPanel from './components/Admin/AdminPanel'
import ModeratorPanel from './components/Moderator/ModeratorPanel'

import { makeAdmin, makeModerator } from './store/userAccess';


function App() {
  const userAccess = useSelector(state => state.userAccess);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <button onClick={() => dispatch(makeAdmin(!userAccess.Admin))}>
          {userAccess.Admin ? 'Ви адміністратор' : 'Ви не адміністратор'}
      </button>
      <br />
      <button onClick={() => dispatch(makeModerator(!userAccess.Moderator))}>
          {userAccess.Moderator ? 'Ви модератор' : 'Ви не модератор'}
      </button>
      {userAccess.Admin && <AdminPanel />}
      {userAccess.Moderator && <ModeratorPanel />}
  </div>
  );
}

export default App;
