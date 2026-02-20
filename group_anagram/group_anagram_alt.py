""" Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]] """
from collections import defaultdict

def group_anagram_alt(strs):
    hash = defaultdict(list)

    for str in strs:
        fingerprint_arr = [0 for i in range(26)]

        for char in str:
            fingerprint_arr[ord(char) - ord("a")] += 1

        
        hash[tuple(fingerprint_arr)].append(str)
        """ key = tuple(fingerprint_arr)

        hash[key] = hash.get(key, []) + [str] """

    
    return hash.values()   


    