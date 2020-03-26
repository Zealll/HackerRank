function jumpingOnClouds(c) {
    let count = []
    let tracker = 0

    for (let i = 0; i < c.length; i++) {
        if (tracker >= c.length - 1) {
            break
        }

        if (c[tracker] === 0) {
            count.push(tracker)
        }

        if (tracker + 2 < c.length && c[tracker + 2] === 0){
            tracker += 2
        } else if (tracker + 1 < c.length && c[tracker + 1] === 0) {
            tracker += 1
        }
    }

    return count.length
}