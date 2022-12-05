export default {
    availablePoints: 5,
    backgroundImage: "schroniskoroztoka2.jpg",
    infoPanels: [{
            styles: {
                transform: [
                    { rotateY: `20deg` },
                    { rotateX: `-2deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "inny znacznik.png",
            content: `
                <div class="info-panel-wrapper">
                  <iframe style="width: 100%; height: 100%" src="http://localhost:3000/polana-wlosienica?polana_wlosienica"></iframe>
                </div>
`,
        },
        {
            styles: {
                transform: [
                    { rotateY: `150deg` },
                    { rotateX: `-2deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "inny znacznik.png",
            content: `
              <div class="info-panel-wrapper">
                <iframe style="width: 100%; height: 100%" src="http://localhost:3000/schronisko-roztoka-2"></iframe>
              </div>`,
        },
    ],
    doors: [{
        pointsToUnlock: 3,
        styles: {
            transform: [
                { rotateY: `320deg` },
                { rotateX: `3deg` },
                { translate: [0, 0, -4] },
            ],
            position: "absolute",
        },
        icon: "close.png",
        nextScene: "polana_wlosienica",
    }, ],
    questions: [{
            id: 1,
            questionText: "Jakie imię nosi Schronisko PTTK w Dolinie Roztoki?",
            questionType: "multiple",
            answers: [
                "Wincentego Pola",
                "Władysława Krygowskiego",
                "Walerego Goetla",
                "Ludwika Zejsznera",
            ],
            correctAnswers: ["Wincentego Pola"],
            styles: {
                transform: [
                    { rotateY: `148deg` },
                    { rotateX: `7deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
        },
        {
            id: 2,
            questionText: "Potok Roztoka jest dopływem rzeki...",
            questionType: "multiple",
            answers: ["Białka", "Sucha Woda", "Czarna Woda", "Bystra"],
            correctAnswers: ["Białka"],
            styles: {
                transform: [
                    { rotateY: `300deg` },
                    { rotateX: `5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 3,
            questionText: "Na jakiej wysokości znajduje się Schronisko PTTK w Dolinie Roztoki?",
            questionType: "multiple",
            answers: [
                "1247 m n.p.m.",
                "1121 m .n.p.m.",
                "1031 m n.p.m.",
                "1007 m n.p.m.",
            ],
            correctAnswers: ["1031 m n.p.m."],
            styles: {
                transform: [
                    { rotateY: `149deg` },
                    { rotateX: `-8deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 4,
            questionText: "Który z wymienionych obiektów znajduje się najbliżej Schroniska PTTK w Dolinie Roztoki?",
            questionType: "multiple",
            answers: [
                "Gęsia Szyja",
                "Palenica Białczańska",
                "Wodogrzmoty Mickiewicza",
                "Turnia nad Dziadem",
            ],
            correctAnswers: ["Wodogrzmoty Mickiewicza"],
            styles: {
                transform: [
                    { rotateY: `350deg` },
                    { rotateX: `-6deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 5,
            questionText: "Jaki jest kolor szlaku prowadzącego do Schroniska PTTK w Dolinie Roztoki?",
            questionType: "fill",
            correctAnswers: ["zielony", "zielen"],
            styles: {
                transform: [
                    { rotateY: `250deg` },
                    { rotateX: `-5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
    ],
};