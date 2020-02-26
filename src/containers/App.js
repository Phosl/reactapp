import React, {Component} from 'react';
import classes from './App.module.scss';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context'

class App extends Component {
  constructor(props) {
    super(props)
    console.log('[App.js] constructor')
    // its possible to inizializate the state here
    // with this.state = 
    // insted of this.setState()
  }
  state = {
    persons: [
      {id: 'id001', name: 'Max', age: 28},
      {id: 'id002', name: 'Mia', age: 12},
      {id: 'id003', name: 'Rod', age: 27},
    ],
	showPersons: false,
  showCockpit: true,
  changeCounter: 0,
  authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivateStateFromProps', props)
    return state
  }
  //   componentWillMount() {
  //	 preparing state correcticly
  //     console.log('[App.js] componentWillMount ')
  //   }
  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }
  shouldComponentUpdate(nextProps, nextState) {
	console.log('[App.js] shouldComponentUpdate');
	// return false; block app
	return true;
  }
  componentDidUpdate(){
	console.log('[App.js] componentDidUpdate');
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex], // prendo persona singola
    }
    person.name = event.target.value // aggiorno con il valore dell'evento
    const persons = [...this.state.persons] //copia del vecchio elemento
    persons[personIndex] = person // aggiorno la copia del vecchio elemento con il nuovo
    // this.setState({
    //   persons: persons, 
    //   changeCounter: this.state.changeCounter + 1
    // }) 

    // Questa modifica per utilizzare il changecounter
    // non aggiorna con il vecchio contatore this.state.changeCounter
    // ma con lo stato precedente 
    // piu sicuro e gestibile 
    this.setState((prevState, props) => {
      return {
        persons:persons,
        changeCounter: prevState.changeCounter + 1
      };
    });
    
    // // settare stato con il nuovo elemento
  }

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  toggleRemoveCockpitHandler = () => {
	//create a var that store the state  
	const doesShow = this.state.showCockpit
	// setstate with the inverted var
	this.setState({showCockpit: !doesShow})
  }

  loginHandler = () => {
    this.setState({authenticated: true})
    console.log('[App.js] Authenticated!!!')
  }

  render() {
    console.log('[App.js] Render')
    let persons = null

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          isAuthenticated = {this.state.authenticated}
        />
      )
    }
    return (
      <Aux classes={classes.App}>
	      <button onClick={this.toggleRemoveCockpitHandler}>Remove Cockpit</button>
		    <AuthContext.Provider value={{authenticated:this.state.authenticated, login:this.loginHandler}}>
          {this.state.showCockpit ? 
            <Cockpit
                  showPersons={this.state.showPersons}
                  personsLength={this.state.persons.length}
                  clicked={this.togglePersonsHandler}
                  titleApp={this.props.titleApp}
            />  : null }
          {persons}
        </AuthContext.Provider>
      </Aux>
    )
  }
}

export default withClass(App, classes.App);
