import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

let tasks = ["submit hyf homework", 
            "go for a run", 
            "watach movie"];

            
function TodoTimer(props){
  const [count, setCount] = useState(0);
  setTimeout(() => setCount(count + 1), 1000);
  return <p>You have used this app for {count} seconds</p>;
};

function Todo(props){
  
  const [checked, updateCheck] = useState(false)
  const taskDone = checked ? "done" : ""

  return (
    
    <div className={taskDone}>
      <input type="checkbox" onClick={() => {updateCheck(!checked)}}></input>
      <label>{props.name}</label>
    </div>
  
  )
}

function App() {

  const [todos, updateTodos] = useState(tasks)


  const onAdd = () => {
    console.log ("adding new todo")
    const newTodo  = document.getElementById("newTodo").value;
    let newTodoList = todos.concat(newTodo)
    updateTodos(newTodoList)
    console.log(todos)
  }

  const onDelete = (index) => {
    console.log("delete clicked" + index)
    console.log(todos)
    let newTodoList = todos.filter((data, idx) => idx !== index); 
    updateTodos(newTodoList)
    console.log(todos)
  }

  return (
    <div className="App">
      <TodoTimer/>
      <h1>To Do List</h1>
      <div className="btn1">
      <button onClick={onAdd}> Add Todo </button>  
      <input id="newTodo"></input>
      </div>
      {
        todos.map((todo, index) => {
          return (
            <div className="Todolist">
            <Todo name={todo} key={index} />
            <button className="btn" onClick={() => {onDelete(index)}}>Delete</button>  
            </div>
          )
        }) 
      } 
      
    </div>
  );
}

export default App;
