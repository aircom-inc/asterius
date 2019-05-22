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
        if ((code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) ||
            (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0))) {
            return true;
        }
        return false;
    }

    u_iswalnum(code) {
        if (code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0)) {
            return true;
        }
        return false;
    }
}
