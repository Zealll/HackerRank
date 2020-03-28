def minimumSwaps(arr):
    swaps = 0

    for i in range(len(arr)):
        # Checks for 0, but these test cases don't have it
        # so it's unnecessary 
        if arr[i] == 0:
            temp_index = arr[0]
            arr[0] = arr[i]
            arr[i] = temp_index
            continue
        
        # The function could work only with the below code as well
        while arr[i] != i + 1:
            temp = arr[arr[i] - 1]
            arr[arr[i] - 1] = arr[i]
            arr[i] = temp
            swaps += 1

    return swaps