def countingValleys(n, s):
    curr_count = 0
    prev_count = 0
    valley_count = 0

    for i in range(n):
        if curr_count == -1 and prev_count == 0:
            valley_count += 1

        prev_count = curr_count
        
        if s[i] == "U":
            curr_count += 1
        else:
            curr_count -= 1
    
    return valley_count 