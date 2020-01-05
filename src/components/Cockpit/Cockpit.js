import React, {useEffect} from 'react'
import classes from './cockpit.module.scss'
// useEffect Combime functionality of all hook in one.

const Cockpit = props => {
  useEffect(() => {
    // its runs all the time compontent it rendered 
    console.log('[Cockpit.js] useEffect')
    // http request...
   const timer =  setTimeout(() => {
      console.log('!!! - [Cockpit.js] saved data to cloud')
    }, 1000);
    return () => {
        clearTimeout(timer)
        console.log('[Cockpit.js] cleanup work in useEffect')

    }
  }, [])

// Controlling useEffect
// we want to execute the useEffect only when persons change
// we can add a second arguments 
// useEffect(() => {}, secondArg )
// secondArg MUST BE AN ARRAY!!!!
// secondArg -> [props.persons]
// with an empty array [] as second arg useEffect execute just ones. 
// when component was render or unmounted (default)


useEffect(() => {
    console.log('[Cockpit.js] useEffect 2nd')
    return () => {
    console.log('[Cockpit.js] cleanup work in useEffect 2nd')
    }
});


  let assignedClasses = []
  let btnClass = ''

  if (props.showPersons) {
    btnClass = classes.red
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red) // class = "red"
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold) // class = ['red','bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.titleApp}</h1>
      <p className={assignedClasses.join(' ')}> Hello </p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  )
}

export default Cockpit
