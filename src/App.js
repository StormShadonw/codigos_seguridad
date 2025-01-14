import logo from './logo.svg';
import { UseState } from './UseState';
import { ClassState } from './ClassState';
import './App.css';
import { UseReducerClass } from './UseReducerClass';

function App() {
  return (
    <div className="App">
      <UseState name="UseState"></UseState>
      <ClassState name="ClassState"></ClassState>
      <UseReducerClass name="UserReducer"></UseReducerClass>
    </div>
  );
}

export default App;
