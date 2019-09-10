import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
    let guessedWordsContents;
    if (props.guessedWords.length > 0) {
        guessedWordsContents = 
        (<div>
            <h3>Guessed Words</h3>
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Guess</th>
                        <th>Matching Letters</th>
                    </tr>
                </thead>
                <tbody>
                    { props.guessedWords.map((guessedWord, index) => (
                    <tr data-test="guessed-container" key={index}>
                        <td data-test="guessed-word" width = "70%">{guessedWord.word}</td>
                        <td data-test="guessed-match" width = "30%">{guessedWord.match}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>)
    } else {
        guessedWordsContents = (<div data-test="no-guessed-word">Try to guess the secret word!</div>);
    }

    return (
        <div 
            className = "container"
            data-test="component-guessed-words"
        >
            { guessedWordsContents }
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            word: PropTypes.string.isRequired,
            match: PropTypes.number.isRequired
        })
    ).isRequired,
}

export default GuessedWords;
