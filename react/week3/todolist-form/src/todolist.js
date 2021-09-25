import { useState } from 'react';

const TodoList =(props)=>{
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [des, setDes] = useState('');
  const [checked, setChecked] = useState(false);

  const onChangeInput = (e) => {
    setDes(e.target.value)
  } 

  const onEdit = (todo) => {
    setEditMode(true)
    setEditId(todo.id)
    setDes(todo.description)
    const element = document.getElementById(todo.id);
    element.classList.add("hide");
  }
  
  const onUpdate = (todo) => {
    setEditMode(false)
    setEditId(-1)
    todo.description = des
    const element = document.getElementById(todo.id);
    element.classList.remove("hide");
  }

  const onChecked = (id)=> {
    const element = document.getElementById(id);
    if(!checked){
      element.classList.add("completed");
    }
    else{
      element.classList.remove("completed");
    }   
    setChecked(!checked)
  }   
  return(
    <div>
      <ul>
      {props.todolist.map((todo) => (
          <li key={todo.id}>
            <label id={todo.id} className="">{todo.description} | {todo.deadline}</label>
            <input className={(editMode) && (todo.id === editId) ? "" : "hide"} type="text" value={des} onChange={onChangeInput}></input>
            <input type="checkbox" onClick={()=>onChecked(todo.id)}></input>
            <button className="btn" onClick={() => {props.delete(todo.id)}}>Delete</button>  
            <button className={(editMode) && (todo.id === editId) ? "hide" : ""} onClick={()=>onEdit(todo)}>Edit</button>
            <button className={(editMode) && (todo.id === editId) ? "" : "hide"} onClick={()=>onUpdate(todo)}>Update</button>
          </li>          
      ))}
      </ul>
    </div>
  ) 
}

export default TodoList