import react from "react";

import '../Person/Person.css';

const userOutput = (props) => {
    return (
        <div>
            <p>SOme randum text. this name next is being passed <span className="outputSpan"> {props.userName} </span></p>
            <p>SOme more randum text</p>
        </div>
    )
}
export default userOutput;