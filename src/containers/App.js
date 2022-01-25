import React, { Component } from 'react';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  //constructor functions to test CREATION lifecycle step 1
  constructor(props) {
    super(props);
    console.log('[App.js] constructor executed here...')
  }
  //step 2 of lifecycle method
  static getDerivedStateFromProps(props, state) {
    console.log('[inside App.js ] getDerivedStateFromProps function executed here. It will go to render function next.', props);
    return state;
  }
  //step 3 and final method of CREATION lifecycle method
  componentDidMount() {
    console.log('[App.js] componentDidMount executing now');
  }

  state = {
    persons: [
      {
        id: '11',
        name: "Mafe",
        age: 20
      },
      {
        id: '22',
        name: "Ale",
        age: 32
      },
      {
        id: '33',
        name: "Paige",
        age: 29
      }
    ],
    usernameTest: "this is username",
    showPersons: false,
    userInput: '',
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }


  toggleViewListHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }

  deletePersonHandler = (personIndex) => {
    //const allPersons = this.state.persons;
    //const allPersons = this.state.persons.slice();
    const allPersons = [...this.state.persons];
    allPersons.splice(personIndex, 1);
    this.setState({ persons: allPersons })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    //copied here and updated one element
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    //below is best practice to use setState, if state change depends upon previous state then we must pass prevState as function argument
    this.setState((prevState, props) => {
      return { persons: persons, changeCounter: prevState.changeCounter + 1 }
    });

    const loginHandler = () => {
      this.setState({ authenticated: true })
    }
  }

  render() {
    console.log('[inside App.js] render start at this stage.')
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangeHandler} />
      )

    }

    return (
      <div className={classes.App}>
        <button
          onClick={() => {
            this.setState({ showCockpit: false })
          }}
        >
          Remove Cockpit
        </button>
        <p>{this.state.changeCounter}</p>
        {this.state.showCockpit ?
          <Cockpit
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.toggleViewListHandler}
            login={this.loginHandler} />
          : null}
        {persons}

      </div>
    )
  }
}

export default App;

