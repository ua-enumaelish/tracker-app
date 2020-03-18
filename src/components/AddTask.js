import React, {
  useState
} from "react";
import {useDispatch} from 'react-redux';
import {addTask} from '../actions/actions';

export default function AddTask(){
  const dispatch = useDispatch()
  const [value, setValue] = useState('');
    
  let createTaskByEnter = (e) => {
    if(e.key === 'Enter'){
      addNewTask(e.target.value)
    }
  }

  let addNewTask = value => {   
    if(!value){
      dispatch(addTask('new task', Date.now())); 
    }else{
      dispatch(addTask(value, Date.now()));
    }
    setValue('');
  }

  return(<>
    <div className="add-task">
      <div className="add-task__wrapper">
        <input 
          type="text"
          className="add-task__input"
          placeholder="Add task"
          value={value}
          onChange = {e => setValue(e.target.value)}
          onKeyPress={e => createTaskByEnter(e)}
        />
        
        <button
          className="add-task__btn"
          onClick={() => addNewTask(value)}
        >
          Add
        </button>
      </div>
    </div>
  </>)
}
