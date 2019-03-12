// function goes here to funnel results from
// quiz into the politicalParty variable
// var politicalParty = "conservative"; 
// var articleKeyWord = politicalParty;

// for references: https://newsapi.org/docs/endpoints/top-headlines

var queryUrl = "https://newsapi.org/v2/top-headlines?country=us&category=politics&q=conservative&pageSize=8&apiKey=a644d0814d0848ed9c6a8f4400eb2eef"
var req = new Request(queryUrl);

fetch(req)
.then(function(response) {
console.log(response);
})