import React, {useState} from "react";
import {connect} from 'react-redux';
import {addTask} from './actions/actions';

function AddTask(props){
  const {addTask} = props;
  const [value, setValue] = useState('');
  let inputRef = React.createRef(); 
  
  let createTaskByEnter = (e) => {
    if(e.key === 'Enter'){
      addNewTask(e.target.value)
    }
  }

  let addNewTask = (value) => {   
    !value ?
      addTask('new task'):    
      addTask(value)
      
    inputRef.current.value = null
  }

  return(<>
    <div className="add-task">
      <div className="add-task__wrapper">
        <input 
          type="text"
          className="add-task__input"
          placeholder="Add task"
          value={value}
          ref={inputRef}
          onChange = {e => setValue(e.target.value)}
          onKeyPress={(e) => createTaskByEnter(e)}
        />
        
        <button
          className="add-task__btn"
          onClick={() => addTask(value)}
        >
          Add
        </button>
      </div>
      
    </div>
  </>)
}

const mapDispatchToProps = dispatch => {   
  return {
    addTask: name => dispatch(addTask(name, Date.now()))
  }
}

export default connect(null, mapDispatchToProps)(AddTask);