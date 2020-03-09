
export const loadState = () => {
  try{
    const state = localStorage.getItem('taskList');
    if(state === null){
      return []
    }
    return JSON.parse(state)
  }
  catch(err){
    return [];
  }
}

export const saveState = state => {
  try{
    const taskList = JSON.stringify(state);
    localStorage.setItem('taskList', taskList);
  }
  catch(err){
    //Something wrong...
  }
}