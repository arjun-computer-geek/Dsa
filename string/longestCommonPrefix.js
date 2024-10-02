/*
Find the Longest Common Prefix:

Problem: Given an array of strings, find the longest common prefix.
Example:

Input: ["flower", "flow", "flight"]
Output: "fl"
*/

function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""

    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1)
            if (prefix === "") return ""
        }
    }

    return prefix
}

// Test the function
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // Output: ""
console.log(longestCommonPrefix(["interspecies", "interstellar", "interstate"])); // Output: "inters"