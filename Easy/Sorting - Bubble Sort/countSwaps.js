function countSwaps(a) {
    let count = 0

    for (let _ of a) {
        
        for (let j = 0; j < a.length - 1; j++) {
            if (a[j] > a[j + 1]) {
                let temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
                count += 1
            }
        }
        
    }

    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length - 1]}`)
}
// 