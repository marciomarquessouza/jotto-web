import React from "react";
import GuessedWords from "./GuessedWords";
import { shallow } from 'enzyme';
import { findByDataTest, checkProps } from "../../utils/testUtils";

const defaultProps = {
    guessedWords: []
};

const mockProps = { guessedWords: [
    { word: "river", match: 2 },
    { word: "sower", match: 1 },
    { word: "sorry", match: 3 },
    { word: "party", match: 5 },
]};

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

describe('Props test', () => {
    it("shouldn't throw warning with expected props ", () => {
        checkProps(GuessedWords, mockProps);
    });
});

describe('Tests with no guessed words props', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup();
    });

    it('should renders a specific message when no exist guessed words', () => {
        const noGuessedWords = findByDataTest(wrapper, "no-guessed-word");
        expect(noGuessedWords.length).toBe(1);
    });

    it('should not renders GuessedWords component', () => {
        const guessedWords = findByDataTest(wrapper, "component-guessed-words");
        expect(guessedWords.length).toBe(1);
    });
});

describe('Tests with guessed words props', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = setup(mockProps);
    });

    it('should renders all guessed words received by parent component properly', () => {
        const guessedWordsList = findByDataTest(wrapper, "guessed-container");
        expect(guessedWordsList.length).toBe(mockProps.guessedWords.length);
    });

    it('should render each guessed word and matchs quantity properly', () => {
        const guessedWordsList = findByDataTest(wrapper, "guessed-container");
        expect(guessedWordsList.length).toBe(mockProps.guessedWords.length);
        guessedWordsList.forEach((node) =>{
            const word = findByDataTest(node, "guessed-word").text();
            const match = findByDataTest(node, "guessed-match").text();
            expect(
                mockProps.guessedWords.filter(
                    (guessed) => (guessed.word === word && guessed.match.toString() === match)
                ).length).not.toBe(0);
        })
    });
});