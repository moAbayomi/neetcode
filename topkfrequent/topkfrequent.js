/*  Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1: */

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3] 

function topkfrequent(nums, k) {
 const res_arr = Array.from({length: nums.length + 1}, () => [] )
 const hash_map = {}

 for (let num of nums) {
    hash_map[num] = (hash_map[num] || 0) + 1
 }

 for (let [key, value] of Object.entries(hash_map)) {
    res_arr[value] = key
 }

 const res = []

 for (let i = res_arr.length - 1; i >= 0; i--) {
    for (let arr of res_arr) {
        for (let num in arr) {
            res.push(num)
            if (res.length == k) {
                return res
            }
        }
    }
 }
}


