var images = ["assets/images/greyjoy.png", "assets/images/logo.jpg", "assets/Images/asha-house-greyjoy.jpg"];

var showImage;

var count = 0;


$( document ).ready(startSlideshow)

$("#stop").click(stopSlideshow);

function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  count++;
  $("#image-holder").html("<img src='assets/images/Loading gif.gif' width='200px'/>");
  setTimeout(displayImage, 1000);
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {
  showImage = setInterval(nextImage, 3000);
}

function stopSlideshow() {
  clearInterval(showImage);
}


displayImage();
