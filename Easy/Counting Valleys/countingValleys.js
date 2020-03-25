function countingValleys(n, s) {
    let curr_count = 0
    let prev_count = 0
    let valley_count = 0

    for (let i = 0; i < n; i++) {
        if (curr_count === -1 && prev_count === 0) {
            valley_count += 1
        }

        prev_count = curr_count

        if (s[i] === 'U') {
            curr_count += 1
        } else {
            curr_count -= 1
        }
    }

    return valley_count
}