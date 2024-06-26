
import './App.css';
import Counter from './components/Counter';
import SafeCounterPrevState from './components/SafeCounterPrevState';
import SafeCount from './components/SafeCounterPrevState';
import ObjectsUsingHooks from './components/ObjectsUsingHooks';
import Array from './components/ArrayCounterUsingUseStatehooks';
import Use from './components/CounterUseEffect';
import Mouse from './components/HookMouse';
import Unmount from './components/MouseConatinerUnmount';
import IncorrectDependency from './components/IntervalClassCounter';

function App() {
  return (
    <div className="App">
      <IncorrectDependency />
    </div>
  );
}

export default App;
