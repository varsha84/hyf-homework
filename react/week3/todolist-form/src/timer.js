import {useState, useEffect} from 'react'

const TodoTimer=(props)=>{
    const [count, setCount] = useState(0);
    useEffect(()=>{
      setTimeout(() => setCount(count + 1), 1000);
    })
    return <p>You have used this app for {count} seconds</p>;
};

export default TodoTimer  