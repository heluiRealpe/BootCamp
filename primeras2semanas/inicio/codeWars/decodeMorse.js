decodeMorse = function(morseCode) {
    let matrizMorseCode = morseCode.split(" ");
    for (let i = 0, y = 0; i < matrizMorseCode.length; i++) {
        if (matrizMorseCode[i] === ".-") {
            decodeMorse[i] = "A";
        } else if (matrizMorseCode[i] === "-...") {
            decodeMorse[i] = "B";
        } else if (matrizMorseCode[i] === "-.-.") {
            decodeMorse[i] = "C";
        } else if (matrizMorseCode[i] === "-..") {
            decodeMorse[i] = "D";
        } else if (matrizMorseCode[i] === ".") {
            decodeMorse[i] = "E";
        } else if (matrizMorseCode[i] === "..-.") {
            decodeMorse[i] = "F";
        } else if (matrizMorseCode[i] === "--.") {
            decodeMorse[i] = "G";
        } else if (matrizMorseCode[i] === "....") {
            decodeMorse[i] = "H";
        } else if (matrizMorseCode[i] === "..") {
            decodeMorse[i] = "I";
        } else if (matrizMorseCode[i] === ".---") {
            decodeMorse[i] = "J";
        } else if (matrizMorseCode[i] === "-.-") {
            decodeMorse[i] = "K";
        } else if (matrizMorseCode[i] === ".-..") {
            decodeMorse[i] = "L";
        } else if (matrizMorseCode[i] === "--") {
            decodeMorse[i] = "M";
        } else if (matrizMorseCode[i] === "-.") {
            decodeMorse[i] = "N";
        } else if (matrizMorseCode[i] === "---") {
            decodeMorse[i] = "O";
        } else if (matrizMorseCode[i] === ".--.") {
            decodeMorse[i] = "P";
        } else if (matrizMorseCode[i] === "--.-") {
            decodeMorse[i] = "Q";
        } else if (matrizMorseCode[i] === ".-.") {
            decodeMorse[i] = "R";
        } else if (matrizMorseCode[i] === "...") {
            decodeMorse[i] = "S";
        } else if (matrizMorseCode[i] === "-") {
            decodeMorse[i] = "T";
        } else if (matrizMorseCode[i] === "..-") {
            decodeMorse[i] = "U";
        } else if (matrizMorseCode[i] === "...-") {
            decodeMorse[i] = "V";
        } else if (matrizMorseCode[i] === ".--") {
            decodeMorse[i] = "W";
        } else if (matrizMorseCode[i] === "-..-") {
            decodeMorse[i] = "X";
        } else if (matrizMorseCode[i] === "-.--") {
            decodeMorse[i] = "Y";
        } else if (matrizMorseCode[i] === "--..") {
            decodeMorse[i] = "Z";
        } else if (matrizMorseCode[i] === "") {
            y += 1;
            if (y < 2) {
                decodeMorse[i] = " ";
            }
                        
        }
    }
    decodeMorse = Object.values(decodeMorse);
    //console.log(decodeMorse);
    return decodeMorse.join('');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'));


