import React, { useState } from 'react';
import "./Todo.css"

const Todo = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodoList([...todoList, newTodo]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      
      <ul className="todo-list">
        {todoList.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button onClick={() => handleDeleteTodo(index)} className="delete-btn">Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
