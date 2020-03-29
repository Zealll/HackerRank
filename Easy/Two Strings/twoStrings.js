function twoStrings(s1, s2) {
    for (let i of s1) {
        if(s2.includes(i)){
            return 'YES'
        }
    }

    return 'NO'
}