package topkfrequent
func topkfreq(nums []int, k int) []int {
	res_arr := make([][]int, len(nums) + 1)
	hash_map := make(map[int]int)

	for _, val := range(nums) {
		hash_map[val] += 1
	}

	for key, value := range(hash_map) {
		res_arr[value] = append(res_arr[value], key)
	}

	res :=  make([]int, 0, k)

	for i:= len(res_arr) - 1; i >= 0; i-- {
			for _, num := range res_arr[i] {
				res = append(res, num)
				if len(res) == k {
					return res
				}
			}
		
	}
	return res
}