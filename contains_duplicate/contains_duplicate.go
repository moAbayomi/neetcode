package main


func contains_duplicate(nums []int) bool {
	hash := make(map[int]bool)

	for i:=0; i < len(nums); i++ {
		num := nums[i]
		if _, ok := hash[num]; ok {
			return true
		}

		hash[num] = true
	}

	return false
} 