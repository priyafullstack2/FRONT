// updater function: A function passed as an argumnet to setState() usually
 //        ex. setYear(Year +1)
//Allow for safe updates based on the previous state
//Used with multiple state updates and synchronous functions
//Good practice to usse updater functions
//Uses the CURRENT state to calculate the next state.
// set functions do not trigger an update
//React batches together state updates for performance reasons.
//NEXT state becomes the CURRENT state after an update.
//Takes the Pending state to calculate NEXT state
//React puts your updater function in a queue (waiting in line)
//During the next render, it will call them in the same order.
import React, {useState} from "react";
function MyComponent(){

    const [count, setCount] = useState(0);

    function increment(){

        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);    
    };

    function decrement(){
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    };
    function reset(){
        setCount(c => c = 0);
    }
    return(       
            <div>
            <p> Count: {count}</p>
            <button onClick = {decrement}>Decrement</button>
            <button onClick = {reset}>Reset</button>
            <button onClick = {increment}>Increment</button>
        </div>
        
    );

}
export default MyComponent