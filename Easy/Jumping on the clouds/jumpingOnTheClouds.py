def jumpingOnClouds(c):

    count = []
    tracker = 0

    for i in range(len(c)):
        if tracker >= len(c) - 1:
            break
        
        if c[tracker] == 0:
            count.append(tracker)

        if tracker + 2 < len(c) and c[tracker + 2] == 0:
            tracker += 2
        elif tracker + 1 < len(c) and c[tracker + 1] == 0:
            tracker += 1
    
    return len(count)