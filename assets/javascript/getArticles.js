function getArticlesByCategory(query) {
    var queryUrl = "https://newsapi.org/v2/everything?q=" + query + "&apiKey=a644d0814d0848ed9c6a8f4400eb2eef&pageSize=4";
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        .then(function (response) {


            var articles = response.articles;
            for (var i = 0; i < articles.length; i++) {
                var a = $("<a>");
                a.attr("href", articles[i].url);
                a.text(articles[i].title);
                var li = $("<li>");
                li.attr("class", "list-group-item list-group-item-action");
                li.append(a);
                $(".articles").append(li);
            }
        });
}