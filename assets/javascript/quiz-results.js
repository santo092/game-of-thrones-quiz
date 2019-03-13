
function getArticlesByCategory(query) {
    var queryUrl = "https://newsapi.org/v2/everything?q=" + query + "&apiKey=a644d0814d0848ed9c6a8f4400eb2eef";
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {
            console.log(response);
            // <a href="#" class="list-group-item list-group-item-action">Arrticle Recommendation</a>
            for (var i = 0; i < response.articles.length; i++) {
                var a = $("<a>").text(response.articles[i].title);
                a.addClass("list-group-item list-group-item-action");
                a.attr("href", response.articles[i].url);
                $(".articles").append(a);
            }
        });
}

// Explanation: function call to run article API - six separate parameters
// Two possible solutions to the error: 

// 1. define all of the house names 
// 2. replace the house names below with the values that correlate to house names

if (lannisters === true){
getArticlesByCategory("conservative");
}

if (martells === true){
getArticlesByCategory("liberal");
}

if (stark === true){
getArticlesByCategory("moderate");
}

if (wildlings === true){
getArticlesByCategory("independent");
}

if (greyjoys === true){
getArticlesByCategory("libertarian");
}

if (targaryens === true){
getArticlesByCategory("anarchy");
}





