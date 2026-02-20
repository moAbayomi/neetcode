/* """ Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]] """ */

package groupanagram

import "sort"

func sort_str(s string)string {
	runes := []rune(s)

	sort.Slice(runes, func (i, j int) bool {
		return runes[i] < runes[j]
	})

	return string(runes)

}

func groupanagram(strs []string)[][]string {
	hash := make(map[string][]string)
	res := [][]string{}

	for _, str := range strs {
		sorted := sort_str(str)

		hash[sorted] = append(hash[sorted], str)
	}

	for _ , val := range hash {
		res = append(res, val)
	}

	return res
}
