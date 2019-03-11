var config = {
    apiKey: "AIzaSyCjCOiAuCFRUqmnoV2lZ9pwwczlR7uVh8M",
    authDomain: "my-project-1551988749749.firebaseapp.com",
    databaseURL: "https://my-project-1551988749749.firebaseio.com",
    projectId: "my-project-1551988749749",
    storageBucket: "my-project-1551988749749.appspot.com",
    messagingSenderId: "506609611251"
  };
  firebase.initializeApp(config);

var database = firebase.database();
var score;
var userName = $("#userName").val().trim();
// $("#button1").on("click", function(){
//     // event.preventDefault();
//     window.location.href = "questions.html";
//     userName = $("#userName").val().trim();
//     database.ref("/userName").push({
//         userName:userName
//     });

// });
database.ref().on("child_added", function(childSnapshot) {



});