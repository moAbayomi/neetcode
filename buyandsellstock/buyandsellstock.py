def buyandsell(arr):
    l, r = 0, 1
    profit = 0

    while r < len(arr) - 1:
        if l <= r:
            profit = max(profit, arr[l] + arr[r])
            r += 1
        else:
            l += 1

    return profit