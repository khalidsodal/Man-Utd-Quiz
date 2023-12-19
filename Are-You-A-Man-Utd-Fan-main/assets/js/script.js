

const beginButton = document.getElementById('begin-btn');
const nextButton = document.getElementById('next-btn');
const qstnContainer = document.getElementById('qstn-container');
const qstnElement = document.getElementById('question');
const answerBtnElement = document.getElementById('answer-btns');
const qstnNumber = document.getElementById('number-of-qtsn-main-container');
const endScore = document.getElementById('score');
const numberOfQuestionMainContainer = document.getElementById('number-of-qtsn-main-container');
const scoreContainer = document.getElementById('score-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-button');
let random, currentIndex;
let  numberOfQuestion = 0;
let score = 0 ;


const numberOfQuestionContainer = document.getElementById('number-of-qstn');
// Click event listener for the restart button
restartButton.addEventListener('click', restartQuiz);
// Click event listener for the begin button
beginButton.addEventListener('click', beginGame);

/**
 * Function to handle the next button click event
 */
nextButton.addEventListener('click', () => {
    currentIndex++;
    nextQuestion();
});




/**
 * Function to start the quiz
 */
function beginGame() {
    beginButton.classList.add('hide');
    random = questions.sort(() => Math.random() - 0.5);
    currentIndex = 0;
    qstnContainer.classList.remove('hide');
    nextQuestion();
    numberOfQuestionMainContainer.classList.remove('hide');
}


/**
 * Function that displays the next question on the quiz
 */
function nextQuestion() {
    resetQuestions();
    if (currentIndex >= 10) {
        showResults();
    } else {
        showQuestion(random[currentIndex]);
    numberOfQuestion++;
    numberOfQuestionContainer.innerText = numberOfQuestion;
    }
}


/**
 * Function that displays the score of the user at the end of the quiz
 */
function showResults() {
    let scoreContainer = document.getElementById('score-container');
        scoreContainer.classList.remove('hide');
        nextButton.classList.add('hide');
        qstnContainer.classList.add('hide');
        nextButton.classList.add('hide');
        qstnNumber.classList.add('hide');
        endScore.innerText = score;





    
}
 /**
 * Function that displays a questions and it's available answer choices
 */
function showQuestion(question) {
    nextButton.classList.remove('hide');
    qstnElement.innerText = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', answerSelect);
        answerBtnElement.appendChild(button);
    });

}
/**
 * Function that removes answer choice buttons
 */
function resetQuestions() {
    
    while (answerBtnElement.firstChild) {
        answerBtnElement.removeChild
        (answerBtnElement.firstChild);
    }

}

/**
 * Function that handles the selection of an answer choice
 */
function answerSelect(e) {
    let selected = e.target;
    let correct = selected.dataset.correct;
    if (correct) {
        score++;
    }
    // Applies styling to show whether answer selected was right or wrong
    Array.from(answerBtnElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
        button.removeEventListener('click', answerSelect);
    });

}
    

/**
 * Function that sets the CSS class for answer buttons based on correctness
 */
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

/**
 * Function that clears the CSS classes for answer buttons
 */
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}
/**
 * Function to restart the quiz
 */
function restartQuiz () {
    currentIndex = 0;
    score = 0;
    numberOfQuestion = 0;
    numberOfQuestionContainer.innerText = numberOfQuestion;
    scoreElement.innerText = score;
    scoreContainer.classList.add('hide');
    beginButton.classList.remove('hide');
    resetQuestions();
}










/**
 * Array of quiz questions and answers.
 */
