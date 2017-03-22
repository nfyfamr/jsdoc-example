/**
 *
 * @param {string} [name=Peter] The name of user.
 * @param {number} First parameter
 * @param {number} Second parameter
 * @return {string} `${name} has calculated: ${param1} + ${param2} = ${param1+param2}`
 */
function adder(param1, param2, name='Peter') {
    return `${name} has calculated: ${param1} + ${param2} = ${param1+param2}`;
}
