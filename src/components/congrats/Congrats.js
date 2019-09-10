import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulatory message.
 * @function Congrats
 * @param {Object} props - React props. 
 * @returns {JSX.Element} - Rendered component or null if props success is false.
*/

const Congrats = (props) => {
    if (props.success) {
        return (
            <div className = "alert alert-success" data-test="component-congrats">
                <span data-test="congrats-text">
                    Congrats, you guessed the word
                </span>
            </div>
        );
    }
    return <div data-test="component-congrats"/>
};

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;
