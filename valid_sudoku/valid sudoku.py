from collections import defaultdict
def valid_sudoku(arr):
    row = defaultdict(set)
    col = defaultdict(set)
    square = defaultdict(set)


    for r in range(9):
        for c in range(9):
            if arr[r][c] == ".":
                continue
            if arr[r][c] in row[r] or arr[r][c] in col[c] or arr[r][c] in square[(r//3, c//3)]:
                return False
            row[r].add(arr[r][c])
            col[c].add(arr[r][c])
            square[(r//3, c//3)].add(arr[r][c])
        
    return True