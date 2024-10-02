/*
Check if a String Contains All Unique Characters:

Problem: Determine if a string has all unique characters.
Example:

Input: "abcde"
Output: true
*/

function hasAllUniqueCharacters(str) {
    const charSet = new Set()

    for (let char of str) {
        if (charSet.has(char)) {
            return false
        }
        charSet.add(char)
    }

    return true
}

// Test the function
console.log(hasAllUniqueCharacters("abcde")); // true
console.log(hasAllUniqueCharacters("hello")); // false
console.log(hasAllUniqueCharacters("")); // true
console.log(hasAllUniqueCharacters("a")); // true
console.log(hasAllUniqueCharacters("abcdefghijklmnopqrstuvwxyz")); // true

/*
Check if a String Contains All Unique Characters: (Without Set)

Problem: Determine if a string has all unique characters.
Example:

Input: "abcde"
Output: true
*/
console.log('\n')

function hasAllUniqueCharacters(str) {
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                return false
            }
        }
    }
    return true
}

// Test the function
console.log(hasAllUniqueCharacters("abcde")); // true
console.log(hasAllUniqueCharacters("hello")); // false
console.log(hasAllUniqueCharacters("")); // true
console.log(hasAllUniqueCharacters("a")); // true
console.log(hasAllUniqueCharacters("abcdefghijklmnopqrstuvwxyz")); // true