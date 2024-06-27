import './App.css';
import Parent from './components/Parent';
import Counter from './components/Counter';
import RefHooks from './components/UseRefHooks';
import { useRef } from 'react';

function App() {


  return (
    <div className="App">
      <RefHooks></RefHooks>
      {/* <Counter></Counter> */}
      {/* <Parent></Parent> */}
    </div>
  );
}

export default App;
