import './App.css';
// import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Welcome from './components/WelcomClassComp';
import Hello from './components/Hello';
import Msg from './components/Msg';
import Counter from './components/Counter'
import DestructuringProps from './components/DestructuringProps';
import EventHandlingClick from './components/EventHandlingClick';
import Parent from './components/ParentMethodProps';


function App() {
  return (
    <div className="App">
      <Parent />
      {/* <Msg></Msg>
      <Counter></Counter>
      <Greet name ="shahima" heroname ="Psy"/>
      <p>this is from app component in between</p>
      <Greet name ="Aqib" heroname="kuku"/>  
      <button>Action</button>
      <Greet name ="Aadil" heroname="bruh"/>  
      
      <Welcome name = "shahima" heroname = "psy"/>
      <Welcome name = "Aqib" heroname = "kuku"/>
      <Welcome name = "Aadil" heroname = "burh"/>
      <Hello/>
      <DestructuringProps name="Shahima" heroname="PeekaBoooo"></DestructuringProps>
      <DestructuringProps name="Tom Holand" heroname="SpiderMan"></DestructuringProps>
      <DestructuringProps name="khushi" heroname="Thanos"></DestructuringProps> 
      <EventHandlingClick></EventHandlingClick>
      */}




    </div>
  );
}

export default App;