let questions = [
    {
        question: "What is Manchester United's nickname?",
        answers:[
            {text: 'The Red Devils', correct: true},
            {text: 'The Blues', correct: false},
            {text: 'The Gunners', correct: false},
            {text: 'The Citizens', correct: false}
        ]
    },
    {
        question: "Which player holds the record for the most appearances in a Manchester United shirt?",
        answers:[
            {text: 'Ryan Giggs', correct: true},
            {text: 'Paul Scholes', correct: false},
            {text: 'Wayne Rooney', correct: false},
            {text: 'Gary Neville', correct: false}
        ]
    },
    {
        question: "Who is Manchester United's all-time top goal scorer?",
        answers:[
            {text: 'George Best', correct: false},
            {text: 'Eric Cantona', correct: false},
            {text: 'Denis Law', correct: false},
            {text: 'Wayne Rooney', correct: true}
        ]
    },
    {
        question: "In which year did Manchester United win their first Premier League title?",
        answers:[
            {text: '1992', correct: true},
            {text: '1993', correct: false},
            {text: '1994', correct: false},
            {text: '1995', correct: false}
        ]
    },
    {
        question: "Which country is Cristiano Ronaldo originally from?",
        answers:[
            {text: 'Brazil', correct: false},
            {text: 'Portugal', correct: true},
            {text: 'Argentina', correct: false},
            {text: 'Spain', correct: false}
        ]
    },
    {
        question: "What was the transfer fee when Manchester United signed Paul Pogba from Juventus in 2016?",
        answers:[
            {text: '£50 million', correct: false},
            {text: '£75 million', correct: false},
            {text: '£89 million', correct: true},
            {text: '£100 million', correct: false}
        ]
    },
    {
        question: "Who is the current manager of Manchester United (as of 2023)?",
        answers:[
            {text: 'Sir Alex Ferguson', correct: false},
            {text: 'Erik Ten Hag', correct: true},
            {text: 'Jose Mourinho', correct: false},
            {text: 'Jurgen Klopp', correct: false}
        ]
    },
    {
        question: "Which club did Manchester United face in the famous 1999 UEFA Champions League final?",
        answers:[
            {text: 'AC Milan', correct: false},
            {text: 'Barcelona', correct: false},
            {text: 'Bayern Munich', correct: true},
            {text: 'Juventus', correct: false}
        ]
    },
    {
        question: "What is the capacity of Old Trafford, Manchester United's stadium?",
        answers:[
            {text: '60,000', correct: false},
            {text: '70,000', correct: false},
            {text: '80,000', correct: false},
            {text: '90,000', correct: true}
        ]
    },
    {
        question: "Who is known as the 'Baby-Faced Assassin' and was a prolific striker for Manchester United?",
        answers:[
            {text: 'Teddy Sheringham', correct: false},
            {text: 'Dwight Yorke', correct: false},
            {text: 'Ruud van Nistelrooy', correct: false},
            {text: 'Ole Gunnar Solskjaer', correct: true}
        ]
    },
    {
        question: "Which player famously wore the number 7 shirt for Manchester United during the 1990s?",
        answers:[
            {text: 'Ryan Giggs', correct: false},
            {text: 'Paul Scholes', correct: false},
            {text: 'David Beckham', correct: true},
            {text: 'Roy Keane', correct: false}
        ]
    },
    {
        question: "Who is Manchester United's most expensive signing of all time (as of 2023)?",
        answers:[
            {text: 'Harry Maguire', correct: true},
            {text: 'Bruno Fernandes', correct: false},
            {text: 'Jadon Sancho', correct: false},
            {text: 'Antony', correct: false}
        ]
    },
    {
        question: "What is the name of Manchester United's youth academy that has produced many great talents?",
        answers:[
            {text: 'The United Academy', correct: false},
            {text: 'The Red Devils Youth Center', correct: false},
            {text: 'The Aon Training Complex', correct: false},
            {text: 'The Carrington Academy', correct: true}
        ]
    },
    {
        question: "Which English football club has the fiercest rivalry with Manchester United?",
        answers:[
            {text: 'Liverpool FC', correct: true},
            {text: 'Manchester City FC', correct: false},
            {text: 'Arsenal FC', correct: false},
            {text: 'Chelsea FC', correct: false}
        ]
    },
    {
        question: "Who is the longest-serving captain in Manchester United's history?",
        answers:[
            {text: 'Roy Keane', correct: false},
            {text: 'Nemanja Vidic', correct: false},
            {text: 'Steve Bruce', correct: false},
            {text: 'Bryan Robson', correct: true}
        ]
    },
    {
        question: "How many times have Manchester United won the UEFA Champions League as of 2023?",
        answers:[
            {text: '1', correct: false},
            {text: '2', correct: false},
            {text: '3', correct: true},
            {text: '4', correct: false}
        ]
    },
    {
        question: "Which legendary goalkeeper played for Manchester United and is known for his incredible saves?",
        answers:[
            {text: 'Edwin van der Sar', correct: false},
            {text: 'Peter Schmeichel', correct: true},
            {text: 'David De Gea', correct: false},
            {text: 'Tim Howard', correct: false}
        ]
    },
    {
        question: "In which year did Manchester United famously complete the Treble (Premier League, FA Cup, UEFA Champions League)?",
        answers:[
            {text: '1998', correct: false},
            {text: '1999', correct: true},
            {text: '2000', correct: false},
            {text: '2001', correct: false}
        ]
    },
    {
        question: "Who is considered one of Manchester United's greatest ever captains and midfielders, known for his tough tackling and leadership?",
        answers:[
            {text: 'Roy Keane', correct: true},
            {text: 'Paul Pogba', correct: false},
            {text: 'Michael Carrick', correct: false},
            {text: 'Darren Fletcher', correct: false}
        ]
    },
    {
        question: "What was the original name of Manchester United when it was founded in 1878?",
        answers:[
            {text: 'Manchester Football Club', correct: false},
            {text: 'Newton Heath LYR Football Club', correct: true},
            {text: 'Red Devils Football Club', correct: false},
            {text: 'Manchester United Football Club', correct: false}
        ]
    }
];
