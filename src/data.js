export default [
  {
    id: 1,
    name: "Quiz- Mide tus conocimientos",
    isFree: true,
    isPublished: true,
    score: 20,
    questions: [
      {
        id: 1,
        name: "La función para saber si un año es biciesto es:",
        type: "dicotomic",
        weight: 4,
        options: [
          {
            id: 1,
            value: "Verdadero"
          },
          {
            id: 2,
            value: "Falso"
          }
        ],
        answers: [1],
        suggestion: {
          lessonId: 1,
          subjectId: 1,
          time: 7127
        }
      },
      {
        id: 2,
        name:
          "¿Qué se considera BBDD o Matriz a evaluar en una pregunta convencional con tabla de datos?",
        type: "simple",
        weight: 4,
        options: [
          {
            id: 1,
            value: "Banana"
          },
          {
            id: 2,
            value: "La wea"
          },
          {
            id: 3,
            value: "Fome"
          }
        ],
        answers: [2]
      },
      {
        id: 3,
        name: "La función para saber si un año es biciesto es:",
        type: "multiple",
        weight: 4,
        options: [
          {
            id: 1,
            value: "Perrito"
          },
          {
            id: 2,
            value: "Gatito"
          },
          {
            id: 3,
            value: ":( :("
          }
        ],
        answers: [2, 3]
      },
      {
        id: 4,
        name:
          "¿Qué se considera BBDD o Matriz a evaluar en una pregunta convencional con tabla de datos?",
        description: "lel, :)",
        type: "simple",
        weight: 4,
        options: [
          {
            id: 1,
            value: "Kiick"
          },
          {
            id: 2,
            value: "Soooyy yooo"
          },
          {
            id: 3,
            value: "Meiuhr"
          }
        ],
        answers: [3]
      }
    ]
  }
];
