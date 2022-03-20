const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
console.log('started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
}

function setNextQuestion() {
    showQustion(shuffledQuestions[currentQuestionIndex])
}

function showQustion(question) {
questionElement.innerText = question.question
}

function selectAnswer() {

}

const questions = [
{
    question: '2 + 2',
    answers: [
        { text: '4', correct: true},
        { text: '22', correct: false}
    ]
}
]