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
var userName = $("#userName").val();


// var itemRef = database.ref("/userName");
// var itemRef = database
//     .ref("/userName")
//     .orderByKey()
//     .equalTo(id);

// var item = snapshot.child(id).val();


$("#button1").on("click", function () {
    // event.preventDefault();
    // window.location.href = "questions.html";
    userName = $("#userName").val().trim();
    database.ref("/userName").push({
        userName: userName
    });


    // var ref = firebase.database().ref("dinosaurs");
    // ref.orderByChild("height").equalTo(25).on("child_added", function(snapshot) {
    // console.log(snapshot.key);

    // });
});



database.ref("/userName").orderByChild("height").equalTo(25).on("child_added", function (childSnapshot) {

    // console.log(childSnapshot.val());

    var userName = childSnapshot.val().userName;
    console.log(userName)

    $("#displayUserNameLann").append("<br>" + userName);


    // if (score <= 20) {

    //     $("#displayUserNameLann").text(userName),
    //         $(".container-quiz-results").append($("#displayUserNameLann"));
    // }
    // if ((score <= 40) && (score > 20)) {

    //     $("#displayUserNameLann").text(userName),
    //         $(".container-quiz-results").append($("#displayUserNameLann"));

    // }
    // if ((score <= 60) && (score > 40)) {

    //     $("#displayUserNameLann").text(userName),
    //         $(".container-quiz-results").append($("#displayUserNameLann"));
    // }
    // if ((score <= 80) && (score > 60)) {

    //     $("#displayUserNameLann").text(userName),
    //         $(".container-quiz-results").append($("#displayUserNameLann"));
    // }
    // if ((score < 100) && (score > 80)) {

    //     $("#displayUserNameLann").text(userName),
    //         $(".container-quiz-results").append($("#displayUserNameLann"));
    // }
    // if ((score <= 120) && (score > 100)) {

    //     $("#displayUserNameLann").text(userName),
    //         $(".container-quiz-results").append($("#displayUserNameLann"));

    // }
    // console.log(userName);
});