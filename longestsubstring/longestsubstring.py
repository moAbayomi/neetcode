def longestsubstring(str):
    l = 0
    charset = set()
    for r in range(len(str)):
        while str[r] in charset:
            charset.remove(str[l])
            l += 1
        charset.add(str[r])
        res = max(res, r - l + 1)
    return res


