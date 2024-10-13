const questions = [
    {
        question: "Which planet is known as the Red Planet?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who developed the theory of relativity?",
        answer: [
            { text: "Isaac Newton", correct: false },
            { text: "Albert Einstein", correct: true },
            { text: "Galileo Galilei", correct: false },
            { text: "Nikola Tesla", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        answer: [
            { text: "Oxygen", correct: true },
            { text: "Gold", correct: false },
            { text: "Osmium", correct: false },
            { text: "Oganesson", correct: false }
        ]
    },
    {
        question: "In which year did the Titanic sink?",
        answer: [
            { text: "1912", correct: true },
            { text: "1905", correct: false },
            { text: "1915", correct: false },
            { text: "1920", correct: false }
        ]
    },
    {
        question: "What is the capital of Japan?",
        answer: [
            { text: "Beijing", correct: false },
            { text: "Tokyo", correct: true },
            { text: "Seoul", correct: false },
            { text: "Bangkok", correct: false }
        ]
    },
    {
        question: "Which country is known for inventing pizza?",
        answer: [
            { text: "France", correct: false },
            { text: "Italy", correct: true },
            { text: "Spain", correct: false },
            { text: "Greece", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean on Earth?",
        answer: [
            { text: "Atlantic", correct: false },
            { text: "Indian", correct: false },
            { text: "Pacific", correct: true },
            { text: "Arctic", correct: false }
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answer: [
            { text: "Vincent van Gogh", correct: false },
            { text: "Leonardo da Vinci", correct: true },
            { text: "Michelangelo", correct: false },
            { text: "Pablo Picasso", correct: false }
        ]
    },
    {
        question: "Which country is home to the kangaroo?",
        answer: [
            { text: "South Africa", correct: false },
            { text: "New Zealand", correct: false },
            { text: "Australia", correct: true },
            { text: "Canada", correct: false }
        ]
    },
    {
        question: "Which organ in the human body is primarily responsible for filtering blood?",
        answer: [
            { text: "Heart", correct: false },
            { text: "Kidneys", correct: true },
            { text: "Lungs", correct: false },
            { text: "Liver", correct: false }
        ]
    },
    {
        question: "What is the largest bone in the human body?",
        answer: [
            { text: "Femur", correct: true },
            { text: "Skull", correct: false },
            { text: "Humerus", correct: false },
            { text: "Spine", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in guacamole?",
        answer: [
            { text: "Tomato", correct: false },
            { text: "Avocado", correct: true },
            { text: "Cucumber", correct: false },
            { text: "Peas", correct: false }
        ]
    },
    {
        question: "Which famous scientist introduced the concept of natural selection?",
        answer: [
            { text: "Charles Darwin", correct: true },
            { text: "Gregor Mendel", correct: false },
            { text: "Louis Pasteur", correct: false },
            { text: "Albert Einstein", correct: false }
        ]
    },
    {
        question: "In which country is the Great Wall located?",
        answer: [
            { text: "India", correct: false },
            { text: "Japan", correct: false },
            { text: "China", correct: true },
            { text: "Mongolia", correct: false }
        ]
    },
    {
        question: "Which vitamin is produced when a person is exposed to sunlight?",
        answer: [
            { text: "Vitamin A", correct: false },
            { text: "Vitamin C", correct: false },
            { text: "Vitamin D", correct: true },
            { text: "Vitamin B12", correct: false }
        ]
    },
    {
        question: "What is the tallest mountain in the world?",
        answer: [
            { text: "K2", correct: false },
            { text: "Mount Everest", correct: true },
            { text: "Kangchenjunga", correct: false },
            { text: "Lhotse", correct: false }
        ]
    },
    {
        question: "What is the longest river in the world?",
        answer: [
            { text: "Nile", correct: true },
            { text: "Amazon", correct: false },
            { text: "Yangtze", correct: false },
            { text: "Mississippi", correct: false }
        ]
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        answer: [
            { text: "Russia", correct: false },
            { text: "Brazil", correct: true },
            { text: "China", correct: false },
            { text: "Japan", correct: false }
        ]
    },
    {
        question: "What is the capital of Canada?",
        answer: [
            { text: "Toronto", correct: false },
            { text: "Ottawa", correct: true },
            { text: "Vancouver", correct: false },
            { text: "Montreal", correct: false }
        ]
    },
    {
        question: "Which chemical element has the symbol 'Au'?",
        answer: [
            { text: "Silver", correct: false },
            { text: "Gold", correct: true },
            { text: "Aluminium", correct: false },
            { text: "Argon", correct: false }
        ]
    },
    {
        question: "Which scientist is credited with discovering penicillin?",
        answer: [
            { text: "Marie Curie", correct: false },
            { text: "Alexander Fleming", correct: true },
            { text: "Isaac Newton", correct: false },
            { text: "Louis Pasteur", correct: false }
        ]
    },
    {
        question: "Who was the first person to step on the moon?",
        answer: [
            { text: "Yuri Gagarin", correct: false },
            { text: "Neil Armstrong", correct: true },
            { text: "Buzz Aldrin", correct: false },
            { text: "Michael Collins", correct: false }
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answer: [
            { text: "CO2", correct: false },
            { text: "H2O", correct: true },
            { text: "O2", correct: false },
            { text: "NaCl", correct: false }
        ]
    },
    {
        question: "Which planet is closest to the Sun?",
        answer: [
            { text: "Venus", correct: false },
            { text: "Mercury", correct: true },
            { text: "Earth", correct: false },
            { text: "Mars", correct: false }
        ]
    },
    {
        question: "What is the boiling point of water?",
        answer: [
            { text: "100°C", correct: true },
            { text: "50°C", correct: false },
            { text: "150°C", correct: false },
            { text: "200°C", correct: false }
        ]
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answer: [
            { text: "William Shakespeare", correct: true },
            { text: "Charles Dickens", correct: false },
            { text: "Leo Tolstoy", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "Which country is the largest by land area?",
        answer: [
            { text: "China", correct: false },
            { text: "United States", correct: false },
            { text: "Canada", correct: false },
            { text: "Russia", correct: true }
        ]
    },
    {
        question: "Which element is needed for combustion to occur?",
        answer: [
            { text: "Carbon", correct: false },
            { text: "Nitrogen", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who was the first President of the United States?",
        answer: [
            { text: "John Adams", correct: false },
            { text: "George Washington", correct: true },
            { text: "Thomas Jefferson", correct: false },
            { text: "Abraham Lincoln", correct: false }
        ]
    },
    {
        question: "Which is the smallest ocean in the world?",
        answer: [
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Southern Ocean", correct: false }
        ]
    },
    {
        question: "Which country is the origin of the famous dish 'sushi'?",
        answer: [
            { text: "China", correct: false },
            { text: "Japan", correct: true },
            { text: "Thailand", correct: false },
            { text: "South Korea", correct: false }
        ]
    },
    {
        question: "Which mammal is known to lay eggs?",
        answer: [
            { text: "Dolphin", correct: false },
            { text: "Platypus", correct: true },
            { text: "Whale", correct: false },
            { text: "Tiger", correct: false }
        ]
    },
    {
        question: "Which planet is the largest in our solar system?",
        answer: [
            { text: "Earth", correct: false },
            { text: "Jupiter", correct: true },
            { text: "Saturn", correct: false },
            { text: "Neptune", correct: false }
        ]
    },
    {
        question: "What is the hardest natural substance on Earth?",
        answer: [
            { text: "Gold", correct: false },
            { text: "Iron", correct: false },
            { text: "Diamond", correct: true },
            { text: "Silver", correct: false }
        ]
    },
    {
        question: "Which instrument is used to measure temperature?",
        answer: [
            { text: "Barometer", correct: false },
            { text: "Thermometer", correct: true },
            { text: "Hygrometer", correct: false },
            { text: "Anemometer", correct: false }
        ]
    },
    {
        question: "Which country is the second most populous in the world?",
        answer: [
            { text: "United States", correct: false },
            { text: "India", correct: true },
            { text: "China", correct: false },
            { text: "Brazil", correct: false }
        ]
    },
    {
        question: "Which gas is most abundant in the Earth's atmosphere?",
        answer: [
            { text: "Oxygen", correct: false },
            { text: "Nitrogen", correct: true },
            { text: "Carbon Dioxide", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    {
        question: "Who is known as the 'Father of Computers'?",
        answer: [
            { text: "Alan Turing", correct: false },
            { text: "Charles Babbage", correct: true },
            { text: "Steve Jobs", correct: false },
            { text: "Bill Gates", correct: false }
        ]
    },
    {
        question: "In which year did World War II end?",
        answer: [
            { text: "1941", correct: false },
            { text: "1945", correct: true },
            { text: "1948", correct: false },
            { text: "1939", correct: false }
        ]
    },
    {
        question: "What is the main ingredient in traditional hummus?",
        answer: [
            { text: "Lentils", correct: false },
            { text: "Chickpeas", correct: true },
            { text: "Beans", correct: false },
            { text: "Peas", correct: false }
        ]
    }
];

export {questions}
