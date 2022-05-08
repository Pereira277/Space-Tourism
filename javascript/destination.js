// Destination page

// change destinaton page content when button is pressed
function ChangeDest(dest) {
  // vars
  var destName = document.querySelector(".dest-name");
  var destDescription = document.querySelector(".dest-description");
  var destDistNum = document.querySelector(".dest-dist-num");
  var destTimeNum = document.querySelector(".dest-time-num");
  var destImg = document.querySelector(".dest-img");
  var destBtnMoon = document.querySelector(".dest-btn-moon");
  var destBtnMars = document.querySelector(".dest-btn-mars");
  var destBtnEuropa = document.querySelector(".dest-btn-europa");
  var destBtnTitan = document.querySelector(".dest-btn-titan");

  if (dest === "moon") {
    destName.innerHTML = "MOON";
    destDescription.innerHTML =
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
    destDistNum.innerHTML = "384,400 KM";
    destTimeNum.innerHTML = "3 DAYS";
    destImg.src = "assets/destination/image-moon.png";
    destBtnMoon.classList.add("dest-btn-active");
    destBtnMars.classList.remove("dest-btn-active");
    destBtnEuropa.classList.remove("dest-btn-active");
    destBtnTitan.classList.remove("dest-btn-active");
    destBtnMoon.classList.remove("dest-btn-inactive");
    destBtnMars.classList.add("dest-btn-inactive");
    destBtnEuropa.classList.add("dest-btn-inactive");
    destBtnTitan.classList.add("dest-btn-inactive");
  }
  if (dest === "mars") {
    destName.innerHTML = "MARS";
    destDescription.innerHTML =
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
    destDistNum.innerHTML = "225 MIL. KM";
    destTimeNum.innerHTML = "9 MONTHS";
    destImg.src = "assets/destination/image-mars.png";
    destBtnMoon.classList.remove("dest-btn-active");
    destBtnMars.classList.add("dest-btn-active");
    destBtnEuropa.classList.remove("dest-btn-active");
    destBtnTitan.classList.remove("dest-btn-active");
    destBtnMoon.classList.add("dest-btn-inactive");
    destBtnMars.classList.remove("dest-btn-inactive");
    destBtnEuropa.classList.add("dest-btn-inactive");
    destBtnTitan.classList.add("dest-btn-inactive");
  }
  if (dest === "europa") {
    destName.innerHTML = "EUROPA";
    destDescription.innerHTML =
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
    destDistNum.innerHTML = "628 MIL. KM";
    destTimeNum.innerHTML = "3 YEARS";
    destImg.src = "assets/destination/image-europa.png";
    destBtnMoon.classList.remove("dest-btn-active");
    destBtnMars.classList.remove("dest-btn-active");
    destBtnEuropa.classList.add("dest-btn-active");
    destBtnTitan.classList.remove("dest-btn-active");
    destBtnMoon.classList.add("dest-btn-inactive");
    destBtnMars.classList.add("dest-btn-inactive");
    destBtnEuropa.classList.remove("dest-btn-inactive");
    destBtnTitan.classList.add("dest-btn-inactive");
  }
  if (dest === "titan") {
    destName.innerHTML = "TITAN";
    destDescription.innerHTML =
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
    destDistNum.innerHTML = "1,6 BIL. KM";
    destTimeNum.innerHTML = "7 YEARS";
    destImg.src = "assets/destination/image-titan.png";
    destBtnMoon.classList.remove("dest-btn-active");
    destBtnMars.classList.remove("dest-btn-active");
    destBtnEuropa.classList.remove("dest-btn-active");
    destBtnTitan.classList.add("dest-btn-active");
    destBtnMoon.classList.add("dest-btn-inactive");
    destBtnMars.classList.add("dest-btn-inactive");
    destBtnEuropa.classList.add("dest-btn-inactive");
    destBtnTitan.classList.remove("dest-btn-inactive");
  }
}
