import { useSelector, useDispatch } from "react-redux";
import { Rootstate } from "./redux/store";
import { useState } from "react";
import { addTodo } from "./redux/todoSlice";

import "./App.css";

function App() {
  const [state, setState] = useState<string>("");

  const tdo = useSelector((state: Rootstate) => state.item.todo);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (state.trim()) {
      dispatch(addTodo(state));
      setState("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="todo-container">
      <h1 className="todo-title">Todo List</h1>
      <div className="todo-input-container">
        <input
          className="todo-input"
          value={state}
          onChange={(e) => setState(e.target.value)}
          type="text"
          placeholder="Что нибудь и кнопку enter"
          onKeyPress={handleKeyPress}
        />
        <button className="todo-submit" onClick={handleClick}>
          Submit
        </button>
      </div>
      <ul className="todo-list">
        {tdo.map((items) => (
          <li className="todo-item" key={items.id}>
            <span className="todo-text">{items.todo}</span>
            <button className="todo-remove">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
