import { types } from "mobx-state-tree";
import scenes from "../tourContent/scenesConfig";

const AppStore = types
    .model("store", {
        currentScene: types.optional(types.string, "schroniskoroztoka2"),
        showPeaks: types.optional(types.boolean, false),
        points: types.optional(types.integer, 0),
        availablePoints: types.optional(types.integer, 5),
        wrongAnswersCount: types.optional(types.integer, 0),
    })

.actions((self) => {
    return {
        changeCurrentScene(scene) {
            Object.keys(scenes).includes(scene) && (self.currentScene = scene);
        },
        changeShowPeaks() {
            self.showPeaks = !self.showPeaks;
        },
        addPoint() {
            self.points = self.points + 1;
        },
        addWrongAnswers() {
            self.wrongAnswersCount = self.wrongAnswersCount + 1;
        },
        setAvailablePoints(points) {
            if (points > self.availablePoints) self.availablePoints = points;
        },
    };
});

export default AppStore;