import checkPropTypes from "check-prop-types";

/**
 * Find component by data-test value
 * @function findByDataTest
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper 
 * @param {String} dataTest - Value of data-test to search the component
 * @returns {ShallowWrapper}
 */
export const findByDataTest = (wrapper, dataTest) => {
    return wrapper.find(`[data-test="${dataTest}"]`);
};

/**
 * Check Prop-Types inside React component
 * @function checkProps
 * @param {JSX.Element} component - React component used in the test
 * @param {Any} props - Component props
 */
export const checkProps = (component, props) => {
    const type =  "propTypes";
    const propsError = checkPropTypes(
        component[type],
        props,
        "prop",
        component.name
    );
    expect(propsError).toBeUndefined();
};
