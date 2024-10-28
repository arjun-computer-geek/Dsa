# Question
## Implement a search feature where, given an array of strings and an input search term, the function returns all strings that contain the characters of the search term in any order.

## Requirements:
1. The search should be case-insensitive.
2. The search term characters can appear in any order within each string.
3. If a match is found, the function should highlight the matched characters within the string.

## Example:
### Given

```
const words = ["apple", "banana", "cherry", "date", "elderberry"];
const searchTerm = "an";
```

#### Expected Output:
```
// Matches: "banana", "elderberry" (highlighted characters: "a" and "n")
```

Bonus: Optimize the solution for performance, considering both short and long arrays and search terms. Additionally, provide a simple HTML and CSS setup to display and highlight the results visually.