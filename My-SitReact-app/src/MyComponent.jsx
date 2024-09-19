//useEffect() = React Hook that instructs react to do
//              some code when(pick one)
// This component re- renders
//this component mounts
//the state of value
//useEffect(function, [dependencies])
//
//1.useEffect(() => {})   //Runs after every re-render
//2.useEffect(() => {}, []) //Runs only on mount
//3. useEffect(() => {}, [value]) //runs on mount + when value changes
//
//USES
//#1 Event manipulation
//#2 DOM manipulation
//#3 Subscriptions (real-time updates)
//#4 Fetching Data from an API
//#5 Clean up when a component unmounts
//By using useEffect it keeps the cod emore oragnised
// it can tells when exactly the code runs for every render on;y when the component mounts
// if we not using useEffect, this code would run every single time regardless
import React, {useState, useEffect} from 'react';

function MyComponent(){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
    document.title = `Count: ${count} ${color}`;

return () => {
    //SOME CLEAN UP CODE
}


    }, [count, color]);

function addCount(){
    setCount(c => c + 1);
}
function subtractCount(){
    setCount(c => c - 1);
}
function changeColor(){
    setColor(c => c === "green" ? "red" :"green");
}
return (<>
<p style = {{color: color}}> Count: {count}</p>
<button onClick = {addCount}> Add</button>
<button onClick = {subtractCount}>Subtract</button>
<button onClick = {changeColor}>ChangeColor</button>
</>);
}
export default MyComponent




























