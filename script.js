

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

window.onload = function () {
  // collect all the divs
  var divs = document.querySelectorAll(".tablinks");
  // get window width and height
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;

  // i stands for "index". you could also call this banana or haircut. it's a variable
  for (var i = 0; i < divs.length; i++) {
    // shortcut! the current div in the list
    let thisDiv = divs[i];

    //popup
    thisDiv.addEventListener("click",function(){
      const popup = thisDiv.querySelector("span");
      thisDiv.classList.toggle("show")
    })
    
    // get random numbers for each element
    var randomTop = getRandomNumber(0, winHeight);
    var randomLeft = getRandomNumber(0, winWidth);

    // update top and left position
    thisDiv.style.top = randomTop + "90px";
    thisDiv.style.left = randomLeft + "90px";
  }
};
// function that returns a random number between a min and max
function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
