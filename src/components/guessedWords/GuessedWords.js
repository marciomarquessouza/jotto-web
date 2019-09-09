import React from "react";
import PropTypes from "prop-types";

const GuessedWords = (props) => {
    if (props.guessedWords.length > 0) {
        return (
            <div data-test="component-guessed-words">
                { props.guessedWords.map((guessedWord) => (
                    <div data-test="guessed-word" key={guessedWord.word}>
                        <span>{guessedWord.word}</span>
                        <span>{guessedWord.match}</span>
                    </div>
                ))}
            </div>
        );
    }
    return (<div data-test="no-guessed-word">Try to guess the secret word!</div>);
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
