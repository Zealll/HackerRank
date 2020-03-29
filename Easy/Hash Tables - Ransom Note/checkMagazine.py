def checkMagazine(magazine, note):
    mag_dict = {}
    note_dict = {}

    for i in magazine:
        if i not in mag_dict:
            mag_dict[i] = 1
        else:
            mag_dict[i] +=1
    
    for i in note:
        if i not in note_dict:
            note_dict[i] = 1
        else:
            note_dict[i] += 1

    for i in note_dict:
        if i not in mag_dict:
            print('No')
            return

        if note_dict[i] > mag_dict[i]:
            print('No')
            return

    print('Yes')