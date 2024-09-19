//React hook = Special function that allows functional components
//to use React features without writing class components(React v16.8)(useState, useEffect,
// useContext, useReducer, useCallback
// and more)
//useState() = A react hook that allows the creation of a stateful variable AND
//a setter function to update its value in the Virtual DOM.
//[name, setName]
//When you include the UST state hook you're given an array
//of two elements we use array destructuring to create a stateful
//variable and a Setter function to update that variable
//
//
//
//
import Counter from './Counter.jsx'
//import MyComponent from './MyComponent.jsx'

function App(){
  return(
<>
<Counter/>

</>

  );
  
}

export default App
