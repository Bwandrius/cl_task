function countSoundTypes (str) {
    const vowels = 'aąeęėiyouųūAĄEĘĖIYOUŲŪ';
    const consonants = 'bcčdfghjklmnprsštvzžBCČDFGHJKLMNPRSŠTVZŽ';

    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];

        if (isInString(char, vowels)) {
            vowelCount++;
        } else if (isInString(char, consonants)) {
            consonantCount++;
        }
    }

    return `vowels: ${vowelCount} consonants: ${consonantCount}`;
}

function isInString (char, str) {
    for (let i = 0; i < str.length; i++) {
        if (char === str[i]) {
            return true;
        }
    }
    return false;
}

const string = 'Programuotojo ar tiesiog bet kokio IT specialisto profesija taps vis labiau įprasta.';
console.log(countSoundTypes(string));

