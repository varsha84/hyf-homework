import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import getTasks from './getTaskList'
import Task from './App'

const tasks = getTasks();

function ToDOList(){
  console.log(tasks);
  return (
    <div className="heading"> 
    <h1>To Do List</h1>{
      tasks.map((task)=>{
        return (
          <Task name = {task.name} 
            deadline = {task.deadline}
          />
        );
      })
    }
    </div>
  );
}

const element = document.getElementById('root');
ReactDOM.render(<ToDOList />,element);

