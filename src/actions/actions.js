export const ADD_TASK = 'ADD_TASK';
export const STOP_TIME = 'STOP_TIME';
export const CONTINUE_TIME = 'CONTINUE_TIME';
export const REMOVE_TASK = 'REMOVE_TASK';


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
      stop: true,
      date      
    },
    index
  })

export const continueTime = (state, date, index) => ({
  type: CONTINUE_TIME,
    payload: {
      ...state,
      stop: false,
      date
    },
    index
  })

export const removeTask = index => ({
    type: REMOVE_TASK,    
    index
  })

  


