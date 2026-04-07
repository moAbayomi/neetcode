package main

func isValidSudoku(board [][]byte) bool {
	seen := make(map[string]bool)

	for i := 0; i < 9; i++ {
		for j := 0; j < 9; j++ {
			num := board[i][j]
			if num != '.' {
				rowKey := string(num) + " in row " + string(i)
				colKey := string(num) + " in column " + string(j)
				boxKey := string(num) + " in box " + string(i/3) + "-" + string(j/3)

				if seen[rowKey] || seen[colKey] || seen[boxKey] {
					return false
				}

				seen[rowKey] = true
				seen[colKey] = true
				seen[boxKey] = true
			}
		}
		
}
return true
}