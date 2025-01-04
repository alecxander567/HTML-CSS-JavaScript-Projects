const question = document.getElementById("question");
const answer1 = document.getElementById("btn-answer1");
const answer2 = document.getElementById("btn-answer2");
const answer3 = document.getElementById("btn-answer3");
const answer4 = document.getElementById("btn-answer4");
const alertQuiz = document.getElementById("alert-quiz");

const sec = document.getElementById("seconds");
let timer;
let seconds = 0;
let currentQuestionIndex = 0;
let questionsData = []; 
const buttons = document.querySelectorAll("#btn-answer1, #btn-answer2, #btn-answer3, #btn-answer4");
let numbersOfCorrect = 0;
let numberOfItems = 0;

const apiUrl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=hard&type=multiple";

fetch (apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("There was a problem fetching the api");
        }
        return response.json();
    })
    .then(data => {
        questionsData = data.results; 
        numberOfItems = questionsData.length;
        displayQuestion(currentQuestionIndex);
     })
    .catch(error => {
        alert('Error : ' + error.message);
      });

       // Showing the result of the quiz and getting the index for each questions
      function displayQuestion(index) {
        if (index >= questionsData.length) {
           alertQuiz.style.visibility = "visible";
           alertQuiz.textContent = `Total number of corrects : ${numbersOfCorrect}/${numberOfItems}`;
            clearInterval(timer);
            return;
        }    

     // Getting datas from the api
    const currentQuestion = questionsData[index];
    const questionText = currentQuestion.question;
    const correctAnswer = currentQuestion.correct_answer;
    const incorrectAnswers = currentQuestion.incorrect_answers;

     // Storing the datas in an array and randomly sorting them
    const allAnswers = [...incorrectAnswers, correctAnswer];
    const shuffledAnswers = allAnswers.sort(() => Math.random() - 0.5);

    question.textContent = `${questionText}`;
    answer1.textContent = shuffledAnswers[0];
    answer2.textContent = shuffledAnswers[1];
    answer3.textContent = shuffledAnswers[2];
    answer4.textContent = shuffledAnswers[3];

     // If the user hasn't picked any answers yet
    buttons.forEach(button => {
        button.disabled = false;
        button.style.background = ""; 
    });

     // Checking the answers and disabling all buttons 
        [answer1, answer2, answer3, answer4].forEach(button => {
         button.onclick = () => {
            buttons.forEach(btn => btn.disabled = true);
             if (button.textContent === correctAnswer) {
             button.style.background = "greenyellow";
             numbersOfCorrect++;
                 currentQuestionIndex++;
             } else {
            button.style.background = "red";

             const correctButton = Array.from(buttons).find(
                btn => btn.textContent === correctAnswer
            );

            // Shows the correct answer if the answer is wrong
           if (correctButton) {
               correctButton.style.background = "greenyellow";
               }
            }

           clearInterval(timer);
            
           // Moving to the next question after a delay of 2 seconds
           setTimeout(() => {
               currentQuestionIndex++;
               displayQuestion(currentQuestionIndex);
               resetTimer();
           }, 2000); 
        };
    });
      resetTimer();
    }

    // Resetting the timer for each questions
    function resetTimer() {
        clearInterval(timer); 
        seconds = 0;
        sec.innerHTML = seconds; 
    
        timer = setInterval(() => {
            seconds++;
            sec.innerHTML = seconds;

            if (currentQuestionIndex >= questionsData.length) {
                return;
            }  
    
            if (seconds === 10) {
                clearInterval(timer); 
                seconds = 0; 
                currentQuestionIndex++;
                displayQuestion(currentQuestionIndex);
            }
        }, 1000);
    }
    


