import './App.css';
import ComponentStateful from './components/ComponentStateful';
import ComponentStateless from './components/ComponentStateless';
import StatefulClass from './components/StatefulClass';

function App() {
  return (
    <div className="App">
      <ComponentStateful/>
      <StatefulClass/>
      <ComponentStateless name="Oleksandr" />
    </div>
  );
}

export default App;
