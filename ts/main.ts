/// <reference path="references.ts"/>

const main = () : void => {
    QuestionManager.Init();

    var timer = document.getElementById("timer");
    setInterval(() => {
        Timer.timer += 0.1;
        timer.innerHTML = `Timer: ${Timer.timer.toPrecision(3)}s; Prev: ${Timer.prev.toPrecision(3)}s`
    },100)

}

main();