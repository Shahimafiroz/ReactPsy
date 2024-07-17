import Cakes from "./components/Cakes";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Ice from "./components/Ice";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Cakes />
        <Ice />
      </Provider>
    </div>
  );
}

export default App;
