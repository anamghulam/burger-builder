import React, { Component } from "react";
import withClass from '../../hoc/withClass';
import classes from './Person.module.css';
import AuthContext from "../../context/auth-context";

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    //used for Context API
    static contextType = AuthContext;

    //Starting testing component UPDATE lifecycle
    //first method here
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[*** Person.js] getDerivedStateFromProps executing inside person!!');
    //     return state;
    // }
    //second method of UPDATE lifecycle
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[*** Person.js] shouldComponentUpdate is executing');
        return true;
    }
    //3rd and last method of UPDATE lifecycle
    componentDidUpdate() {
        console.log('[*** Person.js] componentDidUpdate executed at this state!!');
    }

    componentDidMount() {
        console.log(this.context.authenticated);
    }

    render() {
        console.log('[single Person.js]  rending now');
        return (
            <div className={classes.Person}>
                {this.context.authenticated ? 'Authenticated' : 'Please Login!'}
                <p onClick={this.props.click}>I am a person! my name is:<span> {this.props.name} </span> my age is {this.props.age} years.</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.change}
                    value={this.props.name}
                    ref={this.inputElementRef} />
            </div>
        );
    }
}

export default withClass(Person, classes.Person);