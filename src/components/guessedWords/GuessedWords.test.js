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
    { word: "sorry", match: 2 },
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

describe('/components/GuessedWords', () => {
    it("shouldn't throw warning with expected props ", () => {
        checkProps(GuessedWords, mockProps);
    });

    it('should renders GuessedWords component correctly', () => {
        const wrapper = setup(mockProps);
        const guessedWords = findByDataTest(wrapper, "component-guessed-words");
        expect(guessedWords.length).toBe(1);
    });

    it('should renders a specific message when no exist guessed words', () => {
        const wrapper = setup();
        const noGuessedWords = findByDataTest(wrapper, "no-guessed-word");
        expect(noGuessedWords.length).toBe(1);
    });

    it('should renders all guessed words received by parent component properly', () => {
        const wrapper = setup(mockProps);
        const guessedWordsList = findByDataTest(wrapper, "guessed-word");
        expect(guessedWordsList.length).toBe(3);
    });

    it('should render each guessed word and matchs quantity properly', () => {
        const wrapper = setup(mockProps);
        const guessedWordsList = findByDataTest(wrapper, "guessed-word");
        guessedWordsList.forEach((node) =>{
            const word = node.childAt(0).text();
            const match = parseInt(node.childAt(1).text(), 10);
            expect(
                mockProps.guessedWords.filter(
                    (guessed) => (guessed.word === word && guessed.match === match)
                ).length).toBe(1);
        })
    });
});