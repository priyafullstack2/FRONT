import Proptypes from "prop-types";

function List(props){

    const category = props.category;
 const itemList = props.items;

//fruits.sort((a,b) => a.name.localeCompare(b.name));//ALPHAABETICAL
//fruits.sort((a,b) => a.name.localeCompare(a.name));//reverse Alphabetical
//fruits.sort((a,b) => a.calories - b.calories);//Numeric
//fruits.sort((a,b) => b.calories - a.calories);//ReverseNumeric

//const lowCalFruits = fruits.filter(fruit => fruit.calories <100);
//const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

const listItems = itemList.map(item => <li key ={item.id}>
                                             {item.name}: &nbsp;
                                             <b>{item.calories}</b></li>);

return(<>
<h3 className = "list-category">{category}</h3>
<ol className="list-items">{listItems}</ol>
</>
);

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayof(PropTypes.shape({id: PropTypes.nymber,
                                                name: PropTypes.string,
                                                 category: PropTypes.number})),
}


}
List.defaultProps = {
    category:"category",
    items:[],
}
export default List