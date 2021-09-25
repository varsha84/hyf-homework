import { useState } from 'react';

const TodoList =(props)=>{
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(-1);
  const [des, setDes] = useState('');

  const onChangeInput = (e) => {
    console.log(e.target.value)
    setDes(e.target.value)
  } 

  const onEdit = (todo) => {
    setEditMode(!editMode)
    setEditId(todo.id)
    setDes(todo.description)
  }
  
  const onUpdate = (todo) => {
    console.log("we need to update Todos")
    setEditMode(!editMode)
    setEditId(-1)
    todo.description = des
  }
      
    return(
        props.todolist.map((todo) => (
          
        <div>
          <ul>
            <li key={todo.id}>
              <span className={(editMode) && (todo.id === editId) ? "hide" : ""}>{todo.description} </span>
              <input className={(editMode) && (todo.id === editId) ? "" : "hide"} type="text" value={des} onChange={onChangeInput}></input>
              <button className="btn" onClick={() => {props.delete(todo.id)}}>Delete</button>  
              <button className={(editMode) && (todo.id === editId) ? "hide" : ""} onClick={()=>onEdit(todo)}>Edit</button>
              <button className={(editMode) && (todo.id === editId) ? "" : "hide"} onClick={()=>onUpdate(todo)}>Update</button>
            </li>
          </ul>
        </div>
        ))
    ) 
}

export default TodoList