import React, { useState } from 'react';
import './button.css'
function Button({label}){
    const [counter, setCounter] = useState(0)
    const [input, setInput] = useState(1)

    const addToCounter = () => {
        setCounter(counter + Number(input))
    }

    const subtractToCounter = () => {
        setCounter(counter - Number(input))
    }

    return(
    <div>
        <h3 data-testid = "header">My Header</h3>
        <h2 data-testid ="Counter" className= {counter > 100 ? 'green' : counter <= -100 ? 'red' : ''} >{counter}</h2>
        <button onClick = {subtractToCounter} data-testid = "subtract-btn"> - </button>
        <input type="number" data-testid = "input" 
        onChange = { (e) => {
            setInput(e.target.value)
        }} value = {input}></input>
        <button onClick = {addToCounter} data-testid = "add-btn"> + </button>
    </div>
    ) 
    
}

export default Button