import React, { useState } from 'react';
import './App.css';
import {TodoTable} from './components/TodoTable';
import {NewTodoForm} from './components/NewTodoForm';
import { Todo } from './models/TodoModel';

export const App = () => {
  const [todos, setTodos] = useState<Todo[]>([
    new Todo(1, 'Feed Dog', 'User One'),
    new Todo(2, 'Water Plants', 'User Two'),
    new Todo(3, 'Clean the House', 'User One'),
  ]);

  const [showAddTodos, setShowAddTodos] = useState<boolean>(false);

  const addTodo = (description: string, assigned: string) => {
    let rowNumber = todos.length > 0 ? todos[todos.length - 1].todoNumber + 1 : 1;

    const newTodo = new Todo(rowNumber, description, assigned);
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const deleteTodo = (deleteTodoNumber: number) => {
    console.log('Deleting todo:', deleteTodoNumber);
    const filtered = todos.filter((todo) => todo.todoNumber !== deleteTodoNumber);
    setTodos(filtered);
  };

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">Your Todos</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary mt-3"
            onClick={() => setShowAddTodos(!showAddTodos)}
          >
            {showAddTodos ? 'Close New Todo' : 'New Todo'}
          </button>
          {showAddTodos && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

