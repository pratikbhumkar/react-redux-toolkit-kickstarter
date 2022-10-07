import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { GroceryItemsComponent } from "./GroceryItemsComponent";
import { increment, decrement } from "./store/counterSlice";
import { addItem } from "./store/groceryItemSlice";
import { GroceryItems } from "./store/groceryItemSlice";
import { RootGlobalState } from "./store/rootGlobalState";

function App() {
  const counter: number = useSelector(
    (state: RootGlobalState) => state.counter.value
  );
  const groceryItems: GroceryItems = useSelector(
    (state: RootGlobalState) => state.groceryItems
  );
  const dispatch = useDispatch();
  const [listItem, setListItem] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Hello World!</h1>
          <div className="parts">
            <h4>Counter</h4>
            <h5>{counter}</h5>
            <div>
              <button onClick={() => dispatch(decrement())}>-</button>
              <button onClick={() => dispatch(increment())}>+</button>
            </div>
          </div>
          <div className="parts">
            <h4>Grocery List</h4>
            <div>
              <input
                value={listItem}
                type="text"
                onChange={(event) => setListItem(event.target.value)}
              />
              <button onClick={() => dispatch(addItem(listItem))}>
                Submit
              </button>
            </div>
            <ul>
              <GroceryItemsComponent groceryItems={groceryItems} />
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
