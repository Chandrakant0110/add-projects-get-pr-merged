import { Provider } from "react-redux";
import store from "./redux/store";
import Todos from "./Todos";

function App() {
  return (
    <Provider store={store}>
      <Todos />
    </Provider>
  );
}

export default App;
