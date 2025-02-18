import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

function TodoList({ userName }) {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim()) {
      setTasks([
        ...tasks,
        { id: uuidv4(), text: input, completed: false },
      ]);
      setInput('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));  
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task  
      )
    );
  };

  const editTask = (taskToEdit, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskToEdit.id ? { ...task, text: newText } : task  
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>{userName}'s Todo List</h1>
      <div className="todo-input">
        <input
          type="text"
          placeholder="Add a new task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && addTask()} 
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks
          .filter((task) => !task.completed) 
          .map((task) => (
            <TodoItem
              key={task.id}  
              task={task}
              onDelete={() => deleteTask(task.id)}
              onComplete={() => toggleComplete(task.id)}
              onEdit={editTask}
            />
          ))}
        {tasks
          .filter((task) => task.completed) 
          .map((task) => (
            <TodoItem
              key={task.id}  
              task={task}
              onDelete={() => deleteTask(task.id)}
              onComplete={() => toggleComplete(task.id)}
              onEdit={editTask}
            />
          ))}
      </ul>
    </div>
  );
}

export default TodoList;
