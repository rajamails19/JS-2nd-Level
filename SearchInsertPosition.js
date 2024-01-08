
function searchInsert(nums, target) {
  let l = 0;
  let r = nums.length;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (nums[m] === target)
      return m;
    if (nums[m] < target)
      l = m + 1;
    else
      r = m;
  }
  return l;
}


/*

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
You must write an algorithm with O(log n) runtime complexity.
 
Example 1:
Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:
Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:
Input: nums = [1,3,5,6], target = 7
Output: 4


*/

/* 
Explanation

This JavaScript function searchInsert aims to find the insertion index of a target value within a sorted array (nums). Let's break it down:
Function Purpose:

    Inputs:
        nums: A sorted array of integers.
        target: The value being searched for in the array.

    Output:
        Returns the index where the target should be inserted into the array while maintaining the sorted order.

Variables Used:

    l: Represents the left boundary of the search space.
    r: Represents the right boundary of the search space.

Algorithm Steps:

    Initialization:
        l is initialized to 0, indicating the start of the array.
        r is initialized to nums.length, indicating the end of the array.

    Binary Search:
        It uses a while loop to perform a binary search within the array nums.
        At each iteration, it calculates the middle index m using Math.floor((l + r) / 2).

    Comparison:
        Compares the element at index m (nums[m]) with the target value.
        If the element at nums[m] is equal to the target, it means the target is found, and it returns the index m.
        If nums[m] is less than target, it means the target should be on the right side of m, so it updates l = m + 1.
        If nums[m] is greater than or equal to target, it means the target should be on the left side of m, so it updates r = m.

    Return:
        After the loop finishes (l >= r), it returns l. This represents the insertion position where the target should be placed to maintain the sorted order.

Example:

Let's consider an example:

    nums = [1, 3, 5, 6]
    target = 5

When calling searchInsert(nums, target):

    Initially, l = 0, r = 4.
    First iteration: m = 2, nums[m] = 5, which equals the target.
    It returns m = 2, indicating the index where the target is found in the array.

This function efficiently utilizes the binary search approach to find the insertion index of the target value in a sorted array while maintaining the sorted order.

*/
