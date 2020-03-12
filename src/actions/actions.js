import {
  ADD_TASK,
  STOP_TIME,
  CONTINUE_TIME,
  REMOVE_TASK
} from './actionType';


export const addTask = (name, date) => ({
  type: ADD_TASK,
    payload: {      
      stop: false,
      name,
      date    
    }
  })

export const stopTime = (state, date, index) => ({
  type: STOP_TIME,
    payload: {
      ...state,
      stop: !state.stop,
      date
    },
    index
  })

export const continueTime = (state, date, index) => ({
  type: CONTINUE_TIME,
    payload: {
      ...state,
      stop: !state.stop,
      date
    },
    index
  })

export const removeTask = index => ({
    type: REMOVE_TASK,    
    index
  })

  


