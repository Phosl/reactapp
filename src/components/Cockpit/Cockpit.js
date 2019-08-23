import React from "react";
import classes from "./cockpit.module.scss";

const cockpit = (props) => {


    let assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons) {
        btnClass = classes.red;
    }
    

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red); // class = "red"
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold); // class = ['red','bold']
    }



    return (
        <div className={classes.Cockpit}>
            <h1>{props.titleApp}</h1>
            <p className={assignedClasses.join(' ')}> Hello </p>
            <button className={btnClass} onClick={props.clicked} >Toggle Persons</button>
        </div>
    );

}

export default cockpit;