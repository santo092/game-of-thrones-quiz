

// <---INDEX PAGE JAVASCRIPT--->
console.log("Hi")

  $("#button1").click(function (event) {
   
    window.location.href = "questions.html";

    });


// <---QUESTION PAGE JAVASCRIPT ---> 

var houseTargTally = 0;
var houseStarkTally = 0;
var houseLannTally = 0; 
var houseMartellTally = 0;
var wildlingTally = 0; 

$('input[name="radio"]').on('click', function() {
    if ($(this).val() == '1') {
        houseTargTally++;
        console.log(houseTargTally);
    } else if ($(this).val() == '2') {
        houseStarkTally++;
        console.log(houseTargTally)
    }  else if ($(this).val() == '3') {
        houseStarkTally++;
        console.log(houseTargTally)
    } else if ($(this).val() == '4') {
        houseStarkTally++;
        console.log(houseTargTally)
    }  else if ($(this).val() == '5') {
        houseStarkTally++;
        console.log(houseTargTally)
    }
}); 

