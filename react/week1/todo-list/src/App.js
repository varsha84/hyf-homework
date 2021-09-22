import logo from './logo.svg';
import './App.css';

function Task(props) {
  return (
    <div className="task">     
      <h2>{props.name}</h2> 
      <h5>{props.deadline} </h5>
    </div>
  );
}

export default Task;
