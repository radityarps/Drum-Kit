// Drum Button
var drumButton = document.querySelectorAll(".drum");
for (var i = 0; i < drumButton.length; i++) {
  drumButton[i].addEventListener("click", function () {
    var whatButton = this.innerHTML;
    whatSound(whatButton);
    buttonActive(whatButton);
  });
}

// keypress function
document.addEventListener("keydown", function (the) {
  var whatKey = the.key;
  whatSound(whatKey);
  buttonActive(whatKey);
});

// sounds list
function whatSound(whatKey) {
  switch (whatKey) {
    case "w":
      const tom1Audio = new Audio("./sounds/tom-1.mp3");
      tom1Audio.play();
      break;
    case "a":
      const tom3Audio = new Audio("./sounds/tom-3.mp3");
      tom3Audio.play();
      break;
    case "s":
      const tom4Audio = new Audio("./sounds/tom-4.mp3");
      tom4Audio.play();
      break;
    case "d":
      const tom2Audio = new Audio("./sounds/tom-2.mp3");
      tom2Audio.play();
      break;
    case "j":
      const snareAudio = new Audio("./sounds/snare.mp3");
      snareAudio.play();
      break;
    case "k":
      const crashAudio = new Audio("./sounds/crash.mp3");
      crashAudio.play();
      break;
    case "l":
      const kickBassAudio = new Audio("./sounds/kick-bass.mp3");
      kickBassAudio.play();
      break;
    default:
      break;
  }
}

// button animation
function buttonActive(currentKey) {
  var currentButton = document.querySelector("." + currentKey);
  currentButton.classList.add("pressed");
  setTimeout(function () {
    currentButton.classList.remove("pressed");
  }, 300);
}
