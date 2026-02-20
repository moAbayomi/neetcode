function prodct_of_arr(arr) {
    const res = new Array(arr.length)

    let prefix = 1
    for(let i = 0; i < arr.length; i++) {
        res[i] = prefix
        prefix *= arr[i]
    }

    let postfix = 1

    for(let i = arr.length - 1; i >= 0; i--) {
        res[i] *= postfix
        postfix *= arr[i]
    }

    return res
}

