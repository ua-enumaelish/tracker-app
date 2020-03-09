export function rootReducer(state, action) {
  let clone;
  switch(action.type){    
    case 'ADD_TASK':       
      return [{...action.payload}, ...state];
    case 'STOP_TIME': 
      clone = state.slice(0);
      clone.splice(action.index, 1, action.payload);
      return [...clone];
    case 'CONTINUE_TIME': 
      clone = state.slice(0);
      clone.splice(action.index, 1, action.payload);
      return [...clone];
    case 'REMOVE_TASK':
      clone = state.slice(0);
      clone.splice(action.index, 1);      
      return [...clone];
    default:
      return state;
  }
}

