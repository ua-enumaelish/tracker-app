import React from "react";
import {connect} from 'react-redux';
import Task from './Task';

import {
  stopTime, 
  continueTime,
  removeTask
} from '../actions/actions';

function TaskContainer(props){  
  let {state, stopTime, continueTime, removeTask} = props;
  
  let handleStop = index => {
    const taskData = state[index];
    const date = Date.now() - taskData.date;
    console.log('stopping',(Date.now() - taskData.date) / 3600000);
    stopTime(state[index], date, index);
  }

  let handleContinue = index => {
    const taskData = state[index];
    const date = Date.now() - taskData.date;
    continueTime(state[index], date, index);
  }

    
  return(<>  
    <div className="task">
      {state.map( (item, index) => (
        <Task
          key={index + item.date}
          data={item} 
          onStop={() => handleStop(index)}  
          onContinue={() => handleContinue(index) }
          onRemove={() => removeTask(index)}     
        />
      ))}
    </div> 
  </>)
}

const mapStateToProps = state => {  
  return {state}
}

const mapDispatchToProps = dispatch => ({
  stopTime: (state, date, index) => dispatch(stopTime(state, date, index)),
  continueTime: (state, date, index) => dispatch(continueTime(state, date, index)),
  removeTask: index => dispatch(removeTask(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskContainer);
