import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
    let guessedWordsContents;
    if (props.guessedWords.length > 0) {
        guessedWordsContents = 
        (<>
            <h3>Guessed Words</h3>
            { props.guessedWords.map((guessedWord, index) => (
            <div data-test="guessed-container" key={index}>
                <span data-test="guessed-word">{guessedWord.word}</span>
                <span data-test="guessed-match">{guessedWord.match}</span>
            </div>
            ))}
        </>)
    } else {
        guessedWordsContents = (<div data-test="no-guessed-word">Try to guess the secret word!</div>);
    }

    return (
        <div data-test="component-guessed-words">
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
