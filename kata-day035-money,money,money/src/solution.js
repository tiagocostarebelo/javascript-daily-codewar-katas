/**
 * Problem statement:
 *
 * Mr. Scrooge has a sum of money 'P' that he wants to invest. Before he does, he wants to know how many years 'Y' this sum 'P' has to be kept in the bank in order for it to amount to a desired sum of money 'D'.
 * The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly. After paying taxes 'T' for the year the new sum is re-invested.
 * Note to Tax: not the invested principal is taxed, but only the year's accrued interest
 * 
 * Thus Mr. Scrooge has to wait for 3 years for the initial principal to amount to the desired sum. 
 * Your task is to complete the method provided and return the number of years 'Y' as a whole in order for Mr. Scrooge to get the desired sum. 
 * Assumption: Assume that Desired Principal 'D' is always greater than the initial principal. However it is best to take into consideration that if Desired Principal 'D' is equal to Principal 'P' 
 * this should return 0 Years.
 *
 * @param { principal } integer - The initial amount of money
 * @param { interest } decimal - The interest rate per year
 * @param { tax } decimal - The tax to be paid per year
 * @param { desired } integer - The goal amount of money
 * @returns { integer } Returns the total number of years it will take to get from the principal to the desired
 *
 * @example
 * calculateYears(1000, 0.05, 0.18, 1100) ; // Returns: 3
 */

export function calculateYears(principal, interest, tax, desired) {
    let total = principal;
    let count = 0;
    while (total < desired) {
        const interestYear = total * interest;
        const taxYear = interestYear * tax;
        total += interestYear - taxYear;
        count++;
    }
    return count;
}