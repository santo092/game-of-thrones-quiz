$(document).ready(function () {
    $("#start-btn").on("click", function () {
        var audio = new Audio("theme-song-got.mp3");
        function playSong() {
            audio.play();
        }
        playSong();
    })
});

// Work on getting the API for avatars and for
// Work on the cards for the final results on the end page and styling...
