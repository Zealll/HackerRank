function repeatedString(s, n) {
    const incl = s.includes('a')

    if (!incl) {
        return 0
    }

    let dictionary = {'a': 0}
    
    const length = Math.floor(n / s.length)

    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            dictionary['a'] += 1
        }
    }

    let remaining = n - s.length * length

    let total = dictionary['a'] * length

    if (remaining > 0) {
        for (let i = 0; i < remaining; i++) {
            if (s[i] === 'a') {
                total += 1
            }
        }
    }

    return total
}