// useContext:- React HOOOK that allows you to share values between multiple levels
// of components with passing props through each level
//
//Provider Component:
//1. import {createContext} from 'react';
//2. export const MyContext =createContext();
//<MyContext. Provider value ={value}>
//<child/>
//</MyContext.Provider>
//CONSUMER COMPONENTS
//1. import React, {useContext} from 'react';
// import { MyContext} from './ComponentA';
//2. const value = useContext(MyContext);
//
import ComponentA from "./ComponentA.jsx";
//import ComponentB from "./ComponentB.jsx";
//import ComponentC from "./ComponentC.jsx";
//import ComponentD from "./ComponentD.jsx"
function App() {
  
  return (
    <>
    <ComponentA/>
    
    </>
  )
}

export default App
