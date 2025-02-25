import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue.trim()]);
      setInputValue(""); // Clear the input
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h2>To-Do List</h2>
      <div>
        <input
          type="text"
          placeholder="Enter a task"
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <ul>
        {todos.map((task, idx) => (
          <li key={idx}>
            {task}{" "}
            <button onClick={() => deleteTodo(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
