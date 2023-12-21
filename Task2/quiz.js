const restartBtn = document.getElementById("restart");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const submitBtn = document.getElementById("submit");
const trueBtn = document.getElementById("True");
const falseBtn = document.getElementById("False");
const userScore = document.getElementById("user-score");
const totalScore = document.getElementById("total-score");
const questionText = document.getElementById("question-text")
let currentQuestion = 0;
let score = 0;

let questions = [
   {
       question: "What is the primary purpose of a Content Delivery Network (CDN) in web development?",
       answers: [
           {option: "Caching and accelerating content delivery", answer: true},
           {option: "Load balancing", answer: false},
       ]
   },
   {
       question: "Which design pattern is commonly used to implement a one-to-many relationship between objects, ensuring that when one object changes state, all its dependents are notified and updated automatically?",
       answers: [
           {option: "Factory Pattern", answer: false},
           {option: " Observer Pattern", answer: true},
       ]
   },
   {

       question: "Which of the following is a feature of GraphQL, a query language for APIs?",
       answers: [
           {option: "Strict typing", answer: true},
           {option: "Server-side rendering only", answer: false},
       ]
   },
   {

    question: "Which programming paradigm promotes the idea of treating computation as the evaluation of mathematical functions and avoids changing-state and mutable data?",
    answers: [
        {option: "Functional programming", answer: true},
        {option: "Imperative programming", answer: false},
    ]    
   },
   {

    question: "What is the purpose of a Docker container's entrypoint?",
    answers: [
        {option: "Defines environment variables", answer: false},
        {option: "Specifies the command to run when the container starts", answer: true},
    ]    
   },
   {

    question: "Which cryptographic algorithm is commonly used for secure communication over the Internet, providing a secure channel between two devices, such as a web browser and a web server?",
    answers: [
        {option: "AES", answer: true},
        {option: "RSA", answer: false},
    ]
   },
   {

    question: "What is the purpose of a 'Nonce' in the context of web security?",
    answers: [
        {option: "Ensures data integrity", answer: false},
        {option: "Prevents replay attacks", answer: true},
    ]
   },
   {

    question: "Which of the following is a characteristic of a microservices architecture?",
    answers: [
        {option: "Independent deployability of services", answer: true},
        {option: "Shared database among services", answer: false},
    ]
   },
   {

    question: "Which design pattern is commonly used to represent a family of algorithms, encapsulate each algorithm, and make them interchangeable?",
    answers: [
        {option: "Strategy Pattern", answer: true},
        {option: "Observer Pattern", answer: false},
    ]
   },
   {

    question: "What is the purpose of the OpenID Connect (OIDC) protocol in authentication and authorization?",
    answers: [
        {option: "Token-based authorization", answer: false},
        {option: " Federated identity management", answer: true},
    ]
   },


]
restartBtn.addEventListener("click", restart);
prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click",next);
submitBtn.addEventListener("click",submit);
function beginQuiz() {
    currentQuestion = 0;
    totalScore.innerHTML = questions.length;
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 10) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 2) {
            next();
        }
    }
 
    prevBtn.classList.add("hide");
 }
 
 beginQuiz();
 function restart() {
    currentQuestion = 0;
    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    submitBtn.classList.remove("hide");
    trueBtn.classList.remove("hide");
    falseBtn.classList.remove("hide");
    score = 0;
    userScore.innerHTML = score;
    beginQuiz();
 }
 function next() {
    currentQuestion++;
    if(currentQuestion >= 2) {
        nextBtn.classList.add("hide");
        prevBtn.classList.remove("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 10) {
            next();
        }
    }
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
 
        }
        userScore.innerHTML = score;
        if(currentQuestion < 10) {
            next();
        }
    }
 
    prevBtn.classList.remove("hide");
 }
 function prev() {
    currentQuestion--;
    if(currentQuestion <= 0) {
        nextBtn.classList.remove("hide");
        prevBtn.classList.add("hide");
    }
    questionText.innerHTML = questions[currentQuestion].question;
    trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
    trueBtn.onclick = () => {
        if(questions[currentQuestion].answers[0].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 10) {
            next();
        }
    }
 
 
    falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
    falseBtn.onclick = () => {
        if(questions[currentQuestion].answers[1].answer) {
            if(score < 10) {
                score++;
            }
        }
        userScore.innerHTML = score;
        if(currentQuestion < 10) {
            next();
        }
    }
 
    nextBtn.classList.remove("hide");
 }
 function submit() {
    prevBtn.classList.add("hide");
    nextBtn.classList.add("hide");
    submitBtn.classList.add("hide");
    trueBtn.classList.add("hide");
    falseBtn.classList.add("hide");   
    questionText.innerHTML ="Congratulations on submitting the Quiz!"
 }