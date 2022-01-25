import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

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
        userInput: ''
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

    deleteCharacterHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({ userInput: updatedText });
    }

    inputChangeHandler = (event) => {
        this.setState({ userInput: event.target.value });
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

        this.setState({ persons: persons });
    }

    render() {
        const style = {
            backgroundColor:
                'white',
            font: 'interit',
            border: '1px solid blue',
            padding: '10px',
            cursor: 'pointer'
        }

        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(
                        (person, index) => {
                            return <Person
                                click={() => this.deletePersonHandler(index)}
                                name={person.name}
                                age={person.age}
                                key={person.id}
                                change={(event) => this.nameChangeHandler(event, person.id)} />
                        }
                    )}

                </div>
            )
        }

        let charList = this.state.userInput.split('').map((ch, index) => {
            return <Char
                character={ch}
                key={index}
                clicked={() => this.deleteCharacterHandler(index)} />
        })
        return (
            <div className="App">
                <h1>Hi, I am a react app!!!</h1>
                <button style={style} onClick={this.toggleViewListHandler}>Click to show list</button>
                {persons}

                <h1>Below is assignment stuff done</h1>

                <input
                    type="text"
                    onChange={this.inputChangeHandler}
                    value={this.state.userInput}
                />
                <p>{this.state.userInput}</p>
                <Validation inputLength={this.state.userInput.length} />
                {charList}
            </div>
        )

    }

}

export default App;

