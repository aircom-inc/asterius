export class Unicode {
    constructor(logger) {
        Object.seal(this);
    }

    u_gencat(code) {
        console.log("code: ${code}");
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

    u_tolower(code) {
        return code - 'A'.charCodeAt(0) + 'a'.charCodeAt(0);
    }

    u_toupper(code) {
        return code - 'a'.charCodeAt(0) + 'A'.charCodeAt(0);
    }

    u_totitle(code){
        return u_toupper(code);
    }

    u_iscontrol(code) {
        // TODO: is space(' ') a control character?
        return code < 32;
    }

    u_isprint(code) {
        return code >= 32;
    }
}
