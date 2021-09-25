import React, { useState } from 'react';
import DataFetching from './dataFetching'
import ControlledInput from './controlledInput'
import TodoList from './todolist'
import {getNextId} from './helper'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);

  React.useEffect(()=>{
    DataFetching().then(data=>setTodos(data));
  }, [] ); 

  const onAdd = (des, deadline)=>{

    console.log('click here');
    const nextId = getNextId(todos)
    const newTodoItem = {
      id: nextId,
      description: des,
      deadline :deadline
    }
    console.log(newTodoItem)
    const newTodoItems = todos.concat(newTodoItem);
    setTodos(newTodoItems);
    
  }
  const onDelete = (id) => {
    let newTodoList = todos.filter((todo) => todo.id !== id); 
    setTodos(newTodoList)
  }
const onEdit = (todo) =>{
  console.log(todo);
  console.log(editMode)
  setEditMode(!editMode)
  /* if (editMode){

    return { ...todos, completed: !todos.completed }

  }else{
    return todos

  }  */

}


  return (
    <div>
      <h1>Todolist</h1>
      <ControlledInput addItem={onAdd}/>
      <TodoList todolist={todos} delete={onDelete} editInput={onEdit}/>
    </div>
  );
  
}

export default App;
