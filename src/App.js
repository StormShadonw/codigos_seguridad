import logo from './logo.svg';
import { UseState } from './UseState';
import { ClassState } from './ClassState';
import './App.css';

function App() {
  return (
    <div className="App">
      <UseState name="UseState"></UseState>
      <ClassState name="ClassState"></ClassState>
    </div>
  );
}

export default App;
