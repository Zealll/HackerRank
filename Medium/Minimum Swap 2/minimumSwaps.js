function minimumSwaps(arr) {
    let swaps = 0

    for (let i = 0; i < arr.length; i++) {
        while (arr[i] != i + 1) {
            let temp = arr[arr[i] - 1]
            arr[arr[i] - 1] = arr[i]
            arr[i] = temp
            swaps += 1
        }
    }

    return swaps
}