export default {
    availablePoints: 73,
    backgroundImage: "przelecz_szpiglas360.jpg",
    infoPanels: [{
            styles: {
                transform: [
                    { rotateY: `57deg` },
                    { rotateX: `0deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "inny znacznik.png",
            content: `
        <div class="info-panel-wrapper">
        <iframe style="width: 100%; height: 100%" src="http://localhost:3000/rysy"></iframe>
     </div>`,
        },

        {
            styles: {
                transform: [
                    { rotateY: `67deg` },
                    { rotateX: `-19deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "inny znacznik.png",
            content: `
      <div class="info-panel-wrapper">
        <iframe style="width: 100%; height: 100%" src="http://localhost:3000/czarnystaw"></iframe>
      </div>`,
        },

        {
            styles: {
                transform: [
                    { rotateY: `185deg` },
                    { rotateX: `-32deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "inny znacznik.png",
            content: `
      <div class="info-panel-wrapper">
        <iframe style="width: 100%; height: 100%" src="http://localhost:3000/5-stawow"></iframe>
      </div>`,
        },

        {
            styles: {
                transform: [
                    { rotateY: `287deg` },
                    { rotateX: `15deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "inny znacznik.png",
            content: `
      <div class="info-panel-wrapper">
        <iframe style="width: 100%; height: 100%" src="http://localhost:3000/szpiglasowy-wierch"></iframe>
      </div>`,
        },

        {
            styles: {
                transform: [
                    { rotateY: `90deg` },
                    { rotateX: `-20deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "inny znacznik.png",
            content: `
            <div class="info-panel-wrapper">
              <iframe style="width: 100%; height: 100%" src="http://localhost:3000/zolty-szlak?zoltyszlak"></iframe>
            </div>
`,
        },
    ],

    doors: [{
            styles: {
                transform: [
                    { rotateY: `90deg` },
                    { rotateX: `-24deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "open.png",
            nextScene: "zoltyszlak",
        },
        {
            finish: true,
            pointsToUnlock: 30,
            styles: {
                transform: [
                    { rotateY: `245deg` },
                    { rotateX: `8deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
        },
    ],
    questions: [{
            id: 1,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["szpiglasowy wierch", "szpiglas"],
            styles: {
                transform: [
                    { rotateY: `-72deg` },
                    { rotateX: `13deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 2,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["miedziane"],
            styles: {
                transform: [
                    { rotateY: `119deg` },
                    { rotateX: `7deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 3,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["rysy"],
            styles: {
                transform: [
                    { rotateY: `56deg` },
                    { rotateX: `-1deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 4,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["niznie rysy", "rysy niznie"],
            styles: {
                transform: [
                    { rotateY: `62deg` },
                    { rotateX: `-1.7deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 5,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["wysoka"],
            styles: {
                transform: [
                    { rotateY: `51deg` },
                    { rotateX: `-0.5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 6,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: [
                "mieguszowiecki szczyt wielki",
                "mieguszowiecki szczyt",
                "mieguszowiecki",
            ],
            styles: {
                transform: [
                    { rotateY: `44deg` },
                    { rotateX: `4deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 7,
            questionText: "Co to za przełęcz?",
            questionType: "fill",
            correctAnswers: ["hinczowa", "hinczowa przelecz", "przelecz hinczowa"],
            styles: {
                transform: [
                    { rotateY: `40deg` },
                    { rotateX: `2.6deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 8,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["cubryna"],
            styles: {
                transform: [
                    { rotateY: `34deg` },
                    { rotateX: `5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 9,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["szpiglasowa czuba", "czuba szpiglasowa"],
            styles: {
                transform: [
                    { rotateY: `-40deg` },
                    { rotateX: `7deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 10,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["dziurawa czuba"],
            styles: {
                transform: [
                    { rotateY: `-16deg` },
                    { rotateX: `2.7deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 11,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["koprowy wierch"],
            styles: {
                transform: [
                    { rotateY: `11deg` },
                    { rotateX: `2.8deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 12,
            questionText: "Co to za przełęcz?",
            questionType: "fill",
            correctAnswers: ["wrota chalubinskiego"],
            styles: {
                transform: [
                    { rotateY: `13deg` },
                    { rotateX: `-11deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 13,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["kozi wierch"],
            styles: {
                transform: [
                    { rotateY: `-160deg` },
                    { rotateX: `-7.5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 14,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["kozie czuby"],
            styles: {
                transform: [
                    { rotateY: `-157deg` },
                    { rotateX: `-8.6deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 15,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["zamarla turnia"],
            styles: {
                transform: [
                    { rotateY: `-154.8deg` },
                    { rotateX: `-10deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 16,
            questionText: "Co to za przełęcz?",
            questionType: "fill",
            correctAnswers: ["zmarzla przelecz", "zmarzla"],
            styles: {
                transform: [
                    { rotateY: `-152.9deg` },
                    { rotateX: `-11deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 17,
            questionText: "Co to za przełęcz?",
            questionType: "fill",
            correctAnswers: ["zawrat", "przelecz zawrat"],
            styles: {
                transform: [
                    { rotateY: `-146.2deg` },
                    { rotateX: `-9.2deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 18,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["swinica"],
            styles: {
                transform: [
                    { rotateY: `-138.5deg` },
                    { rotateX: `-8deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 19,
            questionText: "Co to za przełęcz?",
            questionType: "fill",
            correctAnswers: [
                "walentkowa",
                "walentkowa przelecz",
                "przelecz walentkowa",
            ],
            styles: {
                transform: [
                    { rotateY: `-132.5deg` },
                    { rotateX: `-10deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 20,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["walentkowy wierch"],
            styles: {
                transform: [
                    { rotateY: `-126.6deg` },
                    { rotateX: `-9deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 21,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["kopa kondracka"],
            styles: {
                transform: [
                    { rotateY: `-118deg` },
                    { rotateX: `-10deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 22,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["malolaczniak"],
            styles: {
                transform: [
                    { rotateY: `-113.3deg` },
                    { rotateX: `-9deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 23,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["buczynowa straznica"],
            styles: {
                transform: [
                    { rotateY: `-170deg` },
                    { rotateX: `-8.8deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 24,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["orla baszta"],
            styles: {
                transform: [
                    { rotateY: `-175.5deg` },
                    { rotateX: `-11deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 25,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: [
                "wielka buczynowa turnia",
                "buczynowa turnia",
                "turnia buczynowa",
            ],
            styles: {
                transform: [
                    { rotateY: `-181.6deg` },
                    { rotateX: `-10.5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 26,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["waksmudzki wierch"],
            styles: {
                transform: [
                    { rotateY: `-188.5deg` },
                    { rotateX: `-11deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 27,
            questionText: "Co to za przełęcz?",
            questionType: "fill",
            correctAnswers: ["krzyzne", "przelecz krzyzne"],
            styles: {
                transform: [
                    { rotateY: `-190.4deg` },
                    { rotateX: `-12deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 28,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["posredni woloszyn"],
            styles: {
                transform: [
                    { rotateY: `-198.3deg` },
                    { rotateX: `-11.5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 29,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["wielki woloszyn", "woloszyn"],
            styles: {
                transform: [
                    { rotateY: `-193.3deg` },
                    { rotateX: `-11deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 30,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["kopa spadowa"],
            styles: {
                transform: [
                    { rotateY: `70deg` },
                    { rotateX: `-5.5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 31,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["swistowy", "swistowy szczyt"],
            styles: {
                transform: [
                    { rotateY: `75deg` },
                    { rotateX: `-6.5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 32,
            questionText: "Co to za przełęcz?",
            questionType: "fill",
            correctAnswers: ["swistowa", "swistowa przelecz"],
            styles: {
                transform: [
                    { rotateY: `77.6deg` },
                    { rotateX: `-7.7deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 33,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["jaworowy szczyt", "jaworowy"],
            styles: {
                transform: [
                    { rotateY: `80deg` },
                    { rotateX: `-6.3deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },

        {
            id: 34,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["maly lodowy", "maly lodowy szczyt"],
            styles: {
                transform: [
                    { rotateY: `81.8deg` },
                    { rotateX: `-6.5deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 35,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["lodowy", "lodowy szczyt"],
            styles: {
                transform: [
                    { rotateY: `86.7deg` },
                    { rotateX: `-6.2deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
        {
            id: 36,
            questionText: "Co to za szczyt?",
            questionType: "fill",
            correctAnswers: ["skrajny woloszyn"],
            styles: {
                transform: [
                    { rotateY: `-203.3deg` },
                    { rotateX: `-12deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
                backgroundColor: "red",
            },
        },
    ],
};