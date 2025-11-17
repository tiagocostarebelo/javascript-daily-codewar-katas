/**
 * Problem statement:
 * You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
 * 
 * @param { strarr } array - The array of strings given 
 * @param { k } number - The number of elements in the array we need to concatenate
 * @returns { string } Returns the lengthiest concatenated of consecutive strings
 * 
 * @example
 * longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2) == "abigailtheta"
 * longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) == "oocccffuucccjjjkkkjyyyeehh"
 * 
 */

export function longestConsec(strarr, k) {
    let longest = "";
    if (k <= 0 || k > strarr.length) return "";
    if (!Array.isArray(strarr) || strarr.length === 0) return "";
    for (let i = 0; i <= strarr.length - k; i++) {
        let current = strarr.slice(i, i + k).join("");
        if (current.length > longest.length) {
            longest = current;
        }
    }
    return longest;

}