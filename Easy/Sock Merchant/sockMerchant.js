function sockMerchant(n, ar) {
    if (n < 2) {
        return 0
    }

    let dict = {}
    let acc = 0

    for (let i of ar) {
        if (!dict[i]) {
            dict[i] = 1
        } else {
            dict[i] += 1
        }
    }
    
    for (let i in dict) {
        acc += Math.floor(dict[i] / 2)
    }

    return acc
}