import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../context/auth-context";
import classes from './Cockpit.module.css';

const Cockpit = (props) => {

    const toggleBtnRef = useRef();
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect ***');
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js Cleanup work going here...]');
        };
    }, []);

    let btnClass = classes.button;

    const assignedClasses = [];
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I am a react app!!!</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}
                ref={toggleBtnRef}
            >
                Click to show list
            </button>
            <button onClick={authContext.login}>Login</button>
        </div>
    )

}
export default Cockpit;