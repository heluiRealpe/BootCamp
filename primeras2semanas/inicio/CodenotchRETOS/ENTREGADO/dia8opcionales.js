class Password {
    constructor(password, size = 9) {
        this.password = password;
        this.size = size;
    }

    isStrong() {
        let upper = 0;
        let lower = 0;
        let num = 0
        let special = 0;
        for (let i = 0; i < this.size.length; i++) {
            if ((this.password.charCodeAt(i)) > 64 && (this.password.charCodeAt(i) < 91)) {
                upper++;
            } else if ((this.password.charCodeAt(i) > 96) && (this.password.charCodeAt(i) < 123)) {
                lower++;
            } else if ((this.password.charCodeAt(i) > 47) && (this.password.charCodeAt(i) < 58)) {
                num++;
            } else {
                special++;
            }
        }
        if ((upper > 0) && (lower > 0) && (num > 0) && (special >0)) {
            return true;
        } else {
            return false;
        }
    }

    generatePass() {
        this.password = new Array(this.size);
        for (let i = 0; i < this.size; i++) {
            this.password[i] = String.fromCharCode(Math.round(Math.random()*(127-33)+33));
        }
        return this.password.join('');
    }
}

var password1 = new Password("ho7aComoj");

console.log("\npassword1:")
console.log(password1);

console.log("\ngeneratePass()")
console.log(password1.generatePass());

