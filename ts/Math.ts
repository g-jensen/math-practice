/// <reference path="references.ts"/>

class ComplexNumberFraction {
    numerator: ComplexNumber;
    denominator: ComplexNumber;
    constructor(c1: ComplexNumber, c2: ComplexNumber) {
        this.numerator = c1;
        this.denominator = c2;
    }
    toString(): string {
        return `<math><mfrac><mrow>${this.numerator.toString()}</mrow><mrow>${this.denominator.toString()}</mrow></mfrac></math>`
    }
}

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
    static FauxComplexMult1(c1: ComplexNumber, c2: ComplexNumber): ComplexNumber {
        var a: number = (c1.b*c2.a) - (c1.a*c2.b);
        var b: number = (c1.b*c2.a) + (c1.a*c2.b);
        return new ComplexNumber(a,b);
    }
    static FauxComplexMult2(c1: ComplexNumber, c2: ComplexNumber): ComplexNumber {
        var a: number = (c1.a*c2.a) - (c1.b*c2.b);
        var b: number = (c1.a*c2.a) + (c1.b*c2.b);
        return new ComplexNumber(a,b);
    }
    static FauxComplexMult3(c1: ComplexNumber, c2: ComplexNumber): ComplexNumber {
        var a: number = (c1.a*c2.a) + (c1.b*c2.b);
        var b: number = (c1.b*c2.a) - (c1.a*c2.b);
        return new ComplexNumber(a,b);  
    }
    static FauxComplexMult4(c1: ComplexNumber, c2: ComplexNumber): ComplexNumber {
        var a: number = (c1.a*c2.a) + (c1.b+c2.b);
        var b: number = (c1.b*c2.a) - (c1.a*c2.b);
        return new ComplexNumber(a,b);  
    }
    static FauxComplexMult5(c1: ComplexNumber, c2: ComplexNumber): ComplexNumber {
        var a: number = (c1.a*c2.a) - (c1.b*c2.b);
        var b: number = (c1.b*c2.a) + (c1.a*c2.b);
        return new ComplexNumber(b,a);
    }
    static FauxComplexMult6(c1: ComplexNumber, c2: ComplexNumber): ComplexNumber {
        var a: number = (c1.b*c2.b) - (c1.a*c2.a);
        var b: number = (c1.b*c2.b) + (c1.a*c2.a);
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
        console.log(gcf);
        a /= gcf;
        b /= gcf;
        c /= gcf;
        return new ComplexNumberFraction(new ComplexNumber(a,b), new ComplexNumber(c,0));
    }
    static FauxComplexDivide1(c1: ComplexNumber, c2: ComplexNumber): ComplexNumberFraction {
        var conj = new ComplexNumber(c2.a,c2.b);
        var output = new ComplexNumberFraction(
            _Math.ComplexMult(c1,conj),
            new ComplexNumber((c2.a * c2.a) + (c2.b * c2.b),0)
        );
        return output;
    }
    static FauxComplexDivide2(c1: ComplexNumber, c2: ComplexNumber): ComplexNumberFraction {
        var conj = new ComplexNumber(c2.a,-c2.b);
        var output = new ComplexNumberFraction(
            _Math.ComplexMult(c1,conj),
            new ComplexNumber((c2.a * c2.a) - (c2.b * c2.b),0)
        );
        return output;
    }
    static FauxComplexDivide3(c1: ComplexNumber, c2: ComplexNumber): ComplexNumberFraction {
        var conj = new ComplexNumber(c1.a,-c1.b);
        var output = new ComplexNumberFraction(
            _Math.ComplexMult(c2,conj),
            new ComplexNumber((c1.a * c1.a) + (c1.b * c1.b),0)
            );
        return output;
    }
    static FauxComplexDivide4(c1: ComplexNumber, c2: ComplexNumber): ComplexNumberFraction {
        var conj = new ComplexNumber(c2.a,c2.b);
        var output = new ComplexNumberFraction(
            _Math.ComplexMult(c2,conj),
            new ComplexNumber((c2.a * c2.a) + (c2.b * c2.b),0)
        );
        return output;
    }
    static FauxComplexDivide5(c1: ComplexNumber, c2: ComplexNumber): ComplexNumberFraction {
        var conj = new ComplexNumber(c2.a,-c2.b);
        var output = new ComplexNumberFraction(
            _Math.ComplexMult(c1,conj),
            new ComplexNumber((c2.a * c2.a) + (c2.b * c2.b),0)
        );
        return output;
    }
}