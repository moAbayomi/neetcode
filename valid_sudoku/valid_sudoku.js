function isValidSudoku(board) {
   const seen = new Set()

   for (let r=0; r<9; r++) {
    for (let c=0; c<9; c++) {
        const val = board[r][c]

        if (val == ".") continue;

        const box_r = Math.floor(r/3)
        const box_c = Math.floor(c/3)

        const row = `row${r}-val-${val}`
        const col = `col${c}-val-${val}`
        const box = `box-${box_r}-${box_c}-val-${val}`

        if(seen.has(row) || seen.has(col) || seen.has(box)) {
            return false
        }

        seen.add(row)
        seen.add(col)
        seen.add(box)
    }
   }
   return true
}