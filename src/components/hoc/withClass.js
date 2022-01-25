import React from "react";

const withClass = (WrappedComponent, className) => {
    return (props) => (
        <div className={className}>
            {
                <WrappedComponent {...props} />
            }
            {/* <WrappedComponent props={props} /> */}
        </div>
    )
}
export default withClass;