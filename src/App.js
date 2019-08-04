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
	switchNameHandler = () => {
		console.log('Was Clicked!!!')
		// DON'T DO THIS: this.state.persons[0].name = 'Maximilian'; USE:
		this.setState({
		persons: [
			{ name: 'Maximilian', age: 28},
			{ name: 'Mia', age: 12},
			{ name: 'Rod', age: 99}
		]
		})
		
	}

	render() {
		return (			
			// good to close in just one root element
		    <div className="App"> 
				<h1>Hi, i’m a React</h1>
				
				<button onClick={this.switchNameHandler} >Switch Name</button>
				
				<Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
				<Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
				<Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
				
				
		    </div>
		);
		// React.createElement('element',{className:'myclass'}, 'myText')
		// 	return React.createElement('div',{className:'App'}, React.createElement('h1', {className:'title'},'Hi, I’m React App!!!'))
	}
}

export default App;
