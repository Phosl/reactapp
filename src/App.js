import React, {Component} from 'react';
import classes from './App.module.scss';
import Person from './Person/Person';



class App extends Component {

	state = {
		persons: [
			{ id:'aza', name: 'Max', age: 28},
			{ id:'axa', name: 'Mia', age: 12},
			{ id:'aca', name: 'Rod', age: 27}
		],
		showPersons: false
	}
	nameChangedHandler = (event, id) => { 
		//findIndex find element in the array but get the index of it 
		// scorre in tutti gli elementi dell'array ( come MAP )
		const personIndex = this.state.persons.findIndex(p => {
			return p.id === id;
		  });
		const person = {
			...this.state.persons[personIndex] // prendo persona singola
		}

		person.name = event.target.value; // aggiorno con il valore dell'evento
		const persons =[...this.state.persons]; //copia del vecchio elemento

		persons[personIndex] = person; // aggiorno la copia del vecchio elemento con il nuovo 
		// settare stato con il nuovo elemento
		this.setState({ persons:persons })
		
	} 


	deletePersonHandler = (personIndex) => {
		// A BAD Way
		//-----------
		// fetch all persons
		//const persons = this.state.persons;
		// create a new version of array Splice rimuove un elemento dall'array
		//persons.splice(personIndex,1); 
		// setto lo stato con il nuovo array privo di un elemento
		//this.setState({persons: persons})
		// with this we mutate the original state
	
		// A GOOD Way
		//-----------
		// create a copy of the array
		// we can use a Slice() 
		// Slice =>  A new array containing the extracted elements.
		// with out argoments its simply return all the array 
		//const persons = this.state.persons.slice();
	
		//BUT
		//-----------
		// we can do it also with a jsx using SPREAD operator
		const persons = [...this.state.persons];
		persons.splice(personIndex,1); 
		this.setState({persons:persons})
		// qundi creare una copia, cambiarla ed aggiornare lo stato con il nuovo stato

	}
	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({showPersons: !doesShow});
	}


	render() {
		let persons = null;
		let btnClass = '';

		if(this.state.showPersons) {
			persons = (
				<div>
				{this.state.persons.map((person, index) => {
					return <Person 
						click={() => this.deletePersonHandler(index)}
						key={person.id}
						name={person.name} 
						age={person.age} 
						changed= {(event) => this.nameChangedHandler(event, person.id)} 					
					/>
				})}
				</div> 
			);

		btnClass = classes.red

		}

		let assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red); // class = "red"
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold); // class = ['red','bold']
		}

		return (			
			// good to close in just one root element
			// - BIND -> LEGARE
			<div className={classes.App}> 
				<h1>Hi, i’m a React</h1>
				<p className={assignedClasses.join(' ')}> Hello </p>

				<button className={btnClass} onClick={this.togglePersonsHandler} >Toggle Persons</button>

				{persons}

		    
		    </div>
		);
	}
}

export default App;



// https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/12982500#overview