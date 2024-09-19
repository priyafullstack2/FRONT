//useState() = Re-renders the component when the state value changes
//
//useRef() = "use References" Does not cause re-renders 
//when its value changes when you want a component to "remember" some information,
//but you don't want that information to trigger new render.
//
//1. Accessing / Interacting with DOM Elements
//2. Handling Focus, Animations, and Transitions
//3. Managing Timers and Intervals

import React, {useState, useEffect } from 'react';
import MyComponent from './MyComponent.jsx';



function App() {

  return (<><MyComponent/>
  </>);
  
}

export default App
