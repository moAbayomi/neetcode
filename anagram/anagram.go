package anagram

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	hash_map := make(map[int]int)

	for _, char := range s {
		hash_map[int(char)]++
	} 

	for i:= 0; i < len(t); i++ {
		key := int(t[i])
		if count, ok := hash_map[key]; ok {
			if count > 1 {
				hash_map[key]--
			} else {
				delete(hash_map, key)
			}
		} else {
			return false
		}
	}

	return len(hash_map) == 0
}
