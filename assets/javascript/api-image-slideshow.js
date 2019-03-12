
// GREYJOY HTML PAGE SLIDESHOT API // 


var targaryenImages = ["assets/images/greyjoy.png", "assets/Images/asha-house-greyjoy.jpg"];
var greyjoyImages = ["assets/images/greyjoy.png", "assets/Images/asha-house-greyjoy.jpg"];
var martellImages = ["assets/images/greyjoy.png", "assets/Images/asha-house-greyjoy.jpg"];
var wildlingImages = ["assets/images/greyjoy.png", "assets/Images/asha-house-greyjoy.jpg"];
var starkImages = ["assets/images/greyjoy.png", "assets/Images/asha-house-greyjoy.jpg"];
var lannisterImages = ["assets/images/greyjoy.png", "assets/Images/asha-house-greyjoy.jpg"];


var showImage;


var count = 0;

$(document).ready(function () {

    var targaryenURL = "https://api.giphy.com/v1/gifs/search?q=targaryen&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";

   d
    $.ajax({
        url: targaryenURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            targaryenImages.push(results[i].images.fixed_height.url)
        }
    });

    var GreyJoyURL = "https://api.giphy.com/v1/gifs/search?q=greyjoy&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";

  
    $.ajax({
        url: GreyJoyURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            greyjoyImages.push(results[i].images.fixed_height.url)
        }
    });

    var queryMartellURL = "https://api.giphy.com/v1/gifs/search?q=oberyn&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";


    $.ajax({
        url: queryMartellURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            martellImages.push(results[i].images.fixed_height.url)
        }
    });
    var queryWildlingURL = "https://api.giphy.com/v1/gifs/search?q=tormund&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";


    $.ajax({
        url: queryWildlingURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            wildlingImages.push(results[i].images.fixed_height.url)
        }
    });
    var queryStarkURL = "https://api.giphy.com/v1/gifs/search?q=NedStark&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";

  
    $.ajax({
        url: queryStarkURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            starkImages.push(results[i].images.fixed_height.url)
        }
    });

    var queryLannisterURL = "https://api.giphy.com/v1/gifs/search?q=lannister&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";

   
    $.ajax({
        url: queryLannisterURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            lannisterImages.push(results[i].images.fixed_height.url)
        }
    });

    startSlideshow();

})

$("#stop").click(stopSlideshow);

function displayImage() {
    $(".TargaryenSlideShow").html("<img src=" + targaryenImages[count] + " width='400px'>");
    $(".GreyjoySlideShow").html("<img src=" + greyjoyImages[count] + " width='400px'>");
    $(".MartellSlideShow").html("<img src=" + martellImages[count] + " width='400px'>");
    $(".WildlingSlideShow").html("<img src=" + wildlingImages[count] + " width='400px'>");
    $(".StarkSlideShow").html("<img src=" + starkImages[count] + " width='400px'>");
    $(".LannisterSlideShow").html("<img src=" + lannisterImages[count] + " width='400px'>");
}

function nextImage() {
    count++;
    $(".TargaryenSlideShow").html("<img src='assets/images/giphy.gif' width='400px'/>");
    setTimeout(displayImage, 1000);
    $(".GreyjoySlideShow").html("<img src='assets/images/giphy.gif' width='400px'/>");
    setTimeout(displayImage, 1000);
    $(".MartellSlideShow").html("<img src='assets/images/giphy.gif' width='400px'/>");
    setTimeout(displayImage, 1000);
    $(".WildlingSlideShow").html("<img src='assets/images/giphy.gif' width='400px'/>");
    setTimeout(displayImage, 1000);
    $(".StarkSlideShow").html("<img src='assets/images/giphy.gif' width='400px'/>");
    setTimeout(displayImage, 1000);
    $(".LannisterSlideShow").html("<img src='assets/images/giphy.gif' width='400px'/>");
    setTimeout(displayImage, 1000);
    if (count === targaryenImages.length) {
        count = 0;
    }
    if (count === greyjoyImages.length) {
        count = 0;
    }
    if (count === martellImages.length) {
        count = 0;
    }
    if (count === wildlingImages.length) {
        count = 0;
    }
    if (count === starkImages.length) {
        count = 0;
    }
    if (count === lannisterImages.length) {
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

