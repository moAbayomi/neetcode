/* """ Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]] """ */


function groupAnagrams(strs) {

    const hash_map = {}

    for(let i=0; i < strs.length; i++) {
        const str = strs[i]
        const sorted_str = str.split("").sort().join("")

        if(sorted_str in hash_map) {
            hash_map[sorted_str].push(str)
        } else {
            hash_map[sorted_str] = [str]
        }
    }

    return Object.values(hash_map)


}