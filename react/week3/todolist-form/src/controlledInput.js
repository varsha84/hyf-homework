import React,{ useState } from 'react'

const ControlledInput =(props)=>{
    console.log("controlled input");
    const [des, setDes] = useState('');
    const [deadline, setDeadline] = useState('');

    const onChangeDesc = (e)=>{
        setDes(e.target.value);
    }
    const onChangeDate = (e)=>{
        setDeadline(e.target.value);
    }
    return(
        <div>
            Todo description: <input
                type="text"
                value={des}
                onChange={onChangeDesc}
            />
        <br/>
            deadline: <input
                    type="date"
                    value={deadline}
                    onChange={onChangeDate}
                />
            <button onClick={ ()=> {props.addItem(des, deadline)}}>Add todo</button>
        </div>
    
    )
}

export default ControlledInput;