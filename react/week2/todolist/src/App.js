import React, { useEffect, useState } from 'react';
import './App.css';
import Todo from './todo'

let tasks = [
  {id :1, description:"submit hyf homework"}, 
  {id :2, description: "go for a run"}, 
  {id:3, description:"watach movie"}
];

//Timer on webpage

 function TodoTimer(props){
  const [count, setCount] = useState(0);
  useEffect(()=>{
    setTimeout(() => setCount(count + 1), 1000);
  })
  return <p>You have used this app for {count} seconds</p>;
};
 
//main parent

function App() {
  const [todos, setTodos] = useState(tasks)
  
  const onAdd = () => {
    const newTodo  = { id: Math.floor(Math.random() * 100), description: "Random Text for New Todo" };
    let newTodoList = todos.concat(newTodo);
    setTodos(newTodoList);
  }

  const onDelete = (id) => {
    let newTodoList = todos.filter((todo) => todo.id !== id); 
    setTodos(newTodoList)
  }

  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoTimer/>
      <button onClick={onAdd}> Add Todo </button>  
      {
        todos.map((todo) => {
          return (
            <div className="Todolist">
              <Todo name={todo.description} key={todo} />
              <button className="btn" onClick={() => {onDelete(todo.id)}}>Delete</button>  
            </div>
          )
        }) 
      } 
      
    </div>
  );
}

export default App;
