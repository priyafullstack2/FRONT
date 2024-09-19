//useEffect(function. [dependencies])

import React, {useState, useEffect} from 'react';
function MyComponent1(){
const [width, setwidth] = useState(window.innerWidth);
const [height, setheight] = useState(window.innerHeight);


useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("EVENT LISTENER ADDED");

return() => {
    window.removeEventListener("resize", handleResize);
    console.log("EVENT LISTENER REMOVED");
}
}, []);

useEffect(() =>{
document.title = `Size: ${width} x ${height}`;
},[width, height]);


function handleResize(){
    setwidth(window.innerWidth);
    setheight()
}


return (<>
<p> window Width : {width}px </p>
<p>Window Height : {height}px </p>

</>);

}
export default MyComponent1;