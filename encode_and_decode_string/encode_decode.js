function encode(arr) {
    let res = ""
    for (i in arr) {
        const char = arr[i]
        res += char.length + "#" + char
    }

    return res
}


function decode(str, res = null) {
    if (str.length < 1) {
        return res
    }

    if(res == null) {
        res = []
    }

    i = 0
    while(str[i] != "#") {
        i++
    }
    const length_of_curr_str = Number(str.slice(0, i))
    const start_of_str = i + 1
    const end_of_str = start_of_str + length_of_curr_str

    res.push(str.slice(start_of_str, end_of_str))

    
    return decode(str.slice(end_of_str), res)
}

console.log(decode("3#ade5#fatai"))