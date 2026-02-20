""" Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]] """

from collections import defaultdict

def groupAnagrams_naive_version(strs):
    hashmap = {}
    output = []

    for str in strs:
        sorted_str = "".join(sorted(str))
        if sorted_str in hashmap:
            hashmap[sorted_str].append(str)
        else:
            hashmap[sorted_str] = [str]

    for value in hashmap.values():
        output.append(value)

    return output

def groupAnagram_pro_version(strs):

    hash_table = defaultdict(list)

    for str in strs:

        count = [0] * 26

        for char in str:
            count[ord(char) - ord("a")] += 1

        hash_table[tuple(count)].append(str)

    return list(hash_table.values())




       
                
            


