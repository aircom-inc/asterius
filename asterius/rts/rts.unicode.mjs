export class Unicode {
    constructor(logger) {
        Object.seal(this);
    }

    u_gencat(code) {
        if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
            return 0; // Uppercase letter
        } else if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
            return 1; //Lowercase letter
        } else if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
            return 8; //Decimal number
        }
    }

    u_iswalpha(code) {
        return (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) ||
            (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0));
    }

    u_iswalnum(code) {
        return code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0);
    }

    u_iswupper(code) {
        return code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0);
    }

    u_iswlower(code) {
        return code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0);
    }

    u_towlower(code) {
        if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
            return code - 'A'.charCodeAt(0) + 'a'.charCodeAt(0);
        }
        return code;
    }

    u_towupper(code) {
        if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
            return code - 'a'.charCodeAt(0) + 'A'.charCodeAt(0);
        }
        return code;
    }

    u_towtitle(code){
        return u_toupper(code);
    }

    u_iswcntrl(c) { 
        var lookup = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        return lookup[c]; 
    } 

    u_iswprint(c) { 
        var lookup = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
        return lookup[c]; 
    }
}
