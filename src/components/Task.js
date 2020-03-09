import React, {useState, useEffect} from "react";

export default function Task(props){   
  const {name, date, stop} = props.data;

  const [timer, setTimer] = useState(date);  
  const [color, setColor] = useState('lightgreen');  
  

  useEffect( () => {
    let timerId;
    if(!stop){
      timerId = setInterval(()=>{
        setTimer(Date.now() - date)
      },1000/24);      
      setColor('lightgreen');      
      return () => clearInterval(timerId);
    }    
    
    setColor('grey')
    clearInterval(timerId);
  }, [stop, timer, date])  

  let getNumber = value => {
    switch(value){
      default: 
        return 0
      case 'hours':
        let hour = Math.floor((timer / 3600000))
        return hour.toLocaleString(undefined, {
          minimumIntegerDigits: 2      
        })
      case 'minutes':
        let minute = Math.floor((timer / 60000) % 60);
        return minute.toLocaleString(undefined, {
          minimumIntegerDigits: 2      
        })
      case 'seconds':
        let second = Math.floor((timer / 1000) % 60);
        return second.toLocaleString(undefined, {
          minimumIntegerDigits: 2      
        })
    }    
  }

  return(<>
    <div 
      className="task__container"
      style={{backgroundColor: color}}
    >
      <p className="task__name">{name}</p>
      <div className="task__timer"> 
        <span>{getNumber('hours') + ': '}</span>    
        <span>{getNumber('minutes') + ': '}</span>      
        <span>{getNumber('seconds')}</span>
      </div>
      <div className="task__buttons">

        {!stop ?
          <button
            className="task__btn task__stop"
            onClick={props.onStop}
          >            
          </button> :
          <button
            className="task__btn task__continue"
            onClick={props.onContinue}
          >          
          </button>
        }

        <button
          className="task__btn task__remove"
          onClick={props.onRemove}
        >
          R
        </button>
      </div>
    </div>
  </>)
}