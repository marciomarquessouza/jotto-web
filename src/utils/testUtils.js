/**
 * findByDataTest
 * @function
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper 
 * @param {String} dataTest - Value of data-test to search the component
 * @returns {ShallowWrapper}
 */
export const findByDataTest = (wrapper, dataTest) => {
    return wrapper.find(`[data-test="${dataTest}"]`);
}
