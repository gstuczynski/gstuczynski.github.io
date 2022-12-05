export default {
  availablePoints: 32,
  backgroundImage: "morskie_oko.jpg",
  infoPanels: [
    {
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
    },
  ],
  questions: [
    {
      id: 1,
      questionText: "Co to za przełęcz?",
      questionType: "fill",
      correctAnswers: ["zabia przelecz", "zabia", "przelecz zabia"],
      styles: {
        transform: [
          { rotateY: `259deg` },
          { rotateX: `11deg` },
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
      correctAnswers: ["zabia turnia", "turnia zabia"],
      styles: {
        transform: [
          { rotateY: `254.7deg` },
          { rotateX: `13.3deg` },
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
      correctAnswers: ["mnich"],
      styles: {
        transform: [
          { rotateY: `187.2deg` },
          { rotateX: `20.5deg` },
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
      correctAnswers: ["cubryna"],
      styles: {
        transform: [
          { rotateY: `199.5deg` },
          { rotateX: `24.2deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
        backgroundColor: "red",
      },
    },

    {
      id: 5,
      questionText: "Co to za przełęcz?",
      questionType: "fill",
      correctAnswers: ["hinczowa przelecz", "hinczowa", "przelecz hinczowa"],
      styles: {
        transform: [
          { rotateY: `202.5deg` },
          { rotateX: `23deg` },
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
        "mieguszowiecki SW",
      ],
      styles: {
        transform: [
          { rotateY: `212deg` },
          { rotateX: `26.5deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 7,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: [
        "mieguszowiecki szczyt posredni",
        "mieguszowiecki posredni szczyt",
        "mieguszowiecki posredni",
      ],
      styles: {
        transform: [
          { rotateY: `223deg` },
          { rotateX: `22.5deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 8,
      questionText: "Co to za przełęcz?",
      questionType: "fill",
      correctAnswers: [
        "mieguszowiecka przełecz pod chlopkiem",
        "przelecz pod chlopkiem",
        "mieguszowiecka przelecz",
      ],
      styles: {
        transform: [
          { rotateY: `229deg` },
          { rotateX: `20deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 9,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: ["mieguszowiecki szczyt czarny", "mieguszowiecki czarny"],
      styles: {
        transform: [
          { rotateY: `234deg` },
          { rotateX: `22deg` },
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
      correctAnswers: ["rysy"],
      styles: {
        transform: [
          { rotateY: `271deg` },
          { rotateX: `14.3deg` },
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
      correctAnswers: ["niznie rysy", "rysy niznie"],
      styles: {
        transform: [
          { rotateY: `276deg` },
          { rotateX: `16deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 12,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: ["spadowa kopa","kopa spadowa"],
      styles: {
        transform: [
          { rotateY: `280deg` },
          { rotateX: `14.5deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 13,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: ["zabi mnich"],
      styles: {
        transform: [
          { rotateY: `284deg` },
          { rotateX: `15deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 14,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: [
        "marusarzowa turnia",
        "marusarzowa",
        "turnia marusarzowa",
      ],
      styles: {
        transform: [
          { rotateY: `299deg` },
          { rotateX: `21deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 15,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: [
        "zabi szczyt nizni",
        "zabi nizni",
        "nizni szczyt zabi",
        "nizni zabi szczyt",
      ],
      styles: {
        transform: [
          { rotateY: `306deg` },
          { rotateX: `22.5deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 16,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: ["zabia czuba"],
      styles: {
        transform: [
          { rotateY: `320deg` },
          { rotateX: `20deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 17,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: ["wolowa turnia", "turnia wolowa", "wolowa"],
      styles: {
        transform: [
          { rotateY: `250deg` },
          { rotateX: `14deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },
    {
      id: 18,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: ["miedziane"],
      styles: {
        transform: [
          { rotateY: `138deg` },
          { rotateX: `27deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },

    {
      id: 19,
      questionText: "Co to za szczyt?",
      questionType: "fill",
      correctAnswers: ["opalony", "opalony wierch"],
      styles: {
        transform: [
          { rotateY: `104deg` },
          { rotateX: `27deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
    },
    {
      id: 20,
      questionText: "Jak nazywane jest Stare Schronisko nad Morskim Okiem?",
      questionType: "multiple",
      answers: ["Wozownia", "Garażownia", "Kwaterownia", "Stajnia"],
      correctAnswers: ["Wozownia"],
      styles: {
          transform: [
              { rotateY: `45deg` },
              { rotateX: `2deg` },
              { translate: [0, 0, -4] },
          ],
        }
      },
      {
        id: 21,
        questionText: "Zaznacz kolory szlaków, które znajdują się przy Morskim Oku.",
        questionType: "multiple",
        answers: ["czerwony", "żółty", "niebieski", "zielony"],
        correctAnswers: ["czerwony", "żółty", "niebieski"],
        styles: {
            transform: [
                { rotateY: `68deg` },
                { rotateX: `14deg` },
                { translate: [0, 0, -4] },
            ],
          }
        },

        {
          id: 22,
          questionText: "Na jakiej wysokości znajduje się schronisko PTTK Morskie Oko?",
          questionType: "multiple",
          answers: ["1390 m n.p.m.", "1360 m .n.p.m.", "1430 m n.p.m.", "1410 m n.p.m."],
          correctAnswers: ["1410 m n.p.m."],
          styles: {
              transform: [
                  { rotateY: `52deg` },
                  { rotateX: `2deg` },
                  { translate: [0, 0, -4] },
              ],
            }
          },
  ],

  doors: [
    {
      styles: {
        transform: [
          { rotateY: `65deg` },
          { rotateX: `-6deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
      icon: "open.png",
      nextScene: "polana_wlosienica",
    },

    {
      pointsToUnlock: 16,
      styles: {
        transform: [
          { rotateY: `100deg` },
          { rotateX: `-1deg` },
          { translate: [0, 0, -4] },
        ],
        position: "absolute",
      },
      icon: "close.png",
      nextScene: "zoltyszlak",
    },
  ],
};
