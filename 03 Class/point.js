/** Class representing a point. */
class Point {
    /**
     * Create a point
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     */
    constructor(x, y) {
        /** @member {number} */
        this.x = x;
        /** @member {number} */
        this.y = y;
    }

    /**
     * Distance from origin to point
     * @returns {number}
     */
    getDistance() {
        // ...
    }

    /**
     * Convert a string containing two comma-separated numbers into a point.
     * @param {string} str - The string containing two comma-separated numbers.
     * @return {Point} A Point object.
     */
    static fromString(str) {
        // ...
    }
}
