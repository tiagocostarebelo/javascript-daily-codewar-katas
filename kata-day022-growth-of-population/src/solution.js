/**
 * Problem statement:
 *
 * In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the 
 * town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
 * 
 * More generally given parameters:
 * p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)
 * the function nb_year should return n number of entire years needed to get a population greater or equal to p.
 * aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)
 * 
 * Note:
 * Don't forget to convert the percent parameter as a percentage in the body of your function: if the parameter percent is 2 you have to convert it to 0.02.
 * There are no fractions of people. At the end of each year, the population count is an integer: 252.8 people round down to 252 persons.
 *
 * @param { p0 } number - Given parameter with the initial population number
 * @param { percent } number - Given parameter with the growth percentage (integer)
 * @param { aug } number - Given parameter with the number of inhabitants that move in each year
 * @param { p } number - Given parameter with the goal number of people
 * @returns { yearCount }  - the total count of years that'll take to reach p
 *
 * @example
 * nbYear(1500, 5, 100, 5000); // Returns: 15
 * nbYear(1500000, 2.5, 10000, 2000000); // Returns: 10
 */

export function nbYear(p0, percent, aug, p) {
    let totalPop = p0;
    let yearCount = 0;
    while (totalPop < p) {
        totalPop += Math.floor(((totalPop * percent) / 100) + aug);
        yearCount++;
    }
    return yearCount;
}