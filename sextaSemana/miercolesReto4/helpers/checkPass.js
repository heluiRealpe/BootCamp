function checkPass(pass) {
    if(pass.length >= 8) {		
        var mayuscula = false;
        var minuscula = false;
        var num = false;
        var caracterRaro = false;
        for(var i = 0; i<pass.length; i++) {
            if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90) {
                mayuscula = true;
            } else if(pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) {
                minuscula = true;
            } else if(pass.charCodeAt(i) >= 48 && pass.charCodeAt(i) <= 57) {
                num = true;
            } else {
                caracterRaro = true;
            }
        }
        if(mayuscula == true && minuscula == true && caracterRaro == true && num == true) {
            return true;
        }
    }
    return false;
};

module.exports = { checkPass };
