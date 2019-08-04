import React from 'react';


// Function component - name lower case
const person = (props) => {
	return (
	<div>
		<p onClick={props.myclick} >I’m {props.name} and I am {props.age} years old </p>
		<p>{props.children}</p> 
		<input type="text" onChange={props.mychanged}  value={props.name}/>
	</div>
	) 
};

export default person;