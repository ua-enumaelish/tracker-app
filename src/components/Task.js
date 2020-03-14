import React, {
  useState, 
  useEffect,
  useRef
} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {
  stopTime, 
  continueTime,
  removeTask
} from '../actions/actions';

export default function Task(props){   
  
  const {name, date, stop} = props.data;
  const {onStop, onContinue, onRemove} = props;
  console.log(props)

  const [timer, setTimer] = useState(date);  
  const [color, setColor] = useState('lightgreen');  
 
  
  useEffect( () => {
    let timerId;
    if(!stop){
      timerId = setInterval(()=>{
        setTimer(Date.now() - date)
      },1000);      
      setColor('lightgreen');      
      return () => clearInterval(timerId);
    }    
    
    setColor('grey')
    clearInterval(timerId);
  }, [stop, timer, date]);


  let getNumber = value => {
    switch(value){
      default: 
        return 0
      case 'hr':
        let hour = Math.floor((timer / 3600000))
        return hour.toLocaleString(undefined, {
          minimumIntegerDigits: 2      
        })
      case 'min':
        let minute = Math.floor((timer / 60000) % 60);
        return minute.toLocaleString(undefined, {
          minimumIntegerDigits: 2      
        })
      case 'sec':
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
        <span>{getNumber('hr') + ': '}</span>    
        <span>{getNumber('min') + ': '}</span>      
        <span>{getNumber('sec')}</span>
      </div>
      <div className="task__buttons">

        {!stop ?
          <button
            className="task__btn task__stop"
            onClick={() => onStop(props.index)}
          > 
           
          </button> :
          <button
            className="task__btn task__continue"
            onClick={onContinue}
          >          
          
          </button>
        }

        <button
          className="task__btn task__remove"
          onClick={onRemove}
        >
          R
        </button>
      </div>
    </div>
  </>)
}