//props = read only properties that are shared between components
//a parent components can send data to a child component
//<Component key = value/>
//propTypes = a mechanism that ensures that the passed value 
//is of the correct datatype
//age: PropType.number
// Default props: Default values for props in case they are not 
//passed from the parent component
//name:"Guest"
//

import Student from "./Student.jsx"


function App() {
  
  return (
    <>
    <Student name = "Spongebob" age ={30} isStudent={true}/>
    <Student name = "Priya" age ={23} isStudent={false}/>
    <Student name = "Praveen" age ={21} isStudent={false}/>
    <Student name = "Amulu" age ={43} isStudent={false}/>
    <Student name = ""/>
    </>
  );
}

export default App
