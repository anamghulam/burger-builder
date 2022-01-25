import React, { Component } from "react";
import PropTypes, { func } from 'prop-types';
import Person from "./Person/Person";

class Persons extends Component {

    //Starting testing component UPDATE lifecycle
    //first method here
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDerivedStateFromProps executing inside persons...!!');
    //     return state;
    // }
    //second method of UPDATE lifecycle
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate is executing');
        //this following condition id done for better optimization, if something is not changed actually then we can stop rendering at this stage 
        if (nextProps.persons !== this.props.persons) {
            return true;
        } else {
            return false;
        }
    }
    //3rd method of UPDATE lifecycle
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate executed >>>>>>');
        console.log('after it, RENDER() will execute and it will go under child components and will finsishe everthing there and get back here to execute last method of lifecycle below.');
        return { message: 'Snapshot..!' };
    }
    //4th and last method of UPDATE lifecycle
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate executed at this state...!!')
    }
    //one more lifecylec mehtod
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount*** you can do anything here that you want to do right before component is removed.');
    }

    render() {
        console.log('[Persons.js] rendering now!...');
        return this.props.persons.map(
            (person, index) => {
                return <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    change={(event) => this.props.changed(event, person.id)} />
            }
        );

    }

}

Persons.propTypes = {
    clcik: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
}
export default Persons;