import React, { useState } from 'react';
import './App.css';

import Person from './Person/Person';

const FunctionalBasedComponentApp = (props) => {

  const [personsState, setPersonsStat] = useState({
    persons: [
      {
        name: "Mafe",
        age: 20
      },
      {
        name: "Ale",
        age: 32
      }
    ]
  })

  const [otherSt, setotherSt] = useState('some ohter state for testing');

  const swithNameHandler = () => {
    console.log(otherSt, personsState);
    //this.state.persons[0].name = "Anam";
    //we should not change state like above, but like below
    setPersonsStat({
      persons: [
        {
          name: "Mafe Abc",
          age: 30
        },
        {
          name: "Ale Jhon",
          age: 42
        }
      ]
    })
  }


  return (
    <div className="App">
      <h1>Hi, I am a react app!!!</h1>
      <button onClick={swithNameHandler}>Switch State</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}>
        This could be some text inside my custom component.
      </Person>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
    </div>
  )

}

export default FunctionalBasedComponentApp;

