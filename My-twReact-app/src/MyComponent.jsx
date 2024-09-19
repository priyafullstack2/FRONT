import React, {useState} from 'react';

function MyComponent(){

    const [car, setCar] = useState({PlateNumber: 123456,
                                     Brand: "Tesla",
                                     year: 2024,
                                     model: "Fyuy"});

function handlePlateNumberChange(event){

    setCar(c => ({...c, PlateNumber: event.target.value}));
}
function handleBrandChange(event){
    setCar(c => ({...c, Brand: event.target.value}));
    
}
function handleYearChange(event){
    setCar(c => ({...c, year: event.target.value}));
    
}
function handleModelChange(event){
    setCar(c => ({...c, model: event.target.value}));
    
}

    return(
        
        <div>
            <p> Your most important Car is designed with the functionalities: {car.PlateNumberlateNumber} {car.Brand} {car.year} {car.model}</p>
       <input type = "number" value ={car.PlateNumber} onChnage = {handlePlateNumberChange}/>
       <input type = "text" value ={car.Brand} onChnage = {handleBrandChange}></input>
       <input type = "number" value ={car.year} onChnage = {handleYearChange}></input>
       <input type = "text" value ={car.model} onChnage = {handleModelChange}></input>
    
        </div>
        
    );

}
export default MyComponent