const fullScreenButton = document.getElementsByClassName("full-screen")[0];
var elem = document.documentElement;
const fullScreenClasses = "option-button full-screen";

fullScreenButton.addEventListener("click", () => {
    if (fullScreenButton.className.includes("active")) {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        fullScreenButton.className = fullScreenClasses;
    } else {
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }
        fullScreenButton.className = `${fullScreenClasses} active`;
    }
});

const checkAnswer = (correctAnswers, id) => {
    const questionWrapper = document.getElementById("question-wrapper");
    const clickedButtons = document.getElementsByClassName(
        "answer-button clicked"
    );

    let isCorrect;
    if (clickedButtons.length) {
        let userAnswers = [];
        for (let b of clickedButtons) {
            userAnswers.push(b.innerHTML);
        }
        isCorrect = userAnswers.equals(correctAnswers);
    } else {
        const userInput = document.getElementById("answer-input").value;
        isCorrect = correctAnswers.includes(
            escapeDiacritics(userInput).toLowerCase()
        );
    }

    r360.runtime.context.callFunction("RCTDeviceEventEmitter", "emit", [
        "answer",
        { isCorrect, id },
    ]);

    r360.runtime.context.callFunction("RCTDeviceEventEmitter", "emit", [
        "enable-all-questions",
        { isCorrect },
    ]);

    questionWrapper.removeChild(questionWrapper.children[0]);
};

// Warn if overriding existing method
if (Array.prototype.equals)
    console.warn(
        "Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
    );
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function(array) {
    // if the other array is a falsy value, return
    if (!array) return false;

    // compare lengths - can save a lot of time
    if (this.length != array.length) return false;

    for (var i = 0, l = this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i])) return false;
        } else if (this[i] != array[i]) {
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;
        }
    }
    return true;
};
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", { enumerable: false });

const escapeDiacritics = (s) =>
    s
    .replace(/ą/g, "a")
    .replace(/Ą/g, "A")
    .replace(/ć/g, "c")
    .replace(/Ć/g, "C")
    .replace(/ę/g, "e")
    .replace(/Ę/g, "E")
    .replace(/ł/g, "l")
    .replace(/Ł/g, "L")
    .replace(/ń/g, "n")
    .replace(/Ń/g, "N")
    .replace(/ó/g, "o")
    .replace(/Ó/g, "O")
    .replace(/ś/g, "s")
    .replace(/Ś/g, "S")
    .replace(/ż/g, "z")
    .replace(/Ż/g, "Z")
    .replace(/ź/g, "z")
    .replace(/Ź/g, "Z");

const _startTimer = () => {
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
};