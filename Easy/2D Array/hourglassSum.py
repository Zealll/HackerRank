def hourglassSum(arr):
    dic = {}

    top = 0
    mid = 1
    bot = 2

    top_one = 0
    mid_one = 1
    bot_one = 0

    num = 0
    max = float('-inf')

    
    while bot < len(arr):
        while bot_one < len(arr[-1])-2:
            dic[num] = sum(arr[top][top_one : top_one + 3]) + arr[mid][mid_one] + sum(arr[bot][bot_one : bot_one + 3])
            if dic[num] > max:
                max = dic[num]
            num += 1
            top_one += 1
            mid_one += 1
            bot_one += 1
        
        top += 1
        mid += 1
        bot += 1

        top_one = 0
        mid_one = 1
        bot_one = 0
    
    return max