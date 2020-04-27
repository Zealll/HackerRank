function hourglassSum(arr) {
    let dic = {}

    let top = 0
    let mid = 1
    let bot = 2

    let top_one = 0
    let mid_one = 1
    let bot_one = 0

    let num = 0
    let max = -Infinity

    while (bot < arr.length) {
        while (bot_one < arr[0].length - 2) {
            let chunk_one = arr[top].slice(top_one, top_one + 3).reduce((acc, each) => acc+each, 0)
            let chunk_two = arr[bot].slice(bot_one, bot_one + 3).reduce((acc, each) => acc+each, 0)
            dic[num] = chunk_one + arr[mid][mid_one] + chunk_two

            if (dic[num] > max) {
                max = dic[num]
            }

            num += 1
            top_one += 1
            mid_one += 1
            bot_one += 1
        }

        top += 1
        mid += 1
        bot += 1

        top_one = 0
        mid_one = 1
        bot_one = 0
    }

    return max
}
