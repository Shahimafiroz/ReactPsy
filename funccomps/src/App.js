import './App.css';
// import Greet from './components/Greet';
import { Greet } from './components/Greet';
import Welcome from './components/WelcomClassComp';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet name ="shahima" heroname ="Psy"/>
      <p>this is from app component in between</p>
      <Greet name ="Aqib" heroname="kuku"/>  
      <button>Action</button>
      <Greet name ="Aadil" heroname="bruh"/>  
      {/* <MyGreet/> */}
      <Welcome name = "shahima" heroname = "psy"/>
      <Welcome name = "Aqib" heroname = "kuku"/>
      <Welcome name = "Aadil" heroname = "burh"/>
      
      <Hello/>
    </div>
  );
}

export default App;
