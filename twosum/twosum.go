package twosum

func twosum(nums []int, target int) []int {
	hash_table := make(map[int]int)
	for i, num := range nums {
		diff := target - num
		if idx, ok := hash_table[diff]; ok {
			return []int{idx, i}
		}
		hash_table[num] = i
	}

	return nil
}