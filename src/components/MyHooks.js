import {
  useState, 
  useEffect
} from "react";

export function useTimer(date, stop){
  const [timer, setTimer] = useState(date);  
  
  useEffect( () => {
    let timerId;
    if(!stop){     
      timerId = setInterval(()=>{
        setTimer(Date.now() - date);
      },1000/24);      
         
      return () => clearInterval(timerId);
    } else{
      return () => clearInterval(timerId);
    }   
  }, [date, stop]);

  return {timer};
}