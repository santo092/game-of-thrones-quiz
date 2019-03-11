
// GREYJOY HTML PAGE SLIDESHOT API // 


var images = ["assets/images/greyjoy.png", Greyjoy, "assets/Images/asha-house-greyjoy.jpg"];

var showImage;

var count = 0;


$(document).ready(function(){



    var queryURL = "https://api.giphy.com/v1/gifs/search?q=greyjoy&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";
  
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {
      console.log(response);
  
      var results = response.data
  
      for (var i = 0; i < 1; i++) {
        if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
  
  
          var characterImage = $("<img>")
  
          var characterImage = $("<img class='result'>");
              characterImage.attr("src", results[i].images.fixed_height.url);
        //       characterImage.attr("data-state", "still");
        //       characterImage.attr("data-still", results[i].images.fixed_height_still.url);
        //       characterImage.attr("data-animate", results[i].images.fixed_height.url);
  
        
      
  
  
  
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
  $("#image-holder").html("<img src='assets/images/Loading gif.gif' width='200px'/>");
  setTimeout(displayImage, 1000);
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {
  showImage = setInterval(nextImage, 3000);
}

function stopSlideshow() {
  clearInterval(showImage);
}


displayImage();

