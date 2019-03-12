
// GREYJOY HTML PAGE SLIDESHOT API // 


var images = ["assets/images/greyjoy.png", "assets/Images/asha-house-greyjoy.jpg"];

var showImage;

var count = 0;

var currentQuestion = 0;
var score = 0;
var totQuestions =  questions.length;

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


$(document).ready(function(){

    if(currentQuestion == totQuestions){

        if (score <= 20){
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=targaryen&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";

        }
        if ((score <= 40) && (score > 20)){
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=greyjoy&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";
        }
        if ((score <= 60) && (score > 40)){
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=martell&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";
        }
        if ((score <= 80) && (score >60)){
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=wildling&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";
        }
        if ((score <100) && (score >80)){
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=stark&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";
        }
        if ((score <= 120) && (score >100)){
            var queryURL = "https://api.giphy.com/v1/gifs/search?q=lannister&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";
        }
    
        
    }



    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=greyjoy&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";
  
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
  
      var results = response.data
      console.log(response.data)
  
      for (var i = 0; i < 1; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
  
  
          var characterImage = $("<img>")
  
          var characterImage = $("<img class='result'>");
              characterImage.attr("src", results[i].images.fixed_height.url);
        //       characterImage.attr("data-state", "still");
        //       characterImage.attr("data-still", results[i].images.fixed_height_still.url);
        //       characterImage.attr("data-animate", results[i].images.fixed_height.url);
            
         images.push(results[i].images.fixed_height.url)
         console.log(images)
  
  
  
        }
      }
  
    });
    

startSlideshow(); 

}) 

$("#stop").click(stopSlideshow);

function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  count++;
  $("#image-holder").html("<img src='assets/images/giphy.gif' width='400px'/>");
  setTimeout(displayImage, 1000);
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {
  showImage = setInterval(nextImage, 5000);
}

function stopSlideshow() {
  clearInterval(showImage);
}


displayImage();

