import React, { useState } from 'react';
import '../App.css';

const TodoList = () => {
const [todos, setTodos] = useState([]);
const [inputValue, setInputValue] = useState('');

const handleChange = (event) => {
setInputValue(event.target.value);
  };

const handleSubmit = (event) => {
event.preventDefault();
const trimmedValue = inputValue.trim();
if (trimmedValue !== '') {
setTodos([...todos, trimmedValue]);
setInputValue('');
    }
  };

const handleDelete = (index) => {
const newTodos = [...todos];
newTodos.splice(index, 1);
setTodos(newTodos);
  };

return (
    <div className="todo-list">
      <h1 >Carl James  TodoList</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Add a new todo"
        /> <button className='rengar' type="submit">Add To Do</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button className='kindred' onClick={() => handleDelete(index)}>Delete</button>
          </li>
           ))}
      </ul>
    </div>
  );
};

export default TodoList;
