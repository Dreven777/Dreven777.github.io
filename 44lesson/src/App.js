import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import AdminPanel from './components/Admin/AdminPanel'
import ModeratorPanel from './components/Moderator/ModeratorPanel'

function App() {
  const userAccess = useSelector(state => state.userAccess);
  const dispatch = useDispatch();
  return (
    <div className="App">
        <button onClick={() => dispatch({ type: 'MAKE_ADMIN', payload: !userAccess.Admin })} >{userAccess.Admin ? 'Ви адміністратор':'Ви не адміністратор'}</button>
        <br/>
        <button onClick={() => dispatch({ type: 'MAKE_MODERATOR', payload: !userAccess.Moderator })} >{userAccess.Moderator ? 'Ви модератор':'Ви не модератор'}</button>
        {userAccess.Admin && <AdminPanel/>}
        {userAccess.Moderator && <ModeratorPanel/>}
    </div>
  );
}

export default App;
