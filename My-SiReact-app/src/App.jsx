
import List from "./List.jsx"
function App() {
  const fruits =          [{id:1,name:"apple", calories: "apple"},
                           { id:2, name: "orange", calories:89},
                           {id:3,name:"banana", calories:78}, 
                           {id:4,name:"Grapes",calories:90}, 
                           {id:5,name:"Pineapple", calories:100}];

  const vegetables =      [{id:10,name:"leaves", calories: 96},
                           { id:9, name: "potato", calories:890},
                           {id:8,name:"beeroot", calories:781}, 
                           {id:7,name:"Ginger",calories:900}, 
                           {id:6,name:"Peas", calories:190}];



  return(
    <>
    {fruits.length> 0 && <List items={fruits} category = "Fruits"/>}
    {vegetables.length > 0 && <List items={vegetables} category = "vegetables"/>}
    </>
  );

 
}

export default App
