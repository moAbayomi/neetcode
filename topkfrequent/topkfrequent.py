""" Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3] """

def topkfrequent(nums, k):
    hash = {}
    arr = [[] for i in range(len(nums) + 1)]

    for num in nums:
        hash[num] = hash.get(num, 0) + 1

    for key, value in hash.items():
        arr[value].append(key)
    
    res = []

    for i in range(len(arr) - 1, 0, -1):
        for n in arr[i]:
            res.append(n)
            if len(res) == k:
                return res



    
