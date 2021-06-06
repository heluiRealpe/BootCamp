function reverseWords(str) {
    var newString = [];
    str = str.trim().split(" ");
    let i = str.length - 1;
    for (let y = 0 ; i >= 0; i--, y++) {
        newString[y] = str[i];
    }
    return newString.join(" "); // reverse those words
}

console.log(reverseWords("The greatest victory is that which requires no battle"));