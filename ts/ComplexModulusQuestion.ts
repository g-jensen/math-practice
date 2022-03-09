/// <reference path="references.ts"/>

class ComplexModulusQuestion extends Question {
    content: string;
    answer: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    constructor() {
        super();
        var c1 = new ComplexNumber(_Math.GetRandomInt(-10,10),_Math.GetRandomInt(-10,10));
        this.content = `If z = ${c1.toString()}, then |z| = ?`;
        this.answer = _Math.ComplexModulus(c1);
        QuestionManager.questionNumber++;
        this.SetOptions(c1);
    }
    SetOptions(c1: ComplexNumber): void {
        var funcs: Array<any> = [
            ComplexModulusQuestion.FauxComplexModulus1(c1).toString(),
            ComplexModulusQuestion.FauxComplexModulus2(c1).toString(),
            ComplexModulusQuestion.FauxComplexModulus3(c1).toString(),
            ComplexModulusQuestion.FauxComplexModulus4(c1).toString(),
        ];
        funcs = _Math.ShuffleArray(funcs);
        funcs.splice(_Math.GetRandomInt(0,4),0,this.answer);
        console.log(this.answer);

        this.optionA = `A. ${funcs[0]}`;
        this.optionB = `B. ${funcs[1]}`;
        this.optionC = `C. ${funcs[2]}`;
        this.optionD = `D. ${funcs[3]}`;
    }
    static FauxComplexModulus1(c1: ComplexNumber): string {
        return `√${(c1.a * c1.a) - (c1.b * c1.b)}`;
    }
    static FauxComplexModulus2(c1: ComplexNumber): string {
        return `√${(c1.a * c1.b) + (c1.b * c1.b)}`;
    }
    static FauxComplexModulus3(c1: ComplexNumber): string {
        return `√${(c1.a * c1.b) - (c1.b * c1.b)}`;
    }
    static FauxComplexModulus4(c1: ComplexNumber): string {
        return `√${(c1.a * c1.a) + (c1.a * c1.b)}`;
    }
}