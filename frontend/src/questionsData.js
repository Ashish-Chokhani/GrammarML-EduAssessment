const questionsData = {
  topics: [
    {
      id: 1,
      name: "Gerund Sentence (141B)",
      questions: [
        {
          id: 1,
          specialId: "141B-2",
          text: "She avoided ______ him about her plans.",
          choices: [
            { id: 1, text: "conveying", isCorrect: false },
            { id: 2, text: "expressing", isCorrect: false },
            { id: 3, text: "saying", isCorrect: false },
            { id: 4, text: "telling", isCorrect: true }
          ]
        },
        // {
        //   id: 2,
        //   specialId: "141B-4",
        //   text: "She kept _________ during the film.",
        //   choices: [
        //     { id: 1, text: "talking", isCorrect: true },
        //     { id: 2, text: "speaking", isCorrect: false },
        //     { id: 3, text: "shouting", isCorrect: false },
        //     { id: 4, text: "whispering", isCorrect: false }
        //   ]
        // },
        {
          id: 3,
          specialId: "141B-25",
          text: "I really can’t stand _________ for the bus.",
          choices: [
            { id: 1, text: "single", isCorrect: false },
            { id: 2, text: "alone", isCorrect: false },
            { id: 3, text: "waiting", isCorrect: true },
            { id: 4, text: "lonely", isCorrect: false }
          ]
        },
        {
          id: 4,
          specialId: "141B-18",
          text: "I regret __________ my secret.",
          choices: [
            { id: 1, text: "saying", isCorrect: false },
            { id: 2, text: "telling", isCorrect: true },
            { id: 3, text: "to tell", isCorrect: false },
            { id: 4, text: "to say", isCorrect: false }
          ]
        },
        {
          id: 5,
          specialId: "141B-3",
          text: "He enjoys _______ a coffee in the evening",
          choices: [
            { id: 1, text: "to have", isCorrect: false },
            { id: 2, text: "having", isCorrect: true },
            { id: 3, text: "drinking", isCorrect: false },
            { id: 4, text: "sipping", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "Possessive Adjective (22B)",
      questions: [
        {
          id: 1,
          specialId: "22B-1",
          text: "I don’t know the time because I can't find __________ watch.",
          choices: [
            { id: 1, text: "Their", isCorrect: false },
            { id: 2, text: "Its", isCorrect: false },
            { id: 3, text: "Our", isCorrect: false },
            { id: 4, text: "My", isCorrect: true }
          ]
        },
        {
          id: 2,
          specialId: "22B-21",
          text: "She is happy with_______ job.",
          choices: [
            { id: 1, text: "My", isCorrect: false },
            { id: 2, text: "His", isCorrect: false },
            { id: 3, text: "Its", isCorrect: false },
            { id: 4, text: "Her", isCorrect: true }
          ]
        },
        {
          id: 3,
          specialId: "22B-22",
          text: "The children lost ________ way in the town.",
          choices: [
            { id: 1, text: "Your", isCorrect: false },
            { id: 2, text: "Their", isCorrect: true },
            { id: 3, text: "My", isCorrect: false },
            { id: 4, text: "Our", isCorrect: false }
          ]
        },
        {
          id: 4,
          specialId: "22B-27",
          text: "The cat is hungry as it did not eat  _______ food",
          choices: [
            { id: 1, text: "Its", isCorrect: true },
            { id: 2, text: "His", isCorrect: false },
            { id: 3, text: "Her", isCorrect: false },
            { id: 4, text: "Your", isCorrect: false }
          ]
        },
        {
          id: 5,
          specialId: "22B-29",
          text: "I live in Paris with _______ family.",
          choices: [
            { id: 1, text: "Their", isCorrect: false },
            { id: 2, text: "My", isCorrect: true },
            { id: 3, text: "Our", isCorrect: false },
            { id: 4, text: "Your", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "To Be (16B)",
      questions: [
        {
          id: 1,
          specialId: "16B-30",
          text: "Your new manager ______ from Germany.",
          choices: [
            { id: 1, text: "Are", isCorrect: false },
            { id: 2, text: "Is", isCorrect: false },
            { id: 3, text: "Am", isCorrect: true },
            { id: 4, text: "Were", isCorrect: false }
          ]
        },
        {
          id: 2,
          specialId: "16B-29",
          text: "I _______ a teacher at a high school.",
          choices: [
            { id: 1, text: "Are", isCorrect: false },
            { id: 2, text: "Was", isCorrect: false },
            { id: 3, text: "Were", isCorrect: false },
            { id: 4, text: "Am", isCorrect: true }
          ]
        },
        {
          id: 3,
          specialId: "16B-26",
          text: "Tony ______ not a friendly person.",
          choices: [
            { id: 1, text: "Are", isCorrect: false },
            { id: 2, text: "Was", isCorrect: false },
            { id: 3, text: "Am", isCorrect: false },
            { id: 4, text: "Is", isCorrect: true }
          ]
        },
        {
          id: 4,
          specialId: "16B-22",
          text: "________ they Joe and Frank?",
          choices: [
            { id: 1, text: "Is", isCorrect: false },
            { id: 2, text: "Were", isCorrect: false },
            { id: 3, text: "Are", isCorrect: false },
            { id: 4, text: "Am", isCorrect: true }
          ]
        },
        {
          id: 5,
          specialId: "16B-10",
          text: "She _______ an English teacher.",
          choices: [
            { id: 1, text: "Were", isCorrect: false },
            { id: 2, text: "Are", isCorrect: false },
            { id: 3, text: "Was", isCorrect: false },
            { id: 4, text: "Is", isCorrect: true }
          ]
        }

      ]
    },

    {
      id: 4,
      name: "Modal verbs of deduction (216B)",
      questions: [
        {
          id: 1,
          specialId: "216B-19",
          text: "I really ____________ try to get fit.",
          choices: [
            { id: 1, text: "may", isCorrect: false },
            { id: 2, text: "would", isCorrect: false },
            { id: 3, text: "must", isCorrect: true },
            { id: 4, text: "could", isCorrect: false }
          ]
        },
        {
          id: 2,
          specialId: "216B-15",
          text: "You __________ look at me when I am talking to you.",
          choices: [
            { id: 1, text: "might", isCorrect: false },
            { id: 2, text: "could", isCorrect: false },
            { id: 3, text: "would", isCorrect: false },
            { id: 4, text: "should", isCorrect: true }
          ]
        },
        {
          id: 3,
          specialId: "216B-20",
          text: "His excuse _____________ be true, but I don’t believe.",
          choices: [
            { id: 1, text: "Might", isCorrect: false },
            { id: 2, text: "May", isCorrect: false },
            { id: 3, text: "Could", isCorrect: false },
            { id: 4, text: "can", isCorrect: true }
          ]
        },
        {
          id: 4,
          specialId: "216B-22",
          text: "I ____________ talk already before I was 2 years old.",
          choices: [
            { id: 1, text: "Should", isCorrect: false },
            { id: 2, text: "Would", isCorrect: false },
            { id: 3, text: "Could", isCorrect: false },
            { id: 4, text: "Might", isCorrect: true }
          ]
        },
        {
          id: 5,
          specialId: "216B-24",
          text: "_________ you open the window, Please.",
          choices: [
            { id: 1, text: "Could", isCorrect: false },
            { id: 2, text: "Can", isCorrect: false },
            { id: 3, text: "Will", isCorrect: false },
            { id: 4, text: "may", isCorrect: true }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "Possessive Adjectives (83B)",
      questions: [
        {
          id: 1,
          specialId: "83B-27",
          text: "Can you help me with _______ homework, please?",
          choices: [
            { id: 1, text: "our", isCorrect: false },
            { id: 2, text: "his", isCorrect: false },
            { id: 3, text: "my", isCorrect: true },
            { id: 4, text: "her", isCorrect: false }
          ]
        },
        {
          id: 2,
          specialId: "83B-22",
          text: "We like _______ neighbors.",
          choices: [
            { id: 1, text: "our", isCorrect: false },
            { id: 2, text: "your", isCorrect: false },
            { id: 3, text: "my", isCorrect: false },
            { id: 4, text: "its", isCorrect: true }
          ]
        },
        {
          id: 3,
          specialId: "83B-20",
          text: "I often clean _______ cycle.",
          choices: [
            { id: 1, text: "his", isCorrect: false },
            { id: 2, text: "her", isCorrect: false },
            { id: 3, text: "my", isCorrect: false },
            { id: 4, text: "their", isCorrect: true }
          ]
        },
        {
          id: 4,
          specialId: "83B-19",
          text: "Simran cannot find _______ purse.",
          choices: [
            { id: 1, text: "her", isCorrect: false },
            { id: 2, text: "their", isCorrect: false },
            { id: 3, text: "its", isCorrect: false },
            { id: 4, text: "his", isCorrect: true }
          ]
        },
        {
          id: 5,
          specialId: "83B-8",
          text: "Anna likes_______ teachers at school.",
          choices: [
            { id: 1, text: "my", isCorrect: false },
            { id: 2, text: "her", isCorrect: false },
            { id: 3, text: "our", isCorrect: false },
            { id: 4, text: "his", isCorrect: true }
          ]
        }
      ]
    },
    {
      id: 6,
      name: "Prepositions (5B)",
      questions: [
        {
          id: 1,
          specialId: "5B-3",
          text: "I was very much pleased _______my exam results.",
          choices: [
            { id: 1, text: "In", isCorrect: false },
            { id: 2, text: "Next to", isCorrect: false },
            { id: 3, text: "With", isCorrect: true },
            { id: 4, text: "Under", isCorrect: false }
          ]
        },
        {
          id: 2,
          specialId: "5B-5",
          text: "We are accustomed ______sleeping in total darkness.",
          choices: [
            { id: 1, text: "By", isCorrect: false },
            { id: 2, text: "At", isCorrect: false },
            { id: 3, text: "To", isCorrect: false },
            { id: 4, text: "Against", isCorrect: true }
          ]
        },
        {
          id: 3,
          specialId: "5B-7",
          text: "I was all confused ________ her unexpected words.",
          choices: [
            { id: 1, text: "Toward", isCorrect: false },
            { id: 2, text: "For", isCorrect: false },
            { id: 3, text: "To", isCorrect: false },
            { id: 4, text: "With", isCorrect: true }
          ]
        },
        {
          id: 4,
          specialId: "5B-13",
          text: "She lives______ the street from me.",
          choices: [
            { id: 1, text: "Along", isCorrect: false },
            { id: 2, text: "Across", isCorrect: false },
            { id: 3, text: "Under", isCorrect: false },
            { id: 4, text: "In", isCorrect: true }
          ]
        },
        {
          id: 5,
          specialId: "5B-15",
          text: "You must learn to live __________your income.",
          choices: [
            { id: 1, text: "Within", isCorrect: false },
            { id: 2, text: "Until", isCorrect: false },
            { id: 3, text: "With", isCorrect: false },
            { id: 4, text: "Since", isCorrect: true }
          ]
        }
      ]
    },
    {
      id: 7,
      name: '"To Be" Past and Present (53B)',
      questions: [
        {
          id: 1,
          specialId: "53B-6",
          text: "John and I _______playing football last night.",
          choices: [
            { id: 1, text: "Were", isCorrect: false },
            { id: 2, text: "Are", isCorrect: false },

          ]
        },
        {
          id: 2,
          specialId: "53B-3",
          text: "The children _______swimming now.",
          choices: [
            { id: 1, text: "Are", isCorrect: false },
            { id: 2, text: "Were", isCorrect: false },

          ]
        },
        {
          id: 3,
          specialId: "53B-30",
          text: "Why _______you so angry yesterday?",
          choices: [
            { id: 1, text: "Are", isCorrect: false },
            { id: 2, text: "Were", isCorrect: false },

          ]
        },
        {
          id: 4,
          specialId: "53B-22",
          text: "I think the shop ______quite expensive.",
          choices: [
            { id: 1, text: "Was", isCorrect: false },
            { id: 2, text: "Is", isCorrect: false },

          ]
        },
        {
          id: 5,
          specialId: "53B-18",
          text: "I ___________in Canberra last spring.",
          choices: [
            { id: 1, text: "Was", isCorrect: false },
            { id: 2, text: "Were", isCorrect: false },

          ]
        }
      ]
    },
    {
      id: 8,
      name: "second conditionals (169B)",
      questions: [
        {
          id: 1,
          specialId: "169B-5",
          text: "If she knew, she ______ tell him.",
          choices: [
            { id: 1, text: "might", isCorrect: false },
            { id: 2, text: "would", isCorrect: false },
            { id: 3, text: "could", isCorrect: true },
            { id: 4, text: "can", isCorrect: false }
          ]
        },
        {
          id: 2,
          specialId: "169B-8",
          text: "If I were in your shoes, I ________ apologize.",
          choices: [
            { id: 1, text: "can", isCorrect: false },
            { id: 2, text: "would", isCorrect: false },
            { id: 3, text: "could", isCorrect: false },
            { id: 4, text: "might", isCorrect: true }
          ]
        },
        {
          id: 3,
          specialId: "169B-11",
          text: "If he were here, he _______ help us.",
          choices: [
            { id: 1, text: "could", isCorrect: false },
            { id: 2, text: "might", isCorrect: false },
            { id: 3, text: "can", isCorrect: false },
            { id: 4, text: "may", isCorrect: true }
          ]
        },
        {
          id: 4,
          specialId: "169B-22",
          text: "The boy ___________be on the Olympic team if he trained harder.",
          choices: [
            { id: 1, text: "May", isCorrect: false },
            { id: 2, text: "wouldn’t", isCorrect: false },
            { id: 3, text: "would", isCorrect: false },
            { id: 4, text: "could", isCorrect: true }
          ]
        },
        {
          id: 5,
          specialId: "169B-20",
          text: "If we recycled these cans, we ________reduce rubbish.",
          choices: [
            { id: 1, text: "might", isCorrect: false },
            { id: 2, text: "could", isCorrect: false },
            { id: 3, text: "may", isCorrect: false },
            { id: 4, text: "would", isCorrect: true }
          ]
        }
      ]
    },
    {
      id: 9,
      name: "Beginners Question Words (37B)",
      questions: [
        {
          id: 1,
          specialId: "37B-5",
          text: "_________ are you talking about?",
          choices: [
            { id: 1, text: "How", isCorrect: false },
            { id: 2, text: "What", isCorrect: false },

          ]
        },
        {
          id: 2,
          specialId: "37B-7",
          text: "_________ is your project going on?",
          choices: [
            { id: 1, text: "When", isCorrect: false },
            { id: 2, text: "How", isCorrect: false },

          ]
        },
        {
          id: 3,
          specialId: "37B-11",
          text: "________ is Shakespeare still relevant today?",
          choices: [
            { id: 1, text: "What", isCorrect: false },
            { id: 2, text: "How", isCorrect: false },

          ]
        },
        {
          id: 4,
          specialId: "37B-25",
          text: "_________ do you like to go to have fun?",
          choices: [
            { id: 1, text: "Where", isCorrect: false },
            { id: 2, text: "What", isCorrect: false },

          ]
        },
        {
          id: 5,
          specialId: "37B-14",
          text: "________ is the spiciest thing you have ever eaten?",
          choices: [
            { id: 1, text: "When", isCorrect: false },
            { id: 2, text: "What", isCorrect: false },

          ]
        }
      ]
    },
    {
      id: 10,
      name: "Pronouns (40B)",
      questions: [
        {
          id: 1,
          specialId: "40B-2",
          text: "Please mail to _____________.",
          choices: [
            { id: 1, text: "You", isCorrect: false },
            { id: 2, text: "me", isCorrect: false },

          ]
        },
        {
          id: 2,
          specialId: "40B-8",
          text: "These are the shoes that _____________ am going to wear.",
          choices: [
            { id: 1, text: "I", isCorrect: false },
            { id: 2, text: "We", isCorrect: false },

          ]
        },
        {
          id: 3,
          specialId: "40B-14",
          text: "___________ himself finished the whole job",
          choices: [
            { id: 1, text: "He", isCorrect: false },
            { id: 2, text: "she", isCorrect: false },

          ]
        },
        {
          id: 4,
          specialId: "40B-15",
          text: "I invited him and _________ wife.",
          choices: [
            { id: 1, text: "Her", isCorrect: false },
            { id: 2, text: "His", isCorrect: false },

          ]
        },
        {
          id: 5,
          specialId: "40B-24",
          text: "I am flattered by ____________ commendation.",
          choices: [
            { id: 1, text: "His", isCorrect: false },
            { id: 2, text: "Him", isCorrect: false },

          ]
        }
      ]
    },

    {
      id: 11,
      name: "Jumbled",
      questions: [
        {
          id: 1,
          specialId: "JS-1",
          text: "on / sat / mat / the / the / cat",
          "correct_ans": "THE CAT SAT ON THE MAT"
        },
        {
          "id": 2,
          "specialId": "JS-2",
          "text": "sun / is / the / big / very",
          "correct_ans": "THE SUN IS VERY BIG"
        },
        {
          "id": 3,
          "specialId": "JS-3",
          "text": "apple / eat / the / red / I",
          "correct_ans": "I EAT THE RED APPLE"
        },
        {
          "id": 4,
          "specialId": "JS-4",
          "text": "blue / the / sky / is / today",
          "correct_ans": "THE SKY IS BLUE TODAY"
        },
        {
          "id": 5,
          "specialId": "JS-5",
          "text": "the / runs / fast / dog / very",
          "correct_ans": "THE DOG RUNS VERY FAST"
        },
        {
          "id": 6,
          "specialId": "JS-6",
          "text": "she / tall / very / is",
          "correct_ans": "SHE IS VERY TALL"
        },
        {
          "id": 7,
          "specialId": "JS-7",
          "text": "they / friends / are / good",
          "correct_ans": "THEY ARE GOOD FRIENDS"
        },
        {
          "id": 8,
          "specialId": "JS-8",
          "text": "likes / read / to / he / books",
          "correct_ans": "HE LIKES TO READ BOOKS"
        },
        {
          "id": 9,
          "specialId": "JS-9",
          "text": "playing / enjoys / she / piano / the",
          "correct_ans": "SHE ENJOYS PLAYING THE PIANO"
        },
        {
          "id": 10,
          "specialId": "JS-10",
          "text": "garden / the / flowers / beautiful / in / bloom",
          "correct_ans": "BEAUTIFUL FLOWERS BLOOM IN THE GARDEN"
        },
        {
          "id": 11,
          "specialId": "JS-11",
          "text": "climbs / fast / tree / the / cat",
          "correct_ans": "THE CAT CLIMBS THE TREE FAST"
        }
      ]
    }

  ]
};

export default questionsData;



