def rotLeft(a, d):
    new_arr = a

    for i in range(d):
        new_arr.append(a[i])
    
    return new_arr[d:]