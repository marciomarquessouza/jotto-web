import React from "react";
import Congrats from "./Congrats";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByDataTest } from "../../utils/testUtils";

Enzyme.configure({ adapter: new Adapter() });

const defaultProps = { succes: false };

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {Object} props - Component props specific to this setup
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = { ...defaultProps, ...props };
    return shallow(<Congrats { ...setupProps } />);
};

describe('component/congrats', () => {
    it('should renders congrats text properly', () => {
        const wrapper = setup();
        const componentCongrats = findByDataTest(wrapper, "component-congrats");
        expect(componentCongrats.length).toBe(1);
    });

    it('should hide congrats text when props success is false', () => {
        const wrapper = setup({ success: false });
        const congratsText = findByDataTest(wrapper, "congrats-text");
        expect(congratsText.text()).toBe("");
    });

    it('should render an message with props text when succes props is true', () => {
        const wrapper = setup({ success: true });
        const congratsText = findByDataTest(wrapper, "congrats-text");
        expect(congratsText.text().length).not.toBe(0);
    });

});