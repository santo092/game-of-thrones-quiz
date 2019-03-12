// var searchAvatar = function(avatar) {
//     var queryURL = ("src""https://avatars.dicebear.com/v2/:sprites/:seed.svg";
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     }).then(function(response) {
//      console.log(response);
//     });
//   };

var genderFem = $("#genderFem");
var genderBoy = $("#genderBoy");



var avatar= $(".avatar");
avatar.attr("src", "https://avatars.dicebear.com/v2/avataaars/example.svg")



var putAvatar= $(".avatar-holder");
$(putAvatar).html(avatar)



