export default {
    availablePoints: 10,
    backgroundImage: "polana_wlosienica.jpg",
    infoPanels: [{
        styles: {
            transform: [
                { rotateY: `260deg` },
                { rotateX: `2deg` },
                { translate: [0, 0, -4] },
            ],
            position: "absolute",
        },
        icon: "inny znacznik.png",
        content: `
    <div class="info-panel-wrapper">
      <div>dssddssdsd</div>
    </div>
    `,
    }, ],
    questions: [{
            id: 1,
            questionText: "W jakiej dolinie położona jest Polana Włosienica?",
            questionType: "multiple",
            answers: ["Roztoki", "Rybiego Potoku", "Goryczkowa", "Pańszczyca"],
            correctAnswers: ["Rybiego Potoku"],
            styles: {
                transform: [
                    { rotateY: `280deg` },
                    { rotateX: `0deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
        },
        {
            id: 2,
            questionText: "Jak nazywa się droga prowadząca od Zakopanego do Morskiego Oka",
            questionType: "multiple",
            answers: [
                "Stanisława Staszica",
                "Tytusa Chałubińśkiego",
                "Klemensa Bachledy",
                "Oswalda Balzera",
            ],
            correctAnswers: ["Oswalda Balzera"],
            styles: {
                transform: [
                    { rotateY: `63deg` },
                    { rotateX: `-11deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
        },
        {
            id: 3,
            questionText: "Jak w gwarze nazywany jest konny wóz góralski przewożący turystów z Palenicy Białczańskiej na Polanę Włosienica?",
            questionType: "fill",
            correctAnswers: ["fasiag"],
            styles: {
                transform: [
                    { rotateY: `85deg` },
                    { rotateX: `-7deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 4,
            questionText: "Jaka jest odległość z Polany Włosienica do Schroniska PTTK Morskie Oko?",
            questionType: "multiple",
            answers: ["około 1 km", "około 2 km", "około 3 km", "około 4 km"],
            correctAnswers: ["około 2 km"],
            styles: {
                transform: [
                    { rotateY: `251deg` },
                    { rotateX: `-4deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
        },

        {
            id: 5,
            questionText: "Jak nazywa się rzeka, wzdłuż której przebiega fragment szlaku czerwonego, od Polany Włosienica na Morskie Oko?",
            questionType: "multiple",
            answers: ["Rybi Potok", "Biały Potok", "Roztoka", "Białka"],
            correctAnswers: ["Rybi Potok"],
            styles: {
                transform: [
                    { rotateY: `350deg` },
                    { rotateX: `-6deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
        },
    ],
    doors: [{
            pointsToUnlock: 6,
            styles: {
                transform: [
                    { rotateY: `245deg` },
                    { rotateX: `-10deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "close.png",
            nextScene: "morskie_oko",
        },
        {
            styles: {
                transform: [
                    { rotateY: `63deg` },
                    { rotateX: `-17deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "wir.png",
            nextScene: "schroniskoroztoka2",
        },
    ],
};