function arrayManipulation(n, queries) {
    let arr = []
    for (let i = 0; i < n; i++) arr[i] = 0
    console.log(arr)

    for (let i of queries) {
        arr[i[0] - 1] += i[2]

        if (i[1] != n) {
            arr[i[1]] -= i[2] 
        }
    } 

    let max = 0
    let counter = 0

    for (let num of arr) {
        counter += num

        if(counter > max) {
            max = counter
        }
    }

    return max
}