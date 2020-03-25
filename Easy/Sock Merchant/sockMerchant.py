def sockMerchant(n, ar):
    if n < 2:
        return 0

    dict = {}
    acc = 0

    for i in ar:
        if i not in dict:
            dict[i] = 1
        else:
            dict[i] += 1

    for i in dict:
        acc += dict[i] // 2

    return acc