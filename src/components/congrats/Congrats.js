import React from "react";

/**
 * Functional react component for congratulatory message.
 * @function Congrats
 * @param {Object} props - React props. 
 * @returns {JSX.Element} - Rendered component or null if props success is false.
*/

export default (props) => {
    const congratsText = props.success ? "Congrats, you guessed the word" : null;
    return (
        <div data-test="component-congrats">
            <span data-test="congrats-text">
                { congratsText }
            </span>
        </div>
    );
};
