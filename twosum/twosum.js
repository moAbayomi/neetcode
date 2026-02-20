/* Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1] */

function twoSum(nums, target) {
        const hash_table = {}

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i]
            hash_table[num] = i
        }

        for(let i = 0; i < nums.length; i++) {
            const num = num[i]
            const difference = target - num

            if(hash_table[difference] && hash_table[num] != i) {
                return [i, hash_table[difference]]
            }
        }

        
    }