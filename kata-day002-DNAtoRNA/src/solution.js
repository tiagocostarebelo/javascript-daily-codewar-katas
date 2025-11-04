/**
 * Problem statement:
 * 
 * Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').
 * Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').
 * Create a function which translates a given DNA string into RNA.
 * 
 * For example:
 * 
 * "GCAT"  =>  "GCAU"
 * 
 * The input string can be of arbitrary length - in particular, it may be empty. 
 * All inputs is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
 * 
 * @param { str } string - The DNA sequence to be translated
 * @returns { str } - Returns the translated RNA sequence
 * 
 * @example
 * DNAtoRNA("GCAT"); // Returns: "GCAU"
 * DNAtoRNA("TTTT"); // Returns: "UUUU"
 */

export function DNAtoRNA(dna) {
    const newDNA = dna.toLowerCase().split("").map((char) => (
        char === "t" ? "u" : char
    ));
    const rna = newDNA.join("").toUpperCase();
    return rna;
}