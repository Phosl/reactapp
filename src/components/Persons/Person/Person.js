import React, {Component} from 'react'
import PropTypes from 'prop-types';

import classes from './Person.module.css'
import Aux from '../../../hoc/Aux.js' 
import withClass from '../../../hoc/withClass'
import AuthContext from '../../../context/auth-context';

// Function component - name lower case
class Person extends Component {

  constructor(props) {
    // Se abbiamo costructor dobbiamo definirlo super passandogli le props
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    this.inputElementRef.current.focus();
    console.log(this.context.authenticated  )
    // this.inputElement.focus();
  }
  render() {
    console.log('[Person.js] Rendering')

    return (
      // * al posto di Aux (componente wrapper fatto da noi) 
      //possiamp usare React.Fragment o Fragment se importato
        // <Fragment >
      <Aux className={classes.Person}>
        
        {/* <AuthContext.Consumer>
          {context => context.authenticated ? <p>Authenticated!!!</p> : <p>Please Login</p> }
        </AuthContext.Consumer> */}

          {this.context.authenticated ? <p>Authenticated!!!</p> : <p>Please Login</p> }


        <p key="a1" onClick={this.props.click}>
          I’m {this.props.name} and I am {this.props.age} years old{' '}
        </p>
        <p key="a2">{this.props.children}</p>
        <input 
          key="a3" 
          // ref={(inputEl)=> {this.inputElement = inputEl}}
          ref= {this.inputElementRef} 
          type="text" 
          onChange={this.props.changed} 
          value={this.props.name} 
        />
      </Aux>

        // </Fragment>
    )


    // return (
    //   <div className={classes.Person}>
    //     <p onClick={this.props.click}>
    //       I’m {this.props.name} and I am {this.props.age} years old{' '}
    //     </p>
    //     <p>{this.props.children}</p>
    //     <input type="text" onChange={this.props.changed} value={this.props.name} />
    //   </div>
    // )
    // its possible to have multiple elemente returning an array [item1,item2, ... ] 
    // They MUST HAVE AN KEY on props
    // return (
    //   [
    //   // <div className={classes.Person}>
    //     <p key="1" onClick={this.props.click}>
    //       I’m {this.props.name} and I am {this.props.age} years old{' '}
    //     </p>,
    //     <p key="2">{this.props.children}</p>,
    //     <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    //   // </div>
    //   ] 
    // )



  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
};


export default withClass(Person, classes.Person)
