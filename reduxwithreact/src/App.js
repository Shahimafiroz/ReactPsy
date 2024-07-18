import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/myStore";
import FetchUsers from "./components/Users/FetchUsers";

function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
      <FetchUsers />
      {/* </Provider> */}
    </div>
  );
}

export default App;
