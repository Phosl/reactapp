import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'



class App extends Component {
	
	state = {
		persons: [
			{ name: 'Max', age: 28},
			{ name: 'Mia', age: 12},
			{ name: 'Rod', age: 27}
		],
		showPersons: false
	}
	
	//methods 
	switchNameHandler = (newName) => {
		console.log('Was Clicked!!!')
		// DON'T DO THIS: this.state.persons[0].name = 'Maximilian'; USE -->
		this.setState({
		persons: [
			{ name: newName, age: 28},
			{ name: 'Mia', age: 12},
			{ name: 'Rod', age: 99}
		]
		})
		
	}
	nameChangeHandler = (event) => {
		this.setState({
		persons: [
			{ name: "Max", age: 28},
			{ name: event.target.value, age: 12},
			{ name: 'Rod', age: 99}
		]
		})

		
	}
	
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}

	deletePersonHandler = (personIndex) => {
		// fetch all persons
		const persons = this.state.persons;
		// create a new version of array Splice rimuove un elemento dall'array
		persons.splice(personIndex,1); 
		// setto lo stato con il nuovo array privo di un elemento
		this.setState({persons: persons})
	}
	render() {

		const buttonStyle={
			backgroundColor: 'green',
			font:'inherit',
			padding:'8px 20px',
			cursor:'pointer',
			color:'white',
			border: '0'
		};

		
		let persons = null;
		if(this.state.showPersons) {
			persons = (
				<div>
				{this.state.persons.map((person, index) => {
					return <Person 
						myclick={() => this.deletePersonHandler(index)}
						name={person.name} 
						age={person.age} 					
					/>
				})}
				</div> 
			);
		}

		return (			
			// good to close in just one root element
			// - BIND -> LEGARE
		    <div className="App"> 
				<h1>Hi, i’m a React</h1>
				<button style={buttonStyle} onClick={this.togglePersonsHandler} >Toggle Persons</button>
				{persons}

		    
		    </div>
		);
	}
}

export default App;


// https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/12982500#overview