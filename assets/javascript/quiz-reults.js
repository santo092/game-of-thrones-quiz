// function goes here to funnel results from
// quiz into the politicalParty variable
var politicalParty = "conservative"; 
var articleKeyWord = politicalParty;
var queryURL = "" + articleKeyWord + "";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){

});