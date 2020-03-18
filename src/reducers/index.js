export function rootReducer(state, action) {  
  let clone;
  switch(action.type){    
    case 'ADD_TASK':
      // console.log("Add task", [...state.taskList, {...action.payload}]);
      state.taskList = [...state.taskList, {...action.payload}];
      return state;
    case 'STOP_TIME': 
      clone = state.taskList.slice(0);
      clone.splice(action.index, 1, action.payload);
      state.taskList = [...clone];
      return state;
    case 'CONTINUE_TIME': 
      clone = state.taskList.slice(0);
      clone.splice(action.index, 1, action.payload);
      state.taskList = [...clone];
      return state;
    case 'REMOVE_TASK':
      clone = state.taskList.slice(0);
      clone.splice(action.index, 1);      
      state.taskList = [...clone];
      return state;
    default:
      return state;
  }
}

