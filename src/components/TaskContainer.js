import React, {
  useCallback
} from "react";
import {
  useSelector,
  useDispatch
} from 'react-redux';

import {
  stopTime, 
  continueTime,
  removeTask
} from '../actions/actions';

import Task from './Task';

export default function TaskContainer(){    
  const state = useSelector(state => state);
  const dispatch = useDispatch(); 
  
  const handleStop = useCallback( index => {   
    const taskData = state[index];    
    const date = Date.now() - taskData.date;    
    dispatch(stopTime(state[index], date, index));
  }, []);
  
  // const handleStop =index => {   
  //   const taskData = state[index];    
  //   const date = Date.now() - taskData.date;    
  //   dispatch(stopTime(state[index], date, index));
  // };

  let handleContinue = index => {    
    const taskData = state[index];
    const date = Date.now() - taskData.date;
    dispatch(continueTime(state[index], date, index));
  }
  

  let getTask = state => (
    state.map( (item, index) => (
      <Task
        key={index + item.date}
        data={item} 
        index={index}
        onStop={handleStop}  
        onContinue={() => handleContinue(index)}
        onRemove={() => dispatch(removeTask(index))} 
      />
    ))
  )

  return(<>  
    <div className="task">
      {getTask(state)}
    </div> 
  </>)
}
