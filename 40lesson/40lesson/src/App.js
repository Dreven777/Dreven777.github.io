import './App.css';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <div className="App">
      <ControlledForm />
      <UncontrolledForm />
      <UserInfo />
    </div>
  );
}

export default App;
