import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { increment, decrement } from "./store/counterSlice";
import { CounterState } from "./store/counterStore";

function App() {
  const counter: number = useSelector(
    (state: CounterState) => state.counter.value
  );
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <h4>Counter</h4>
        <h5>{counter}</h5>
        <div>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
