import React, { useState } from 'react';
import DataFetching from './dataFetching'
import ControlledInput from './controlledInput'
import TodoList from './todolist'
import TodoTimer from './timer'
import {getNextId} from './helper'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  React.useEffect(()=>{
    DataFetching().then(data=>setTodos(data));
  }, [] ); 

  const onAdd = (des, deadline)=>{
    const nextId = getNextId(todos)
    const newTodoItem = {
      id: nextId,
      description: des,
      deadline :deadline
    }
    const newTodoItems = todos.concat(newTodoItem);
    setTodos(newTodoItems);
  }

  const onDelete = (id) => {
    let newTodoList = todos.filter((todo) => todo.id !== id); 
    setTodos(newTodoList)
  }

  return (
    <div>
      <h1>Todolist</h1>
      <TodoTimer />
      <ControlledInput addItem={onAdd}/>
      <TodoList todolist={todos} delete={onDelete}/>
    </div>
  );
  
}

export default App;
