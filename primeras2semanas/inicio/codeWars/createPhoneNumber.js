function createPhoneNumber(number) {
    let phoneNumber = "";
    for (let i = 0; i < number.length; i++) {
        if (i === 0) {
            phoneNumber += "(";
        } else if (i === 3) {
            phoneNumber += ") ";
        } else if (i === 6) {
            phoneNumber += "-";
        }
        phoneNumber += number[i];
    }
    return phoneNumber;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"