$(document).ready(function () {
    $("#start-btn").on("click", function () {
        var audio = new Audio("theme-song-got.mp3");
        function playSong() {
            audio.play();
        }
        playSong();
    })
});


