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

    if(questions[currentQuestion].answer1== answer){
        score+=1;
    }
    else if(questions[currentQuestion].answer2== answer){
        score+=2;
    }
    else if(questions[currentQuestion].answer3== answer){
        score+=4;
    }
    else if(questions[currentQuestion].answer4 == answer){
        score+=6;
    }
    else if(questions[currentQuestion].answer5 == answer){
        score+=8;
    }
    else if(questions[currentQuestion].answer6 == answer){
        score+=10;
    }
    console.log(score);
    
    selectedOption.checked = false;
    currentQuestion++;


    if(currentQuestion == totQuestions-1){
    nextButton.text("Finish");
    }
    
    if(currentQuestion == totQuestions){

        if (score <= 15){
            window.location.href = "targaryen.html";
        }
        if ((score <= 30) && (score > 15)){
            window.location.href = "greyjoys.html";
        }
        if ((score <= 60) && (score > 30)){
            window.location.href = "martells.html";
        }
        if ((score <= 75) && (score >60)){
            window.location.href = "wildlings.html";
        }
        if ((score <90) && (score >75)){
            window.location.href = "stark.html";
        }
        if ((score <= 100) && (score >90)){
            window.location.href = "lannisters.html";
        }
    
        
    }
    




    loadQuestion(currentQuestion);

}

loadQuestion(currentQuestion)




