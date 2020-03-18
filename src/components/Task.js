import React from "react";
import {useTimer} from './MyHooks';

export default function Task(props){   
  
  const {name, date, stop} = props.data;
  const {onStop, onContinue, onRemove} = props;
  const {timer} = useTimer(date, stop);

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
      style={{backgroundColor: !stop ? 'lightgreen' : 'grey'}}
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
            onClick={onStop.bind(null, props.index)}
          > 
          </button> :
          <button
            className="task__btn task__continue"
            onClick={onContinue.bind(null, props.index)}
          > 
          </button>
        }

        <button
          className="task__btn task__remove"
          onClick={onRemove.bind(null, props.index)}
        >
          R
        </button>
      </div>
    </div>
  </>)
}

