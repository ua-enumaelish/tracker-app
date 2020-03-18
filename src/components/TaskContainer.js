import React, {
  useCallback,
  useMemo
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
  const state = useSelector(state => state.taskList);  
  const dispatch = useDispatch(); 
  
  const handleStop = useCallback( index => {    
    const taskData = state[index];    
    const date = Date.now() - taskData.date;
    dispatch(stopTime(state[index], date, index));
  }, [dispatch, state]);
  

  const handleContinue = useCallback( index => {
    const taskData = state[index];
    const date = Date.now() - taskData.date;       
    dispatch(continueTime(state[index], date, index));
  },[dispatch, state]);
  
  const handleRemove = useCallback( index => {
    dispatch(removeTask(index))
  }, [dispatch]);

  const getTask = useMemo(() => (
    state.map( (item, index) => (
      <Task
        key={index}
        data={item} 
        index={index}
        onStop={handleStop}  
        onContinue={handleContinue}
        onRemove={handleRemove} 
      />
    ))
  ), [state]);

  return(<>  
    <div className="task">
      {getTask}
    </div> 
  </>)
}
