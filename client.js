// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {
    Math as VRMath,
    ReactInstance,
    Surface,
    Module,
    Location,
} from "react-360-web";
import { Math as GLMath } from "webgl-ui";
const { rotateByQuaternion } = GLMath;
import RCTWorkInProgressSurface from "./RCTWorkInProgressSurface";

const floorPanelLocation = new Location([-50, -20, -10]);
const optionsPanel = new Surface(300, screen.height, Surface.SurfaceShape.Flat);
const cylinderSurface = new Surface(4096, 720, Surface.SurfaceShape.Cylinder);

const MAX_POINTS = 72;

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

const addInputListeners = (correctAnswers, id) => {
    const answerInput = document.getElementById("answer-input");
    const submitButton = document.getElementById("submit-button");

    answerInput.addEventListener("keyup", (e) => {
        if (!!answerInput.value) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
    answerInput.addEventListener("keydown", (e) => {
        if (e.which === 13) {
            !!answerInput.value && checkAnswer(correctAnswers, id);
        }
    });
    submitButton.addEventListener("click", () => {
        checkAnswer(correctAnswers, id);
    });
};

const addAnswerButtonsListeners = (correctAnswers, id) => {
    const answerButtons = document.getElementsByClassName("answer-button");
    const submitButton = document.getElementById("submit-button");

    for (let b of answerButtons) {
        b.addEventListener("click", () => {
            if (correctAnswers.length === 1) {
                const ab = document.getElementsByClassName("answer-button");
                for (let b of ab) {
                    b.className = "answer-button";
                }
            }
            b.className = b.className.includes("clicked") ?
                "answer-button" :
                "answer-button clicked";
            const ab = document.getElementsByClassName("answer-button");
            submitButton.disabled = true;
            for (let b of ab) {
                if (b.className.includes("clicked"))
                    return (submitButton.disabled = false);
            }
        });
    }
    submitButton.addEventListener("click", () => {
        checkAnswer(correctAnswers, id);
    });
};

export default class SurfaceModule extends Module {
    constructor(ctx) {
        super("SurfaceModule");
        this._ctx = ctx;
    }

    checkMobile(surfaceName, id) {
        if (navigator.userAgent.match("add your match criteria here")) {
            let swidth = screen.width;
            let sheight = screen.height;
            surfaceName.resize(swidth, sheight);
            this._ctx.invokeCallback(id, [swidth, sheight]);
        }
    }
}

class Controller extends Module {
    constructor(ctx) {
        super("Controller");
        this._ctx = ctx;
    }
    displayQuestion(q) {
        let content = "";
        if (q.questionType === "fill")
            content = renderFillQuestion(q.questionText, q.correctAnswers);
        if (q.questionType === "multiple")
            content = renderMultipleQuestion(
                q.questionText,
                q.correctAnswers,
                q.answers
            );

        const questionWrapper = document.getElementById("question-wrapper");
        questionWrapper.innerHTML = content;

        if (q.questionType === "fill") addInputListeners(q.correctAnswers, q.id);
        if (q.questionType === "multiple")
            addAnswerButtonsListeners(q.correctAnswers, q.id);

        const closeButton = document.getElementsByClassName("close")[0];
        closeButton.addEventListener("click", () => {
            questionWrapper.removeChild(questionWrapper.children[0]);
            r360.runtime.context.callFunction("RCTDeviceEventEmitter", "emit", [
                "enable-all-questions",
            ]);
        });
    }
    updatePoints(p) {
        document.getElementById("points-container").innerHTML = p;
    }

    startTimer() {
        if (
            document.getElementById("minutes").innerText == "00" &&
            document.getElementById("seconds").innerText == "00"
        )
            _startTimer();
    }

    finishGame({ userPoints }) {
        const minutes = document.getElementById("minutes").innerText;
        const seconds = document.getElementById("seconds").innerText;

        let resultText;
        if (userPoints === 72)
            resultText = `Gratulacje! Udało Ci się zdobyć maksymalną ilość punktów! Mało kto osiąga tak znakomity wynik. Możesz czuć się tatrzańskim ekspertem! Podziel się grą ze znajomymi i dowiedź się, czy któryś z nich jest w stanie Ci dorównać!`;

        if (userPoints < 72 && userPoints >= 55)
            resultText = `Gratulacje! Udało Ci się ukończyć grę z rewelacyjnym wynikiem ${userPoints} punktów! Zasługujesz na miano znawcy polskich Tatr! Pochwal się znajomym i zaproś ich do zabawy!`;

        if (userPoints < 55 && userPoints > 30)
            resultText = `Super! Udało Ci się ukończyć grę z wynikiem ${userPoints} punktów! To na prawdę świetny wynik! Pochwal się znajomym i sprawdź, czy im również uda się dojść tak daleko!`;

        if (userPoints <= 30)
            resultText = `Brawo! Udało Ci się ukończyć grę z wynikiem ${userPoints} punktów! To na prawdę dobry wynik, lecz wierzymy, że stać cię na więcej! Spróbuj pobić swój wynik i zaproś do zabawy znajomych!`;

        document.getElementById("question-wrapper").innerHTML = `
      <div class="results">
        <p>Wynik: ${userPoints} w czasie: ${minutes}:${seconds}</p>
        <p>${resultText}</p>
        <p>Zaproś znajomych do sprawdzenia swojej wiedzy</p>
        <div class="fb-share-button" data-href="https://geotraf.pl/quizzes/vr-quiz-tatry" data-layout="button_count"  data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgeotraf.pl%2Fquizzes%2Fmorskie-oko-szczyty&quote=Uda%C5%82o%20mi%20si%C4%99%20zdoby%C4%87%20${userPoints}%20na%20${MAX_POINTS}%20mo%C5%BCliwych%20w%20VR%20quizie%20o%20tatrach%20-%20sprawd%C5%BA%20si%C4%99!"  class="fb-xfbml-parse-ignore">Udostępnij</a></div>
        <div id="fb-page-wrapper"><div class="fb-page" data-href="https://www.facebook.com/geotraf/" data-tabs="" data-width="" data-height="" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/geotraf/" class="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/geotraf/">Geotraf - Podróżnicze Inspiracje</a></blockquote></div>
        </div>      </div>`;
        FB.XFBML.parse(document.getElementById("fb-page-wrapper"));
    }

    gameOver(userPoints) {
        let resultText;
        if (userPoints >= 16)
            resultText = `Nie udało Ci się ukończyć gry, ale ${userPoints} to dobry wynik. Spróbuj jeszcze raz, tym razem już na pewno się uda!🧐`;

        if (userPoints < 16 && userPoints >= 6)
            resultText = `Koniec gry! Czyżbyś poległ na tatrzańskich szczytach? Twój wynik, ${userPoints} punktów nie jest zły, dlatego spróbuj jeszcze raz! 🧐  `;

        if (userPoints < 6)
            resultText = `Koniec gry! Zdobyłeś zaledwie ${userPoints}pkt, co oznacza, że w twojej wiedzy są istotne braki! Przed Tobą jeszcze 4 sceny z pytaniami, w sumie ponad 70! Przygotuj się i spróbuj ponownie 🧐`;

        document.getElementById("question-wrapper").innerHTML = `
    <div class="results">
    <div id="fb-root"></div>
      <p>${resultText}</p>
      <p>Zaproś znajomych do sprawdzenia swojej wiedzy</p>
      <div class="fb-share-button" data-href="https://geotraf.pl/quizzes/vr-quiz-tatry" data-layout="button_count"  data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgeotraf.pl%2Fquizzes%2Fmorskie-oko-szczyty&quote=Uda%C5%82o%20mi%20si%C4%99%20zdoby%C4%87%20%24%7BuserPoints%7D%20na%20%24%7BMAX_POINTS%7D%20mo%C5%BCliwych%20w%20VR%20quizie%20o%20tatrach%20-%20sprawd%C5%BA%20si%C4%99!"  class="fb-xfbml-parse-ignore">Udostępnij</a></div>
      <button type="button" id="submit-button" onclick="window.location.reload(true)" style="margin-bottom: 10px;" ><span>Restart</span></button>
      <div class="fb-share-button" data-href="https://geotraf.pl/quizzes/vr-quiz-tatry" data-layout="button_count"  data-size="large"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgeotraf.pl%2Fquizzes%2Fmorskie-oko-szczyty&quote=Uda%C5%82o%20mi%20si%C4%99%20zdoby%C4%87%20${userPoints}%20na%20${MAX_POINTS}%20mo%C5%BCliwych%20w%20VR%20quizie%20o%20tatrach%20-%20sprawd%C5%BA%20si%C4%99!"  class="fb-xfbml-parse-ignore">Udostępnij</a></div>
      </div>
      </div>`;
        FB.XFBML.parse(document.getElementById("fb-page-wrapper"));
    }

    openUrl(url) {
        window.open(url);
    }
    checkMobile(cb) {
        let swidth = screen.width;
        let sheight = screen.height;
        // surfaceName.resize(swidth, sheight);
        this._ctx.invokeCallback(cb, [swidth, sheight]);
    }
}

function init(bundle, parent, options = {}) {
    const cameraDirection = [0, 0, -1];
    const peakButtoncameraDirection = [0.85, 0.45, -1];
    const r360 = new ReactInstance(bundle, parent, {
        // Add custom options here
        fullScreen: true,
        nativeModules: [(ctx) => new Controller(ctx)],
        customViews: [{
            // Add custom native view "RCTSurface" to support surface control
            name: "RCTWorkInProgressSurface",
            view: RCTWorkInProgressSurface,
        }, ],
        frame: () => {
            const cameraQuat = r360.getCameraQuaternion();
            cameraDirection[0] = 0;
            cameraDirection[1] = 0;
            cameraDirection[2] = -1;
            const peakBtnDirX = 0;
            const peakBtnDirY = 0.5;
            const peakBtnDirZ = -1;
            const peakBtnDirMgn = Math.sqrt(
                peakBtnDirX * peakBtnDirX +
                peakBtnDirY * peakBtnDirY +
                peakBtnDirZ * peakBtnDirZ
            );
            peakButtoncameraDirection[0] = peakBtnDirX / peakBtnDirMgn;
            peakButtoncameraDirection[1] = peakBtnDirY / peakBtnDirMgn;
            peakButtoncameraDirection[2] = peakBtnDirZ / peakBtnDirMgn;
            rotateByQuaternion(cameraDirection, cameraQuat);

            const cx = cameraDirection[0];
            const cy = cameraDirection[1];
            const cz = cameraDirection[2];
            //VRMath.rotateByQuaternion(peakButtoncameraDirection, cameraQuat);
            //showPeakButton.setWorldPosition(cx, cy, cz);
            // console.log(x);
            const horizAngle = Math.atan2(cx, -cz);
            const vertAngle = Math.asin(cy / Math.sqrt(cx * cx + cy * cy + cz * cz));
            optionsPanel.setAngle(horizAngle, vertAngle);
        },
        ...options,
    });

    cylinderSurface.setRadius(360);

    RCTWorkInProgressSurface.__reactInstance = r360;
    r360.renderToSurface(
        r360.createRoot("beskidy_tour", {
            initialScene: window.location.search.split("?")[1],
        }),
        cylinderSurface
    );

    r360.renderToLocation(r360.createRoot("FloorPanel"), floorPanelLocation);
    return r360;
}

window.React360 = { init };

const renderFillQuestion = (questionText, correctAnswers) => {
    return `
  <div class="question">
    <h3>${questionText}</h3>
    <input name="input" placeholder="Podaj nazwę" type="text" id="answer-input" autofocus onblur="this.focus()" />
    <button type="button" id="submit-button" disabled><span>OK</span></button>
    <div class="close" />
  </div>`;
};

const renderMultipleQuestion = (questionText, correctAnswers, answers) => {
        return `
    <div class="question">
      <h3>${questionText}</h3>
        ${answers
          .map((a, idx) => {
            return `<button class="answer-button">${a}</button>`;
          })
          .join("")}
      <button type="button" id="submit-button" disabled ><span>OK</span></button>
      <div class="close" />
    </div>`;
};