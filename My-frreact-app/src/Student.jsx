
//<!--If isStudent within props is true then we'll turn a string literal  of yes otherwise we'll return the string literal is no-->

import PropTypes from 'prop-types'

function Student(props){
return(
    <div className ="student">
<p> Name: {props.name}</p>
<p>Age: {props.age}</p>

<>Student: {props.isStudent ? "yes" : "No"}</> 


</div> 
);
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
}
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}
export default Student