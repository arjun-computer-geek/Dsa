/*
Check if Two Strings are Anagrams:

Problem: Given two strings, determine if one is an anagram of the other.
Example:

Input: "listen", "silent"
Output: true
*/

function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase()
    const cleanStr2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase()

    // Check if the lengths are different
    if (cleanStr1.length !== cleanStr2.length) {
        return false
    }

    // Create character frequency maps
    const charMap1 = {}
    const charMap2 = {}

    // Populate character frequency maps
    for (let i = 0; i < cleanStr1.length; i++) {
        charMap1[cleanStr1[i]] = (charMap1[cleanStr1[i]] || 0) + 1
        charMap2[cleanStr2[i]] = (charMap2[cleanStr2[i]] || 0) + 1
    }

    // Compare character frequencies
    for (let char in charMap1) {
        if (charMap1[char] !== charMap2[char]) {
            return false
        }
    }

    return true
}

// Test the function
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
console.log(areAnagrams("Astronomer", "Moon starer")); // true
console.log(areAnagrams("The Morse Code", "Here come dots")); // true