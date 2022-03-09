/// <reference path="references.ts"/>

class ComplexMultQuestion extends Question {
    content: string;
    answer: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    constructor() {
        super();
        var c1 = new ComplexNumber(_Math.GetRandomInt(-10,10),_Math.GetRandomInt(-10,10));
        var c2 = new ComplexNumber(_Math.GetRandomInt(-10,10),_Math.GetRandomInt(-10,10));
        this.content = `(${c1.toString()})(${c2.toString()}) = ?`;
        this.answer = _Math.ComplexMult(c1,c2).toString();
        QuestionManager.questionNumber++;
        this.SetOptions(c1,c2);
    }
    SetOptions(c1: ComplexNumber, c2: ComplexNumber): void {
        var funcs: Array<any> = [
            ComplexMultQuestion.FauxComplexMult1(c1,c2).toString(),
            ComplexMultQuestion.FauxComplexMult2(c1,c2).toString(),
            ComplexMultQuestion.FauxComplexMult3(c1,c2).toString(),
            ComplexMultQuestion.FauxComplexMult4(c1,c2).toString(),
            ComplexMultQuestion.FauxComplexMult5(c1,c2).toString(),
            ComplexMultQuestion.FauxComplexMult6(c1,c2).toString()
        ];
        funcs = _Math.ShuffleArray(funcs);
        funcs.splice(_Math.GetRandomInt(0,4),0,this.answer);
        console.log(this.answer);

        this.optionA = `A. ${funcs[0]}`;
        this.optionB = `B. ${funcs[1]}`;
        this.optionC = `C. ${funcs[2]}`;
        this.optionD = `D. ${funcs[3]}`;
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
}