class ComplexDivideQuestion extends Question {
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
        var f = new ComplexNumberFraction(c1,c2);
        this.content = `${f.toString()} = ?`
        var rand1 = Math.random() < 0.5;
        var div = _Math.ComplexDivide(c1,c2);
        if (rand1) {
            this.answer = div.toString();
        } else {
            this.answer = _Math.SimplifyComplexFraction(div).toString();
        }
        console.log(this.answer);
        QuestionManager.questionNumber++;
        this.SetOptions(c1,c2);
    }
    SetOptions(c1: ComplexNumber, c2: ComplexNumber): void {
        var funcs: Array<any> = [
            ComplexDivideQuestion.FauxComplexDivide1(c1,c2).toString(),
            ComplexDivideQuestion.FauxComplexDivide2(c1,c2).toString(),
            ComplexDivideQuestion.FauxComplexDivide3(c1,c2).toString(),
            ComplexDivideQuestion.FauxComplexDivide4(c1,c2).toString(),
            ComplexDivideQuestion.FauxComplexDivide5(c1,c2).toString()
        ];
        funcs = _Math.ShuffleArray(funcs);
        funcs.splice(_Math.GetRandomInt(0,3),0,this.answer);

        this.optionA = `A. ${funcs[0]}`;
        this.optionB = `B. ${funcs[1]}`;
        this.optionC = `C. ${funcs[2]}`;
        this.optionD = `D. ${funcs[3]}`;
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