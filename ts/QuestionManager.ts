/// <reference path="references.ts"/>

class QuestionManager {
    static correctCount: number = 0;
    static incorrectCount: number = 0;
    static questionNumber: number = 0;
    static question: string;
    static answer: string;
    static optionA: string;
    static optionB: string;
    static optionC: string;
    static optionD: string;
    static Init() : void {
        //var rand = Math.random() < 0.5;
        // division notation doesnt work unless on firefox so disable for now...
        var rand = true;
        if (rand) {
            var c1 = new ComplexNumber(_Math.GetRandomInt(-10,10),_Math.GetRandomInt(-10,10));
            var c2 = new ComplexNumber(_Math.GetRandomInt(-10,10),_Math.GetRandomInt(-10,10));
            QuestionManager.question = `(${c1.toString()})(${c2.toString()}) = ?`;
            QuestionManager.answer = _Math.ComplexMult(c1,c2).toString();
            QuestionManager.questionNumber++;
            QuestionManager.SetOptionsMult(c1,c2);
        } else {
            var c1 = new ComplexNumber(_Math.GetRandomInt(-10,10),_Math.GetRandomInt(-10,10));
            var c2 = new ComplexNumber(_Math.GetRandomInt(-10,10),_Math.GetRandomInt(-10,10));
            var f = new ComplexNumberFraction(c1,c2);
            QuestionManager.question = `${f.toString()} = ?`
            var rand1 = Math.random() < 0.5;
            var div = _Math.ComplexDivide(c1,c2);
            if (rand1) {
                QuestionManager.answer = div.toString();
            } else {
                QuestionManager.answer = _Math.SimplifyComplexFraction(div).toString();
            }
            QuestionManager.questionNumber++;
            QuestionManager.SetOptionsFrac(c1,c2);
            
        }

        document.getElementById("winloss").innerHTML = `Correct: ${this.correctCount}; Incorrect: ${this.incorrectCount}`;

        QuestionManager.FillQuestion();
        QuestionManager.FillOptions();
    }
    static SetOptionsFrac(c1: ComplexNumber,c2: ComplexNumber): void {
        var funcs: Array<any> = [
            _Math.FauxComplexDivide1(c1,c2).toString(),
            _Math.FauxComplexDivide2(c1,c2).toString(),
            _Math.FauxComplexDivide3(c1,c2).toString(),
            _Math.FauxComplexDivide4(c1,c2).toString(),
            _Math.FauxComplexDivide5(c1,c2).toString()
        ];
        funcs = _Math.ShuffleArray(funcs);
        funcs.splice(_Math.GetRandomInt(0,3),0,QuestionManager.answer);

        QuestionManager.optionA = `A. ${funcs[0]}`;
        QuestionManager.optionB = `B. ${funcs[1]}`;
        QuestionManager.optionC = `C. ${funcs[2]}`;
        QuestionManager.optionD = `D. ${funcs[3]}`;
    }
    static SetOptionsMult(c1 : ComplexNumber, c2 : ComplexNumber) : void {
        var funcs: Array<any> = [
            _Math.FauxComplexMult1(c1,c2).toString(),
            _Math.FauxComplexMult2(c1,c2).toString(),
            _Math.FauxComplexMult3(c1,c2).toString(),
            _Math.FauxComplexMult4(c1,c2).toString(),
            _Math.FauxComplexMult5(c1,c2).toString(),
            _Math.FauxComplexMult6(c1,c2).toString()
        ];
        funcs = _Math.ShuffleArray(funcs);
        funcs.splice(_Math.GetRandomInt(0,4),0,QuestionManager.answer);
        console.log(QuestionManager.answer);

        QuestionManager.optionA = `A. ${funcs[0]}`;
        QuestionManager.optionB = `B. ${funcs[1]}`;
        QuestionManager.optionC = `C. ${funcs[2]}`;
        QuestionManager.optionD = `D. ${funcs[3]}`;
    }
    static FillOptions() : void {
        var a = document.getElementById("answers_a");
        a.innerHTML = QuestionManager.optionA;
        var b = document.getElementById("answers_b");
        b.innerHTML = QuestionManager.optionB;
        var c = document.getElementById("answers_c");
        c.innerHTML = QuestionManager.optionC;
        var d = document.getElementById("answers_d");
        d.innerHTML = QuestionManager.optionD;
    }
    static FillQuestion() : void {
        var label = document.getElementById("questionLabel");
        label.innerHTML = "Question " + QuestionManager.questionNumber;

        var question = document.getElementById("questionContent");
        question.innerHTML = QuestionManager.question;
    }
    static Pick(answer: string) : void {
        var pick = document.getElementById(`answers_${answer}`).innerHTML;
        if (pick.substring(3) == this.answer) {
            this.correctCount++;
        } else {
            this.incorrectCount++;
        }
        this.Init();
        Timer.restart();
    }
}