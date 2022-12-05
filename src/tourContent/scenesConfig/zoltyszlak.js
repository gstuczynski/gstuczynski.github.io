export default {
    availablePoints: 37,
    backgroundImage: "szpiglas.jpg",
    questions: [{
        id: 1,
        questionText: "Jak niegdyś nazywany był Szpiglasowy Wierch?",
        questionType: "multiple",
        answers: ["Gruby Wierch", "Chudy Wierch", "Opasły Wierch", "Okrągły Wierch"],
        correctAnswers: ["Gruby Wierch"],
        styles: {
            transform: [
                { rotateY: `338deg` },
                { rotateX: `13deg` },
                { translate: [0, 0, -4] },
            ],
            position: "absolute",
        },
      },
        {
          id: 2,
          questionText: "Jakie dwa szczyty oddziela Szpiglasowa Przełęcz?",
          questionType: "multiple",
          answers: ["Szpiglasowy Wierch i Opalony Wierch", "Szpiglasowy Wierch i Miedziane", "Szpiglasowy Wierch i Wołową Turnię", "Szpiglasowy Wierch i Mięguszowiecki Szczyt Wielki"],
          correctAnswers: ["Szpiglasowy Wierch i Miedziane"],
          styles: {
              transform: [
                  { rotateY: `320deg` },
                  { rotateX: `7deg` },
                  { translate: [0, 0, -4] },
              ],
              position: "absolute",
              backgroundColor: "red",
          },
      },
      {
        id: 3,
        questionText: "Jak nazywa się dolina,do której opadają południowo-zachodnie zbocza Szpiglasowego Wierchu?",
        questionType: "multiple",
        answers: ["Koprowa", "Mięguszowiecka", "Hlińska", "Ciemnosmerczyńska"],
        correctAnswers: ["Ciemnosmerczyńska"],
        styles: {
            transform: [
                { rotateY: `260deg` },
                { rotateX: `25deg` },
                { translate: [0, 0, -4] },
            ],
            position: "absolute",
            backgroundColor: "red",
          }
        },
      
        {
          id: 4,
          questionText: "Od którego surowca wydobywanego niegdyś na tych terenach wywodzi się nazwa szpiglas?",
          questionType: "multiple",
          answers: ["tytan", "antymon", "kadm", "wanad"],
          correctAnswers: ["antymon"],
          styles: {
              transform: [
                  { rotateY: `40deg` },
                  { rotateX: `0deg` },
                  { translate: [0, 0, -4] },
              ],
              position: "absolute",
              backgroundColor: "red",
          },
      },
      
      {
        id: 5,
        questionText: "Jaka jest potoczna nazwa żółtego szlaku z Morskiego Oka na Szpiglasową Przełęcz?",
        questionType: "multiple",
        answers: ["ceprostrada", "fastrada", "chułbinada", "spisztrada"],
        correctAnswers: ["ceprostrada"],
        styles: {
            transform: [
                { rotateY: `129deg` },
                { rotateX: `-20deg` },
                { translate: [0, 0, -4] },
            ],
            position: "absolute",
            backgroundColor: "red",
        },
    },
      ],
    doors: [{
            styles: {
                transform: [
                    { rotateY: `83deg` },
                    { rotateX: `-28deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "open.png",
            nextScene: "morskie_oko",
        },
        {
            pointsToUnlock: 19,
            styles: {
                transform: [
                    { rotateY: `-60deg` },
                    { rotateX: `12deg` },
                    { translate: [0, 0, -4] },
                ],
                position: "absolute",
            },
            icon: "close.png",
            nextScene: "szpiglas_przelecz",
        },
    ],

}