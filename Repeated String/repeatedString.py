def repeatedString(s, n):
    dictionary = {'a': 0}

    length = n // len(s)

    if 'a' not in s:
        return 0

    for i in s:
        if i == 'a':
            dictionary['a'] += 1
    
    remaining = n - len(s) * length

    total = int(dictionary['a'] * length)

    if remaining > 0:
        for i in range(remaining):
            if s[i] == 'a':
                total += 1

    return total














# def repeatedString(s, n):
#     dictionary = {}

#     length = n // len(s)

#     if 'a' not in s:
#         return 0

#     for i in s:
#         if i == 'a':
#             if 'a' not in dictionary:
#                 dictionary['a'] = 1
#             else:
#                 dictionary['a'] += 1
    
#     remaining = n - len(s) * length

#     total = int(dictionary['a'] * length)

#     if remaining > 0:
#         for i in range(remaining):
#             if s[i] == 'a':
#                 total += 1

#     return total