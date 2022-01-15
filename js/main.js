var ComplexNumber = /** @class */ (function () {
    function ComplexNumber(a, b) {
        this.a = a;
        this.b = b;
    }
    ComplexNumber.prototype.toString = function () {
        var a_sign = "";
        var b_sign = "+";
        if (this.a < 0) {
            a_sign = "-";
        }
        if (this.b < 0) {
            b_sign = "-";
        }
        if (this.b == 0) {
            return ("" + a_sign + Math.abs(this.a));
        }
        if (this.a == 0) {
            if (b_sign == "+") {
                b_sign = "";
            }
            if (Math.abs(this.b) == 1) {
                return b_sign + "i";
            }
            return ("" + b_sign + Math.abs(this.b) + "i");
        }
        if (Math.abs(this.b) == 1) {
            return ("" + a_sign + Math.abs(this.a) + " " + b_sign + " i");
        }
        return ("" + a_sign + Math.abs(this.a) + " " + b_sign + " " + Math.abs(this.b) + "i");
    };
    return ComplexNumber;
}());
/// <reference path="references.ts"/>
var ComplexNumberFraction = /** @class */ (function () {
    function ComplexNumberFraction(c1, c2) {
        this.numerator = c1;
        this.denominator = c2;
    }
    ComplexNumberFraction.prototype.toString = function () {
        return "<math><mfrac><mrow>" + this.numerator.toString() + "</mrow><mrow>" + this.denominator.toString() + "</mrow></mfrac></math>";
    };
    return ComplexNumberFraction;
}());
var _Math = /** @class */ (function () {
    function _Math() {
    }
    _Math.ShuffleArray = function (array) {
        var output = new Array();
        var len = array.length;
        var rand = _Math.GetRandomInt(0, array.length - 1);
        for (var i = 0; i < len; i++) {
            output.push(array[rand]);
            array.splice(rand, 1);
            rand = _Math.GetRandomInt(0, array.length - 1);
        }
        return output;
    };
    _Math.GetRandomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    _Math.ComplexMult = function (c1, c2) {
        var a = (c1.a * c2.a) - (c1.b * c2.b);
        var b = (c1.b * c2.a) + (c1.a * c2.b);
        return new ComplexNumber(a, b);
    };
    _Math.FauxComplexMult1 = function (c1, c2) {
        var a = (c1.b * c2.a) - (c1.a * c2.b);
        var b = (c1.b * c2.a) + (c1.a * c2.b);
        return new ComplexNumber(a, b);
    };
    _Math.FauxComplexMult2 = function (c1, c2) {
        var a = (c1.a * c2.a) - (c1.b * c2.b);
        var b = (c1.a * c2.a) + (c1.b * c2.b);
        return new ComplexNumber(a, b);
    };
    _Math.FauxComplexMult3 = function (c1, c2) {
        var a = (c1.a * c2.a) + (c1.b * c2.b);
        var b = (c1.b * c2.a) - (c1.a * c2.b);
        return new ComplexNumber(a, b);
    };
    _Math.FauxComplexMult4 = function (c1, c2) {
        var a = (c1.a * c2.a) + (c1.b + c2.b);
        var b = (c1.b * c2.a) - (c1.a * c2.b);
        return new ComplexNumber(a, b);
    };
    _Math.FauxComplexMult5 = function (c1, c2) {
        var a = (c1.a * c2.a) - (c1.b * c2.b);
        var b = (c1.b * c2.a) + (c1.a * c2.b);
        return new ComplexNumber(b, a);
    };
    _Math.FauxComplexMult6 = function (c1, c2) {
        var a = (c1.b * c2.b) - (c1.a * c2.a);
        var b = (c1.b * c2.b) + (c1.a * c2.a);
        return new ComplexNumber(a, b);
    };
    _Math.ComplexDivide = function (c1, c2) {
        var conj = new ComplexNumber(c2.a, -c2.b);
        var output = new ComplexNumberFraction(_Math.ComplexMult(c1, conj), new ComplexNumber((c2.a * c2.a) + (c2.b * c2.b), 0));
        return output;
    };
    _Math.AreModZero = function (a, n) {
        for (var index = 0; index < a.length; index++) {
            var element = a[index];
            if (element % n != 0) {
                return false;
            }
        }
        return true;
    };
    _Math.GCF = function (a) {
        var biggest = Math.max.apply(Math, a);
        var gcf = 1;
        for (var i = 2; i <= biggest; i++) {
            if (_Math.AreModZero(a, i) && i > gcf) {
                gcf = i;
            }
        }
        return gcf;
    };
    _Math.SimplifyComplexFraction = function (fraction) {
        var a = fraction.numerator.a;
        var b = fraction.numerator.b;
        var c = fraction.denominator.a;
        var gcf = _Math.GCF([a, b, c]);
        console.log(gcf);
        a /= gcf;
        b /= gcf;
        c /= gcf;
        return new ComplexNumberFraction(new ComplexNumber(a, b), new ComplexNumber(c, 0));
    };
    _Math.FauxComplexDivide1 = function (c1, c2) {
        var conj = new ComplexNumber(c2.a, c2.b);
        var output = new ComplexNumberFraction(_Math.ComplexMult(c1, conj), new ComplexNumber((c2.a * c2.a) + (c2.b * c2.b), 0));
        return output;
    };
    _Math.FauxComplexDivide2 = function (c1, c2) {
        var conj = new ComplexNumber(c2.a, -c2.b);
        var output = new ComplexNumberFraction(_Math.ComplexMult(c1, conj), new ComplexNumber((c2.a * c2.a) - (c2.b * c2.b), 0));
        return output;
    };
    _Math.FauxComplexDivide3 = function (c1, c2) {
        var conj = new ComplexNumber(c1.a, -c1.b);
        var output = new ComplexNumberFraction(_Math.ComplexMult(c2, conj), new ComplexNumber((c1.a * c1.a) + (c1.b * c1.b), 0));
        return output;
    };
    _Math.FauxComplexDivide4 = function (c1, c2) {
        var conj = new ComplexNumber(c2.a, c2.b);
        var output = new ComplexNumberFraction(_Math.ComplexMult(c2, conj), new ComplexNumber((c2.a * c2.a) + (c2.b * c2.b), 0));
        return output;
    };
    _Math.FauxComplexDivide5 = function (c1, c2) {
        var conj = new ComplexNumber(c2.a, -c2.b);
        var output = new ComplexNumberFraction(_Math.ComplexMult(c1, conj), new ComplexNumber((c2.a * c2.a) + (c2.b * c2.b), 0));
        return output;
    };
    return _Math;
}());
/// <reference path="references.ts"/>
var QuestionManager = /** @class */ (function () {
    function QuestionManager() {
    }
    QuestionManager.Init = function () {
        //var rand = Math.random() < 0.5;
        // division notation doesnt work unless on firefox so disable for now...
        var rand = true;
        if (rand) {
            var c1 = new ComplexNumber(_Math.GetRandomInt(-10, 10), _Math.GetRandomInt(-10, 10));
            var c2 = new ComplexNumber(_Math.GetRandomInt(-10, 10), _Math.GetRandomInt(-10, 10));
            QuestionManager.question = "(" + c1.toString() + ")(" + c2.toString() + ") = ?";
            QuestionManager.answer = _Math.ComplexMult(c1, c2).toString();
            QuestionManager.questionNumber++;
            QuestionManager.SetOptionsMult(c1, c2);
        }
        else {
            var c1 = new ComplexNumber(_Math.GetRandomInt(-10, 10), _Math.GetRandomInt(-10, 10));
            var c2 = new ComplexNumber(_Math.GetRandomInt(-10, 10), _Math.GetRandomInt(-10, 10));
            var f = new ComplexNumberFraction(c1, c2);
            QuestionManager.question = f.toString() + " = ?";
            var rand1 = Math.random() < 0.5;
            var div = _Math.ComplexDivide(c1, c2);
            if (rand1) {
                QuestionManager.answer = div.toString();
            }
            else {
                QuestionManager.answer = _Math.SimplifyComplexFraction(div).toString();
            }
            QuestionManager.questionNumber++;
            QuestionManager.SetOptionsFrac(c1, c2);
        }
        document.getElementById("winloss").innerHTML = "Correct: " + this.correctCount + "; Incorrect: " + this.incorrectCount;
        QuestionManager.FillQuestion();
        QuestionManager.FillOptions();
    };
    QuestionManager.SetOptionsFrac = function (c1, c2) {
        var funcs = [
            _Math.FauxComplexDivide1(c1, c2).toString(),
            _Math.FauxComplexDivide2(c1, c2).toString(),
            _Math.FauxComplexDivide3(c1, c2).toString(),
            _Math.FauxComplexDivide4(c1, c2).toString(),
            _Math.FauxComplexDivide5(c1, c2).toString()
        ];
        funcs = _Math.ShuffleArray(funcs);
        funcs.splice(_Math.GetRandomInt(0, 3), 0, QuestionManager.answer);
        QuestionManager.optionA = "A. " + funcs[0];
        QuestionManager.optionB = "B. " + funcs[1];
        QuestionManager.optionC = "C. " + funcs[2];
        QuestionManager.optionD = "D. " + funcs[3];
    };
    QuestionManager.SetOptionsMult = function (c1, c2) {
        var funcs = [
            _Math.FauxComplexMult1(c1, c2).toString(),
            _Math.FauxComplexMult2(c1, c2).toString(),
            _Math.FauxComplexMult3(c1, c2).toString(),
            _Math.FauxComplexMult4(c1, c2).toString(),
            _Math.FauxComplexMult5(c1, c2).toString(),
            _Math.FauxComplexMult6(c1, c2).toString()
        ];
        funcs = _Math.ShuffleArray(funcs);
        funcs.splice(_Math.GetRandomInt(0, 4), 0, QuestionManager.answer);
        console.log(QuestionManager.answer);
        QuestionManager.optionA = "A. " + funcs[0];
        QuestionManager.optionB = "B. " + funcs[1];
        QuestionManager.optionC = "C. " + funcs[2];
        QuestionManager.optionD = "D. " + funcs[3];
    };
    QuestionManager.FillOptions = function () {
        var a = document.getElementById("answers_a");
        a.innerHTML = QuestionManager.optionA;
        var b = document.getElementById("answers_b");
        b.innerHTML = QuestionManager.optionB;
        var c = document.getElementById("answers_c");
        c.innerHTML = QuestionManager.optionC;
        var d = document.getElementById("answers_d");
        d.innerHTML = QuestionManager.optionD;
    };
    QuestionManager.FillQuestion = function () {
        var label = document.getElementById("questionLabel");
        label.innerHTML = "Question " + QuestionManager.questionNumber;
        var question = document.getElementById("questionContent");
        question.innerHTML = QuestionManager.question;
    };
    QuestionManager.Pick = function (answer) {
        var pick = document.getElementById("answers_" + answer).innerHTML;
        if (pick.substring(3) == this.answer) {
            this.correctCount++;
        }
        else {
            this.incorrectCount++;
        }
        this.Init();
        Timer.restart();
    };
    QuestionManager.correctCount = 0;
    QuestionManager.incorrectCount = 0;
    QuestionManager.questionNumber = 0;
    return QuestionManager;
}());
var Timer = /** @class */ (function () {
    function Timer() {
    }
    Timer.restart = function () {
        this.prev = this.timer;
        this.timer = 0.0;
    };
    Timer.timer = 0.0;
    Timer.prev = 0.0;
    return Timer;
}());
/// <reference path="ComplexNumber.ts"/>
/// <reference path="Math.ts"/>
/// <reference path="QuestionManager.ts"/>
/// <reference path="Timer.ts"/>
/// <reference path="references.ts"/>
var main = function () {
    QuestionManager.Init();
    var timer = document.getElementById("timer");
    setInterval(function () {
        Timer.timer += 0.1;
        timer.innerHTML = "Timer: " + Timer.timer.toPrecision(3) + "s; Prev: " + Timer.prev.toPrecision(3) + "s";
    }, 100);
};
main();
