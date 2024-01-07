
function searchRange(nums, target) {
  const l = firstGreaterEqual(nums, target);
  if (l === nums.length || nums[l] !== target)
    return [-1, -1];
  const r = firstGreaterEqual(nums, target + 1) - 1;
  return [l, r];
}
function firstGreaterEqual(A, target) {
  let l = 0;
  let r = A.length;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (A[m] >= target)
      r = m;
    else
      l = m + 1;
  }
  return l;
}

/*

Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.
If target is not found in the array, return [-1, -1].
You must write an algorithm with O(log n) runtime complexity.
 
Example 1:
Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
Example 2:
Input: nums = [5,7,7,8,8,10], target = 6
Output: [-1,-1]
Example 3:
Input: nums = [], target = 0
Output: [-1,-1]
 

*/

/*
Explanation 

Sure, these functions are used to find the range of a target value within a sorted array (nums). Let's break them down:
firstGreaterEqual Function:

    Inputs:
        A: The sorted array.
        target: The value being searched for in the array.

    Output:
        Returns the index of the first occurrence where an element in A is greater than or equal to target.

Steps:

    Initialization:
        l is initialized to 0, indicating the start of the array.
        r is initialized to A.length, indicating the end of the array.

    Binary Search:
        It uses a while loop to perform a binary search within the array A.
        At each iteration, it calculates the middle index m using Math.floor((l + r) / 2).

    Comparison:
        If the element at index m (A[m]) is greater than or equal to target, it sets r = m (moves the right boundary to m).
        Otherwise, it sets l = m + 1 (moves the left boundary to m + 1).

    Return:
        After the loop finishes (l >= r), it returns l. This represents the first index where an element is greater than or equal to target.

searchRange Function:

    Inputs:
        nums: The sorted array.
        target: The value whose range is being searched.

    Output:
        Returns an array [start, end] representing the inclusive range of indices where target appears in nums.

Steps:

    Finding the Left Boundary:
        Calls firstGreaterEqual(nums, target) and stores the result in l.
        If l equals nums.length or nums[l] doesn't match the target, it means the target doesn't exist in the array. Thus, returns [-1, -1].

    Finding the Right Boundary:
        Calls firstGreaterEqual(nums, target + 1) - 1 and stores the result in r.
        This effectively finds the index of the last occurrence of target by looking for the first index greater than target + 1, then subtracts 1 to get the last index of target.

    Return Range:
        Returns [l, r] representing the inclusive range of indices where target appears in nums.

Example:

Let's consider an example:

    nums = [2, 3, 4, 4, 4, 5, 6, 7]
    target = 4

When calling searchRange(nums, target):

    firstGreaterEqual(nums, target) finds the left boundary l = 2.
    Then firstGreaterEqual(nums, target + 1) - 1 finds the right boundary r = 4.

So, the output will be [2, 4], indicating that the target 4 is present in the array at indices 2, 3, and 4.

*/


