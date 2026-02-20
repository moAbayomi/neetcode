def productofarr(vals):
    res = [1] * len(vals)

    prefix = 1
    for i in range(len(vals)):
        res[i] = prefix
        prefix *= vals[i]

    postfix = 1
    for i in range(len(vals) -1, -1, -1):
        res[i] *= postfix
        postfix *= vals[i]

    return res
