const destMoon = document.querySelector(".dest-moon");
const destMars = document.querySelector(".dest-mars");
const destEuropa = document.querySelector(".dest-europa");
const destTitan = document.querySelector(".dest-titan");
const destBtn1 = document.querySelector(".dest-btn-moon");
const destBtn2 = document.querySelector(".dest-btn-mars");
const destBtn3 = document.querySelector(".dest-btn-europa");
const destBtn4 = document.querySelector(".dest-btn-titan");
const destImg = document.querySelector(".dest-img");
const dests = [destMoon, destMars, destEuropa, destTitan];
const destBtns = [destBtn1, destBtn2, destBtn3, destBtn4];
const destImgs = [
  "assets/destination/image-moon.png",
  "assets/destination/image-mars.png",
  "assets/destination/image-europa.png",
  "assets/destination/image-titan.png",
];

function ChangeDest(dest) {
  for (let i = 0; i < dests.length; i++) {
    if (dests[i].classList.contains(dest) == true) {
      dests[i].classList.remove("dest-inactive");
      destBtns[i].classList.remove("dest-btn-inactive");
      destBtns[i].classList.add("dest-btn-active");
      destImg.src = destImgs[i];
    } else {
      dests[i].classList.add("dest-inactive");
      destBtns[i].classList.add("dest-btn-inactive");
      destBtns[i].classList.remove("dest-btn-active");
    }
  }
}
