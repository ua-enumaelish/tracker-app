import {
  ADD_TASK,
  STOP_TIME,
  CONTINUE_TIME,
  REMOVE_TASK
} from './actionType';

import {v4} from 'uuid';

export const addTask = (name, date) => ({
  type: ADD_TASK,
    payload: {
      id: v4(),
      stop: false,
      name: name,
      date: date      
    }
  })

export const stopTime = (state, date, index) => ({
  type: STOP_TIME,
    payload: {
      ...state,
      stop: !state.stop,
      date: date
    },
    index: index
  })

export const continueTime = (state, date, index) => ({
  type: CONTINUE_TIME,
    payload: {
      ...state,
      stop: !state.stop,
      date: date
    },
    index: index
  })

export const removeTask = index => ({
    type: REMOVE_TASK,    
    index: index
  })

  


