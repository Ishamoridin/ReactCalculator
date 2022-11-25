import { useState } from "react";
import './App.css';
import { evaluate, sqrt } from "mathjs";


const App = () => {
    const [displayValue, editDisplayValue] = useState(`0`)
    const buttonArray =['(','+','-','*','÷',')',1,2,3,4,5,6,7,8,9,'C',0,'=',`√`]
    const classHandler = (button) => {
        switch(button){
        case (1):{return (`third`)}
        case (2):{return (`third`)}
        case (3):{return (`third`)}
        case (4):{return (`third`)}
        case (5):{return (`third`)}
        case (6):{return (`third`)}
        case (7):{return (`third`)}
        case (8):{return (`third`)}
        case (9):{return (`third`)}
        case (0):{return (`third`)}
        case (`(`):{return (`sixth`)}
        case (`)`):{return (`sixth`)}
        case (`C`):{return (`third`)}
        case (`=`):{return (`third`)}
        case (`+`):{return (`sixth`)}
        case (`-`):{return (`sixth`)}
        case (`*`):{return (`sixth`)}
        case (`÷`):{return (`sixth`)}
        case ('√'):{return('full')}
        default:{}
        
    }}
    const clickHandler = (button) => {
        switch (button){
            case 1:{return(editDisplayValue(displayValue+`${button}`))}
            case 2:{return(editDisplayValue(displayValue+`${button}`))}
            case 3:{return(editDisplayValue(displayValue+`${button}`))}
            case 4:{return(editDisplayValue(displayValue+`${button}`))}
            case 5:{return(editDisplayValue(displayValue+`${button}`))}
            case 6:{return(editDisplayValue(displayValue+`${button}`))}
            case 7:{return(editDisplayValue(displayValue+`${button}`))}
            case 8:{return(editDisplayValue(displayValue+`${button}`))}
            case 9:{return(editDisplayValue(displayValue+`${button}`))}
            case 0:{return(editDisplayValue(displayValue+`${button}`))}
            case '+':{return(editDisplayValue(displayValue+`${button}`))}
            case '-':{return(editDisplayValue(displayValue+`${button}`))}
            case '*':{return(editDisplayValue(displayValue+`${button}`))}
            case '÷':{return(editDisplayValue(displayValue+`/`))}
            case '(':{return(editDisplayValue(displayValue+`${button}`))}
            case ')':{return(editDisplayValue(displayValue+`${button}`))}
            case 'C':{return(editDisplayValue(`0`))}
            case '=':{return(editDisplayValue(evaluate(`${displayValue}`)))}
            case '√':{return(editDisplayValue(sqrt(displayValue)))}
            default: {return (console.log(`invalid button pressed`))}            
        }
    }
    const Button = buttonArray.map((button) => {
        return (
        <button id={button} className={classHandler(button)} onClick={() => clickHandler(button)}>{button}</button>
        )
    })
    return (
        <div>

            <div className='wrapper'>
                
                <div className="button-box">
                    <h1>Most Excellent Calculator</h1>
                    <input value={displayValue ? displayValue:'0'}/>
                    {Button}
                </div>
            </div>

        </div>);
}
export default App;
