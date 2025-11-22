/**
 * Problem statement:
 *
 * There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out! 
 * 
 * Input
 * Customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out. 
 * n: a positive integer, the number of checkout tills.
 * 
 * Output
 * The function should return an integer, the total time required.
 *
 * @param { customers } array - The provided array with the total time each customer takes
 * @param { n } integer - The number of tills available
 * @returns { integer } - Returns the total time for all the customers to check out
 *
 * @example
 * queueTime([5,3,4], 1); // Returns: 12
 * queueTime([10,2,3,3], 2) // Returns: 10
 */

export function queueTime(customers, n) {
    const tills = new Array(n).fill(0);
    for (let time of customers) {
        const minValue = Math.min(...tills);
        const indexOfNextFreeTill = tills.indexOf(minValue);
        tills[indexOfNextFreeTill] += time;
    }
    return Math.max(...tills);
}