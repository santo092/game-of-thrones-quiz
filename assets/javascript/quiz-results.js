
// for references: https://newsapi.org/docs/endpoints/top-headlines

var queryUrl = "https://newsapi.org/v2/top-headlines?country=us&category=politics&q=conservative&pageSize=8&apiKey=a644d0814d0848ed9c6a8f4400eb2eef"
var req = new Request(queryUrl);

fetch(req)
.then(function(response) {
console.log(response);
})

var queryUrl = "https://newsapi.org/v2/top-headlines?country=us&category=politics&q=liberal&pageSize=8&apiKey=a644d0814d0848ed9c6a8f4400eb2eef"
var req = new Request(queryUrl);

fetch(req)
.then(function(response) {
console.log(response);
})

var queryUrl = "https://newsapi.org/v2/top-headlines?country=us&category=politics&q=independent&pageSize=8&apiKey=a644d0814d0848ed9c6a8f4400eb2eef"
var req = new Request(queryUrl);

fetch(req)
.then(function(response) {
console.log(response);
})

var queryURL = "";


var queryUrl = "https://newsapi.org/v2/top-headlines?country=us&category=politics&q=anarchy&pageSize=8&apiKey=a644d0814d0848ed9c6a8f4400eb2eef"
var req = new Request(queryUrl);

fetch(req)
.then(function(response) {
console.log(response);
})

var queryUrl = "https://newsapi.org/v2/top-headlines?country=us&category=politics&q=moderate&pageSize=8&apiKey=a644d0814d0848ed9c6a8f4400eb2eef"
var req = new Request(queryUrl);

fetch(req)
.then(function(response) {
console.log(response);
})

var queryUrl = "https://newsapi.org/v2/top-headlines?country=us&category=politics&q=libertarian&pageSize=8&apiKey=a644d0814d0848ed9c6a8f4400eb2eef"
var req = new Request(queryUrl);

fetch(req)
.then(function(response) {
console.log(response);
})


// function getArticlesByCategory(query) {
//     var queryUrl = "https://newsapi.org/v2/everything?q=" + query + "&apiKey=a644d0814d0848ed9c6a8f4400eb2eef";
//     $.ajax({
//         url: queryUrl,
//         method: "GET"
//     })
//         .then(function (response) {
//             console.log(response);
//             // <a href="#" class="list-group-item list-group-item-action">Arrticle Recommendation</a>
//             for (var i = 0; i < response.articles.length; i++) {
//                 var a = $("<a>").text(response.articles[i].title);
//                 a.addClass("list-group-item list-group-item-action");
//                 a.attr("href", response.articles[i].url);
//                 $(".articles").append(a);
//             }
//         });
// }

// Explanation: function call to run article API - six separate parameters
// Two possible solutions to the error: 

// 1. define all of the house names 
// 2. replace the house names below with the values that correlate to house names

// if ((score <= 120) && (score > 100)) {
// getArticlesByCategory("conservative");
// }

// if ((score <= 60) && (score > 40)) {
// getArticlesByCategory("liberal");
// }

// if ((score < 100) && (score > 80)) {
// getArticlesByCategory("moderate");
// }

// if ((score <= 80) && (score > 60)) {
// getArticlesByCategory("independent");
// }

// if ((score <= 40) && (score > 20)) {
// getArticlesByCategory("libertarian");
// }

// if (score <= 20) {
// getArticlesByCategory("anarchy");
// }






