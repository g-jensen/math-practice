/// <reference path="references.ts"/>
class _Math {
    static ShuffleArray(array: Array<any>) {
        var output = new Array<any>();
        var len = array.length;
        var rand = _Math.GetRandomInt(0,array.length-1);
        for (var i = 0; i < len; i++) {
            output.push(array[rand]);
            array.splice(rand,1);
            rand = _Math.GetRandomInt(0,array.length-1);
        }
        return output;
    }
    static GetRandomInt(min: number, max: number) : number {
        return Math.floor(Math.random() * (max - min) + min);
    }
    static ComplexMult(c1: ComplexNumber, c2: ComplexNumber): ComplexNumber {
        var a: number = (c1.a*c2.a) - (c1.b*c2.b);
        var b: number = (c1.b*c2.a) + (c1.a*c2.b);
        return new ComplexNumber(a,b);
    }
    static ComplexDivide(c1: ComplexNumber, c2: ComplexNumber): ComplexNumberFraction {
        var conj = new ComplexNumber(c2.a,-c2.b);
        var output = new ComplexNumberFraction(
            _Math.ComplexMult(c1,conj),
            new ComplexNumber((c2.a * c2.a) + (c2.b * c2.b),0)
        );
        return output;
    }
    static ComplexModulus(c1: ComplexNumber): string {
        return `√${(c1.a * c1.a) + (c1.b * c1.b)}`;
    }
    static AreModZero(a: Array<number>,n: number): boolean {
        for (let index = 0; index < a.length; index++) {
            const element = a[index];
            if (element % n != 0) {
                return false;
            }
        }
        return true;
    }
    static GCF(a: Array<number>): number {
        var biggest = Math.max(...a);
        var gcf = 1;
        for (var i = 2; i <= biggest; i++) {
            if (_Math.AreModZero(a,i) && i > gcf) {
                gcf = i;
            }
        }
        return gcf;
    }
    static SimplifyComplexFraction(fraction: ComplexNumberFraction): ComplexNumberFraction {
        var a = fraction.numerator.a;
        var b = fraction.numerator.b;
        var c = fraction.denominator.a;
        var gcf = _Math.GCF([a,b,c]);
        a /= gcf;
        b /= gcf;
        c /= gcf;
        return new ComplexNumberFraction(new ComplexNumber(a,b), new ComplexNumber(c,0));
    }
}