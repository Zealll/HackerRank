def countSwaps(a):
    count = 0
    for _ in range(len(a)):

        for j in range(len(a) - 1):
            
            if a[j] > a[j+1]:
                temp = a[j]
                a[j] = a[j+1]
                a[j+1] = temp
                count += 1
    
    print('Array is sorted in {} swaps.'.format(count))
    print('First Element: {}'.format(a[0]))
    print('Last Element: {}'.format(a[-1]))