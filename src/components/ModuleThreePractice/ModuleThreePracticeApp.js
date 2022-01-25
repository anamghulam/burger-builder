import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    persons: [
      {
        name: "Mafe",
        age: 20
      },
      {
        name: "Ale",
        age: 32
      }
    ],
    usernameTest: "this is username"
  }

  swithNameHandler = () => {
    //console.log('button clicked ');
    //this.state.persons[0].name = "Anam";
    //we should not change state like above, but like below
    this.setState({
      persons: [
        {
          name: "Mafe Abc",
          age: 20
        },
        {
          name: "Ale",
          age: 32
        }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name: "Mafe Abc",
          age: 20
        },
        {
          name: event.target.value,
          age: 32
        }
      ]
    })
  }

  usernameChangeHandler = (event) => {
    this.setState({
      usernameTest: event.target.value
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'interit',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hi, I am a react app!!!</h1>
        <button style={style} onClick={this.swithNameHandler}>Switch State</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>
          This could be some text inside my custom component.
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          change={this.nameChangeHandler}
        />
        <h1>Below is the work from unit assignment.</h1>

        <UserInput
          changed={this.usernameChangeHandler}
          currentName={this.state.usernameTest}
        />
        <UserOutput userName="Mafe" />
        <UserOutput userName={this.state.usernameTest} />
      </div>
    )

  }

}

export default App;

