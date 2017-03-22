/**
 * Creates a new instance of class Person.
 * @class Represents a person.
 * @param {string} name name of person.
 */
function Person(name) {
    /** @type {string} */
    this.name = name;

    /**
     * This function says something
     * @function
     * @memberOf Person
     */
    this.hello = function(){
        alert(`Say hello`);
    }
}
