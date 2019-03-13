
// GREYJOY HTML PAGE SLIDESHOT API // 


var targaryenImages = ["assets/images/Targaryen2.jpg"];
var greyjoyImages = ["assets/images/EuronGreyjoy.jpg"];
var martellImages = ["assets/images/SandSnake.jpg"];
var wildlingImages = ["assets/images/wildlingssolo.jpg"];
var starkImages = ["assets/images/Jonsnow.png"];
var lannisterImages = ["assets/Images/MagaliVilleneuve_CLannister.jpg"];


var showImage;


var count = 0;

$(document).ready(function () {

    var targaryenURL = "https://api.giphy.com/v1/gifs/search?q=targaryen&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";


    $.ajax({
        url: targaryenURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            if (results[i].rating !== "r") {

                targaryenImages.push(results[i].images.fixed_height.url)
            }
        }
    });

    var GreyJoyURL = "https://api.giphy.com/v1/gifs/search?q=YaraGreyjoy&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";


    $.ajax({
        url: GreyJoyURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            if (results[i].rating !== "r") {
                greyjoyImages.push(results[i].images.fixed_height.url)
            }
        }
    });

    var queryMartellURL = "https://api.giphy.com/v1/gifs/search?q=Oberyn&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";


    $.ajax({
        url: queryMartellURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            if (results[i].rating !== "r") {
                martellImages.push(results[i].images.fixed_height.url)
            }
        }
    });
    var queryWildlingURL = "https://api.giphy.com/v1/gifs/search?q=tormund&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";


    $.ajax({
        url: queryWildlingURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            if (results[i].rating !== "r") {
                wildlingImages.push(results[i].images.fixed_height.url)
            }
        }
    });
    var queryStarkURL = "https://api.giphy.com/v1/gifs/search?q=NedStark&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";


    $.ajax({
        url: queryStarkURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            if (results[i].rating !== "r") {
                starkImages.push(results[i].images.fixed_height.url)
            }
        }
    });

    var queryLannisterURL = "https://api.giphy.com/v1/gifs/search?q=lannister&api_key=k7r5BN1vLDpgx9L8kKqGisvZWsE5vt6F";


    $.ajax({
        url: queryLannisterURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data
        for (var i = 0; i < 1; i++) {
            if (results[i].rating !== "r") {
                lannisterImages.push(results[i].images.fixed_height.url)
            }
        }
    });

    startSlideshow();

})

$("#stop").click(stopSlideshow);

function displayImage() {
    $(".TargaryenSlideShow").html("<img src=" + targaryenImages[count] + " width='400px' height='400px' class='TargaryenImg'>");
    $(".GreyjoySlideShow").html("<img src=" + greyjoyImages[count] + " width='400px' height='400px' class='GreyjoyImg'>");
    $(".MartellSlideShow").html("<img src=" + martellImages[count] + " width='400px' height='400px' class='MartellImg'>");
    $(".WildlingSlideShow").html("<img src=" + wildlingImages[count] + " width='400px' height='400px' class='WildlingImg'>");
    $(".StarkSlideShow").html("<img src=" + starkImages[count] + " width='400px' height='400px' class='StarkImg'>");
    $(".LannisterSlideShow").html("<img src=" + lannisterImages[count] + " width='400px' height='400px' class='LannisterImg'>");
}

function nextImage() {
    count++;
    $(".TargaryenSlideShow").html("<img src='assets/images/giphy.gif' width='400px' height='400px' class='TargaryenImg'/>");
    setTimeout(displayImage, 500);
    $(".GreyjoySlideShow").html("<img src='assets/images/giphy.gif' width='400px' height='400px' class='GreyjoyImg'/>");
    setTimeout(displayImage, 500);
    $(".MartellSlideShow").html("<img src='assets/images/giphy.gif' width='400px' height='400px' class='MartellImg'/>");
    setTimeout(displayImage, 500);
    $(".WildlingSlideShow").html("<img src='assets/images/giphy.gif' width='400px' height='400px' class='WildlingImg'/>");
    setTimeout(displayImage, 500);
    $(".StarkSlideShow").html("<img src='assets/images/giphy.gif' width='400px' height='400px' class='StarkImg'/>");
    setTimeout(displayImage, 500);
    $(".LannisterSlideShow").html("<img src='assets/images/giphy.gif' width='400px' height='400px' class='LannisterImg'/>");
    setTimeout(displayImage, 500);
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

