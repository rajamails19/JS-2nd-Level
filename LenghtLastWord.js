

function lengthOfLastWord(s) {
  let i = s.length - 1;
  while (i >= 0 && s[i] === ' ')
    --i;
  
  const lastIndex = i;
  
  while (i >= 0 && s[i] !== ' ')
    --i;
  return lastIndex - i;
}


/*

58. Length of Last Word

Given a string s consisting of words and spaces, return the length of the last word in the string.
A word is a maximal 
substring
consisting of non-space characters only.
 
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.


*/

/*

Explanation

This JavaScript function lengthOfLastWord aims to find the length of the last word in a given string s. Let's break down the code step by step:
Function Purpose:

    Input:
        s: A string.

    Output:
        Returns the length of the last word in the given string s.

Variables Used:

    i: Represents the index being used to traverse the string s.
    lastIndex: Holds the index value marking the end of the last word found.

Algorithm Steps:

    Removing Trailing Spaces:
        The function starts by initializing i to s.length - 1, pointing to the last character in the string s.
        The first while loop moves the index i backwards until it finds a non-space character or reaches the beginning of the string.

    Finding the End of Last Word:
        It saves the index value of the end of the last word found in lastIndex.

    Calculating Length of Last Word:
        The second while loop moves i backwards again until it finds a space character or reaches the beginning of the last word.

    Return:
        Returns the length of the last word by subtracting the indices (lastIndex - i).

Example:

Let's illustrate with an example string:

    s = "Hello World "

When calling lengthOfLastWord(s):

    The function moves i backwards to skip trailing spaces, setting i = 10 (position of the last non-space character).
    It stores lastIndex = 10.
    The second loop moves i backwards until it finds the space before "World".
    Finally, it returns 5 as the length of the last word "World".

This JavaScript code effectively computes the length of the last word in a string by skipping trailing spaces and finding the end of the last word, returning the correct length based on the positions of spaces and characters in the string.

*/
