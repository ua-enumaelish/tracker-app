import React, {
  useState, 
  useEffect
} from "react";

export function useTimer(date, stop){
  const [timer, setTimer] = useState(date);  
  const [color, setColor] = useState('lightgreen');  

  useEffect( () => {
    let timerId;
    if(!stop){     
      timerId = setInterval(()=>{
        setTimer(Date.now() - date);
      },1000/24);      
      setColor('lightgreen');      
      return () => clearInterval(timerId);
    }    
   
    setColor('grey')
    clearInterval(timerId);
  }, [date, stop]);

  return {timer, color};
}