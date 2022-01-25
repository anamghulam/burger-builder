import react from "react";

const Validation = (props) => {

    let validationMessage = 'text long enough';
    if (props.inputLength <= 5) {
        validationMessage = 'Text is too short!';
    }

    return (
        <div>
            {validationMessage}
        </div>
    )
}
export default Validation;