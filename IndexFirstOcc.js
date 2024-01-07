
function strStr(haystack, needle) {
  const m = haystack.length;
  const n = needle.length;
  for (let i = 0; i < m - n + 1; ++i) {
    if (haystack.substring(i, i + n) === needle) {
      return i;
    }
  }
  return -1;
}


/*

Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
 
Example 1:
Input: haystack = "sadbutsad", needle = "sad"
Output: 0
Explanation: "sad" occurs at index 0 and 6.
The first occurrence is at index 0, so we return 0.
Example 2:
Input: haystack = "leetcode", needle = "leeto"
Output: -1
Explanation: "leeto" did not occur in "leetcode", so we return -1.



*/


/*

Explanation 

Absolutely! This JavaScript function strStr aims to find the starting index of the first occurrence of a substring (needle) within a larger string (haystack). Let's break it down step by step:
Function Explanation:

    haystack is the larger string where the search is performed.
    needle is the substring that is being searched for within the haystack.

Variables Used:

    m represents the length of the haystack string.
    n represents the length of the needle string.

Iteration:

    The function uses a for loop that iterates through haystack from index 0 to m - n. This is because beyond m - n characters, there won't be enough characters left for the needle substring to fit.

Substring Comparison:

    Within the loop, it checks substrings of the haystack starting from index i and having a length of n, i.e., haystack.substring(i, i + n).

Comparison:

    It compares the extracted substring with the needle using ===. If they match, it means the needle is found in the haystack at index i.

Return:

    If a match is found, it returns the starting index i.
    If the loop completes without finding a match, it returns -1 indicating that the needle is not present in the haystack.

Example:

Let's illustrate with an example:

    haystack = "hello world"
    needle = "world"

The function strStr will iterate through the haystack string:

    Iteration 1: Check substring from index 0 to 5 ("hello"). Not a match.
    Iteration 2: Check substring from index 1 to 6 ("ello "). Not a match.
    Iteration 3: Check substring from index 2 to 7 ("llo w"). Not a match.
    Iteration 4: Check substring from index 3 to 8 ("lo wo"). Not a match.
    Iteration 5: Check substring from index 4 to 9 ("o wor"). This matches the needle.
        It returns the starting index 4.

Efficiency Note:

This approach has a time complexity of O((m-n+1) * n) as it needs to compare substrings of length n with the needle string. 
However, it can be less efficient for larger strings or longer needle values, especially if no match is found early in the haystack string.

*/
