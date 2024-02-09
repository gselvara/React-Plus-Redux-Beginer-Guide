function shuffleArray(arrayParam) {
    const theArray = [...arrayParam];
    for (let i = theArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = theArray[i];
        theArray[i] = theArray[j];
        theArray[j] = temp;
    }
    return theArray;
}

function getRandomText(text) {
    return text[Math.floor(Math.random() * text.length)];
}

export function generatedPassword(theOptions) {
    let result = "Hello";
    let charToSkip = 1;
    const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
    const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const NUMBERS = "0123456789";
    const SPECIALS = "~!@#$%^&*(()-_=+;:'\",<.>/?[{]}\\|";

    let alphabet = LOWERCASE;
    result = getRandomText(LOWERCASE);
    
    if (theOptions.uppercase) {
        alphabet += UPPERCASE;
        result += getRandomText(UPPERCASE);
        charToSkip++;
    }
    if (theOptions.number) {
        alphabet += NUMBERS;
        result += getRandomText(NUMBERS);
        charToSkip++;
    }
    if (theOptions.special) {
        alphabet += SPECIALS;
        result += getRandomText(SPECIALS);
        charToSkip++;
    }

    for (let i = charToSkip; i < Number(theOptions.size); i++) {
        result += getRandomText(alphabet);
    }
    console.log("result", result);
    result = shuffleArray(result).join("");
    console.log("result", result);
    return result;
}