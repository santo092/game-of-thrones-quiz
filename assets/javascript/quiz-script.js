var currentQuestion = 0;
var score = 0;
var totQuestions =  questions.length;

var container = $("#quizContainer");
var questionEl = $("#question");
var opt1 = $("#opt1");
var opt2 = $("#opt2");
var opt3 = $("#opt3");
var opt4 = $("#opt4");
var opt5 = $("#opt5");
var opt6 = $("#opt6");
var nextButton = $("#nextButton");
var resultCont = $("#result");

function loadQuestion(questionIndex) {
    var q = questions[questionIndex];
    questionEl.text((questionIndex + 1) + ". " + q.question);
    opt1.text(q.option1);
    opt2.text(q.option2);
    opt3.text(q.option3);
    opt4.text(q.option4);
    opt5.text(q.option5);
    opt6.text(q.option6);
}

function loadNextQuestion (){
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if(!selectedOption){
        alert("please select your answer!");
        return;
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer){
        score+=10;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.text("Finish");
    }
    if(currentQuestion == totQuestions){
        container.style.display = "none";
        resultCont.style.display = "";
        resultCont.text("Your score" + score);
        return;
    }
    loadQuestion(currentQuestion);

}

loadQuestion(currentQuestion)




