import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person'

const App = props => {
	const [personsState,setPersonsState] = useState ({
			persons: [
				{ name: 'Max', age: 28},
				{ name: 'Mia', age: 12},
				{ name: 'Rod', age: 27},
			]

	}  );

const [otherState, setOtherState]  = useState('some other value');


	console.log(personsState,otherState)
  

	const switchNameHandler = () => {
			console.log('Was Clicked!!!')
			// DON'T DO THIS: this.state.persons[0].name = 'Maximilian'; USE:
			setPersonsState({
			persons: [
				{ name: 'Maximilian', age: 28},
				{ name: 'Mia', age: 12},
				{ name: 'Rod', age: 99}
			]
			})		
	} 



	return (			
		// good to close in just one root element
	    <div className="App"> 
			<h1>Hi, i’m a React</h1>
			
			<button onClick={switchNameHandler} >Switch Name</button>
			
			<Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
			<Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
			<Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
			
			
	    </div>
	);
		// React.createElement('element',{className:'myclass'}, 'myText')
		// 	return React.createElement('div',{className:'App'}, React.createElement('h1', {className:'title'},'Hi, I’m React App!!!'))
}

export default App;


	
