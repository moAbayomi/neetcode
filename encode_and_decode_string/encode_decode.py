def encode(str):
    res = ""
    for s in str:
        res += str(len(s)) + "#" + s
    return res


def decode(str, res=None):

    if res is None:
        res = []

    if not str:
        return res
    
    j = 0
    while str[j] != "#":
        j = j + 1
    length_of_str = int(str[:j])
    start_of_string = j+1
    end_of_string = start_of_string + length_of_str
    res.append(str[start_of_string:end_of_string])

    decode(str[end_of_string:], res)

    