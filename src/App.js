import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	
	state = {
		persons: [
			{ name: 'Max', age: 28},
			{ name: 'Mia', age: 12},
			{ name: 'Rod', age: 27}
		]
	}
	
	//methods 
	switchNameHandler = (newName) => {
		console.log('Was Clicked!!!')
		// DON'T DO THIS: this.state.persons[0].name = 'Maximilian'; USE:
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


	render() {

	const style={
		backgroundColor: 'green',
		font:'inherit',
		padding:'8px 20px',
		cursor:'pointer',
		color:'white',
		border: '0'
	};

		return (			
			// good to close in just one root element
			// - BIND -> LEGARE
		    <div className="App"> 
				<h1>Hi, i’m a React</h1>
				
	{
/*
				DONT USE COULD BE INEFFICIENT
				<button onClick={() => this.switchNameHandler('MAXIMO')} >Switch Name</button>
*/
	}
				<button style={style} onClick={this.switchNameHandler.bind(this,'Maximilian')} >Switch Name</button>
				
				<Person 
				name={this.state.persons[0].name} 
				age={this.state.persons[0].age} 
				/>
				
				<Person 
				name={this.state.persons[1].name} 
				age={this.state.persons[1].age} 
				myclick={this.switchNameHandler.bind(this,'MAX!')}
				mychanged={this.nameChangeHandler}
				/>
				
				<Person 
				name={this.state.persons[2].name} 
				age={this.state.persons[2].age} 
				/>
				
				
		    </div>
		);
		// React.createElement('element',{className:'myclass'}, 'myText')
		// 	return React.createElement('div',{className:'App'}, React.createElement('h1', {className:'title'},'Hi, I’m React App!!!'))
	}
}

export default App;
