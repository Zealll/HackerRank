function rotLeft(a, d) {
    let new_arr = a

    for (let i = 0; i < d; i++) {
        new_arr.push(a[i])
    }

    return new_arr.slice(d, a.length)
}
