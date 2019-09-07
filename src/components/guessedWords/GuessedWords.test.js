import React from "react";
import GuessedWords from "./GuessedWords";
import { shallow } from 'enzyme';
import { findByDataTest, checkProps } from "../../utils/testUtils";

const defaultProps = {
    guessedWords: []
};

/**
 * Factory function to create ShallowWrapper for the GuessedWords component
 * @function setup
 * @param {Object} props - GuessedWords props received from partent component 
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords { ...setupProps }/>);
}

describe('/components/GuessedWords', () => {
    it('should renders GuessedWords component correctly', () => {
        const wrapper = setup();
        const guessedWords = findByDataTest(wrapper, "guessed-words-component");
        expect(guessedWords.length).toBe(0);
    });

    it('should renders all guessed words received by parent component properly', () => {
        
    });

    it('should renders nothing when no exist any guessed word', () => {
        
    });
});