import React from 'react';
import ReactDOM from 'react-dom';
import './css/w3.css';
import './css/todo.css';
import DisplayDate from './js/DisplayDate';
import TodoList from './js/TodoList';
ReactDOM.render(
  <React.StrictMode>
    <DisplayDate />
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
