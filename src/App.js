import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
	render() {

		return (
			// good to close in just one root element
		    <div className="App"> 
				<h1>Hi, i’m a React</h1>
				
				<Person />
				<Person />
				<Person />
		    
		    </div>
		);
// React.createElement('element',{className:'myclass'}, 'myText')
// 	return React.createElement('div',{className:'App'}, React.createElement('h1', {className:'title'},'Hi, I’m React App!!!'))
	}
}

export default App;
