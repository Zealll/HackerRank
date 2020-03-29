function readLine() {
    return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let mag_dict = {}
    let note_dict = {}

    for (let i of magazine) {
        if (!mag_dict[i]) {
            mag_dict[i] = 1
        } else {
            mag_dict[i] += 1
        }
    }

    for (let i of note) {
        if (!note_dict[i]) {
            note_dict[i] = 1
        } else {
            note_dict[i] += 1
        }
    }

    for (let i in note_dict){
        if (!mag_dict[i]){
            console.log('No')
            return
        }

        if (note_dict[i] > mag_dict[i]) {
            console.log('No')
            return
        }
    }

    console.log('Yes')
}