import React, {Component} from 'react'
import Person from './Person/Person'

class Persons extends Component {
  /*  we comment this becouse its initial state is undefined. */
  //   static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromProps ')
  //     return state
  //   }

  //  componentWillReceiveProps(props) {
  //     console.log('[Persons.js] componentWillReceiveProps ',props);
  //  }



    // return true; fake check 

// looking at performance 
// persons should be update / render ? 
// we can do better for permormance 
// check if the nextProps of persons is changed 
// if change we need to render
// else no
  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Persons.js] shouldComponentUpdate ')
    if(nextProps.persons !== this.props.persons || 
        nextProps.changed !== this.props.changed ||
        nextProps.clicked !== this.props.clicked)

        {
        return true; 
    } else {
        return false;
    }
}

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate ')
    return {message: 'Snapshot!'}
  }
  // Removed
  //   componentWillUpdate() {
  //     console.log('[Persons.js] componentWillUpdate ')
  //   }

  componentDidUpdate() {
    console.log('[Persons.js] componentDidUpdate ')
  }

  componentWillUnmount() {
    console.log('[Persons.js]  componentWillUnmount ')
  }

  render() {
    console.log('[Persons.js] Rendering...')

    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          key={person.id}
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
        />
      )
    })
  }
}
export default Persons
