def arrayManipulation(n, queries):
    arr = [0] * n

    for i in queries:
        arr[i[0] - 1] += i[2]

        if i[1] != len(arr):
            arr[i[1]] -= i[2]
    
    max = 0
    count = 0
    
    for num in arr:
        count += num

        if count > max:
            max = count
    
    return max