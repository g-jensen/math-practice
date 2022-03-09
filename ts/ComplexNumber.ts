/// <reference path="references.ts"/>

class ComplexNumber {
    a: number;
    b: number;
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
    toString() : string {
        var a_sign: string = "";
        var b_sign: string = "+";

        if (this.a < 0) {
            a_sign = "-";
        }
        if (this.b < 0) {
            b_sign = "-";
        }

        if (this.b == 0) {
            return (`${a_sign}${Math.abs(this.a)}`);
        }

        if (this.a == 0) {
            if (b_sign == "+") {
                b_sign = "";
            }
            if (Math.abs(this.b) == 1) {
                return `${b_sign}i`;
            }
            return (`${b_sign}${Math.abs(this.b)}i`);
        }

        if (Math.abs(this.b) == 1) {
            return (`${a_sign}${Math.abs(this.a)} ${b_sign} i`);
        }

        return (`${a_sign}${Math.abs(this.a)} ${b_sign} ${Math.abs(this.b)}i`);
    }
}