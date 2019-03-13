
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

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

function loadNextQuestion() {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if (!selectedOption) {
        return;
    }
    var answer = selectedOption.value;

    if (questions[currentQuestion].answer1 == answer) {
        score += 1.5;
    }
    else if (questions[currentQuestion].answer2 == answer) {
        score += 3;
    }
    else if (questions[currentQuestion].answer3 == answer) {
        score += 5;
    }
    else if (questions[currentQuestion].answer4 == answer) {
        score += 7;
    }
    else if (questions[currentQuestion].answer5 == answer) {
        score += 9;
    }
    else if (questions[currentQuestion].answer6 == answer) {
        score += 11;
    }
    console.log(score);

    selectedOption.checked = false;
    currentQuestion++;


    if (currentQuestion == totQuestions - 1) {
        nextButton.text("Finish");

    }

    if (currentQuestion == totQuestions) {

        if (score <= 20) {
            window.location.href = "targaryen.html";
        }
        if ((score <= 40) && (score > 20)) {
            window.location.href = "greyjoys.html";
        }
        if ((score <= 60) && (score > 40)) {
            window.location.href = "martells.html";
        }
        if ((score <= 80) && (score > 60)) {
            window.location.href = "wildlings.html";
        }
        if ((score < 100) && (score > 80)) {
            window.location.href = "stark.html";
        }
        if ((score <= 120) && (score > 100)) {
            // database.ref("/lannisters").push({
            //     userName: userName
            // });
            window.location.href = "lannisters.html";
            // userHouse.text(userName)

        }
    }

    loadQuestion(currentQuestion);

}


loadQuestion(currentQuestion)

// function for news & articles API

function getArticlesByCategory(query) {
    var queryUrl = "https://newsapi.org/v2/everything?q=" + query + "&apiKey=a644d0814d0848ed9c6a8f4400eb2eef";
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            // <a href="#" class="list-group-item list-group-item-action">Arrticle Recommendation</a>
            // pseudo-code to create list of article links
            // when response from newsapi is received
            // get a reference to the articles array
            var articles = response.articles
            for (var i = 0; i < articles.length; i++) {
                // for each article in the array
                // create a var to hold a new a tag
                var a = $("<a>")
                // put url in href of a tag
                a.attr("href", articles[i].url)
                // put article title in a tag text
                a.text(atricles[i].title)
                // create a var to hold a new li tag
                var li = $("<li>")
                // add classes to the li
                li.attr("class", "list-group-item list-group-item-action")
                // append the a tag to the li
                li.append(a)
                // append the li into the ul
                $(".articles").append(li)
            }

            for (var i = 0; i < response.articles.length; i++) {
                var a = $("<a>").text(response.articles[i].title);
                a.addClass("list-group-item list-group-item-action");
                a.attr("href", response.articles[i].url);
                $(".articles").append(a);
            }
        });
}

if (score <= 20) {
    getArticlesByCategory("anarchy");
}

if ((score <= 40) && (score > 20)) {
    getArticlesByCategory("libertarian");
}

if ((score <= 60) && (score > 40)) {
    getArticlesByCategory("liberal");
}

if ((score <= 80) && (score > 60)) {
    getArticlesByCategory("independent");
}

if ((score < 100) && (score > 80)) {
    getArticlesByCategory("moderate");
}

if ((score <= 120) && (score > 100)) {
    getArticlesByCategory("conservative");
}

getArticlesByCategory("socialist")





















