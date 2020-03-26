function minimumBribes(q) {
    let moves = 0

    for (let i = 0; i < q.length; i++) {
        if ((q[i] - 1) - i > 2) {
            console.log('Too chaotic')
            return
        }

        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                moves += 1
            }
        }
    }

    console.log(moves)
    return
}