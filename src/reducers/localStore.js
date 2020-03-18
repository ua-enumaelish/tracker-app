export const loadState = () => {  
  let state = {};
  try{    
    state.taskList = localStorage.getItem('taskList');    
    if(state.taskList === null){
      state.taskList = [];      
      return state;
    }    
    state = JSON.parse(state.taskList);     
    return state;
  }
  catch(err){
    return state.taskList = [];
  }
}

export const saveState = state => {  
  try{
    localStorage.setItem('taskList', JSON.stringify(state));
  }
  catch(err){
    //Something wrong...
  }
}