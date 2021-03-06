/// <reference path="references.ts"/>

class QuestionManager {
    static correctCount: number = 0;
    static incorrectCount: number = 0;
    static questionNumber: number = 0;
    static question: Question = new Question();
    static Init() : void {
        var rand = Math.random() < 0.5;
        // division notation doesnt work unless on firefox so disable for now...
        //var rand = true;
        var questionTypes: Array<Question> = [
            new ComplexMultQuestion(), 
            new ComplexDivideQuestion(),
            new ComplexModulusQuestion()
        ];
        var question = _Math.GetRandomInt(0,questionTypes.length);
        this.question = questionTypes[question];

        document.getElementById("winloss").innerHTML = `Correct: ${this.correctCount}; Incorrect: ${this.incorrectCount}`;

        this.question.FillQuestion();
        this.question.FillOptions();
    }
    static Pick(answer: string) : void {
        var pick = document.getElementById(`answers_${answer}`).innerHTML;
        if (pick.substring(3) == this.question.answer) {
            this.correctCount++;
        } else {
            this.incorrectCount++;
        }
        this.Init();
        Timer.restart();
    }
}