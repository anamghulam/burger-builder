import react from "react";

const userInput = (props) => {
    const inputStyel = {
        border: '2px solid green'
    }
    return <input
        style={inputStyel}
        type="text"
        onChange={props.changed}
        value={props.currentName}
    />;

}
export default userInput;