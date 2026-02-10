function isAnagram(s, t) {
    if (s.length != t.length) {
        return false
    }

    const hash_map = {}

    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if(hash_map[char]) {
            hash_map[char] += 1
        } else {
            hash_map[char] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        const char = t[i]
        if(hash_map[char]) {
            if (hash_map[char] > 1) {
                hash_map[char] -=1
            } else {
                delete hash_map[char]
            }
        } else {
            return false
        }
    }

    if (Object.keys(hash_map).length == 0) {
        return true
    } else {
        return false
    }
}