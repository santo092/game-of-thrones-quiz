
function getArticlesByCategory(query) {
    var queryUrl = "https://newsapi.org/v2/everything?q="+query+"&apiKey=a644d0814d0848ed9c6a8f4400eb2eef";

    $.ajax({ url: queryUrl, method: "GET" })
        .then(function (response) {
            console.log(response);
            $("#articles_targaryen").append("<p>"+response.articles[0].content+"</p>")
        })
}

// if they are a targarian 
// they are conservative 
    getArticlesByCategory("conservative");

// if they are a stark
// they are a liberal
    getArticlesByCategory("liberal");