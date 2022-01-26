class Question {
    content: string;
    answer: string;
    optionA: string;
    optionB: string;
    optionC: string;
    optionD: string;
    FillOptions(): void {
        var a = document.getElementById("answers_a");
        a.innerHTML = this.optionA;
        var b = document.getElementById("answers_b");
        b.innerHTML = this.optionB;
        var c = document.getElementById("answers_c");
        c.innerHTML = this.optionC;
        var d = document.getElementById("answers_d");
        d.innerHTML = this.optionD;
    }
    FillQuestion() : void {
        var label = document.getElementById("questionLabel");
        label.innerHTML = "Question " + QuestionManager.questionNumber;

        var question = document.getElementById("questionContent");
        question.innerHTML = QuestionManager.question.content;
    }
}