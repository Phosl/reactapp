import React, {PureComponent} from 'react'
import Person from './Person/Person'

class Persons extends PureComponent {
  /*  we comment this becouse its initial state is undefined. */
  //   static getDerivedStateFromProps(props, state) {
  //     console.log('[Persons.js] getDerivedStateFromProps ')
  //     return state
  //   }

  //  componentWillReceiveProps(props) {
  //     console.log('[Persons.js] componentWillReceiveProps ',props);
  //  }



// *** shouldComponentUpdate ***
// return true; fake check 

// looking at performance 
// persons should be updated / rendered ? 
// we can do better for permormance 
// check if the nextProps of persons is changed 
// if will change we'll need to render
// else no
//   shouldComponentUpdate(nextProps, nextState) {
//     console.log('[Persons.js] shouldComponentUpdate ')
//     if(nextProps.persons !== this.props.persons || 
//         nextProps.changed !== this.props.changed ||
//         nextProps.clicked !== this.props.clicked)

//         {
//         return true; 
//     } else {
//         return false;
//     }
// }
// PureComponent its just a component with inside shouldComponentUpdate for all the props

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
