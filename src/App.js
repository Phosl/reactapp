import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'


import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'


class App extends Component {
	
	state = {
		persons: [
			{ name: 'Max', age: 28},
			{ name: 'Mia', age: 12},
			{ name: 'Rod', age: 27}
		],
		username : 'SuperFil'
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


	UserNameInputHandler = (event) => {
		this.setState({username:event.target.value})
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

		return (			
			// good to close in just one root element
			// - BIND -> LEGARE
		    <div className="App"> 
				<h1>Hi, i’m a React</h1>
				{/*
				DONT USE COULD BE INEFFICIENT
				<button onClick={() => this.switchNameHandler('MAXIMO')} >Switch Name</button>
				*/}
				<section>
					<button style={buttonStyle} onClick={this.switchNameHandler.bind(this,'Maximilian')} >Switch Name</button>
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
				</section>
				
				<section>
					<UserInput 
						changed = {this.UserNameInputHandler} 
						currentName = {this.state.username}
					/>
					<UserOutput username={this.state.username}  />
					<UserOutput username="Max"/>
				</section>
		    
		    
		    </div>
		);
		// React.createElement('element',{className:'myclass'}, 'myText')
		// 	return React.createElement('div',{className:'App'}, React.createElement('h1', {className:'title'},'Hi, I’m React App!!!'))
	}
}

export default App;


// https://www.udemy.com/react-the-complete-guide-incl-redux/learn/lecture/12982500#overview