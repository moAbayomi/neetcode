class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash_map = {}

        for( let i = 0; i < nums.length; i++) {
            if (hash_map[nums[i]]) {
                return true
            } else {
                hash_map[nums[i]] = true
            }
        }

        return false
    }
}
