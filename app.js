var links = document.querySelector(".nav-links");
var navHome = document.querySelector(".nav-home");
var navDest = document.querySelector(".nav-dest");
var navCrew = document.querySelector(".nav-crew");
var navTech = document.querySelector(".nav-tech");

function menu() {
  console.log("WORKING");
  console.log(links);
  if (links.classList.contains("nav-active")) {
    links.classList.remove("nav-active");
  } else {
    links.classList.add("nav-active");
    navHome.innerHTML = "<p>00</p>HOME";
    navDest.innerHTML = "<p>01</p>DESTINATION";
    navCrew.innerHTML = "<p>02</p>CREW";
    navTech.innerHTML = "<p>03</p>TECHNOLOGY";
  }
}

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 1200px)");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    navHome.innerHTML = "<p>00</p>HOME";
    navDest.innerHTML = "<p>01</p>DESTINATION";
    navCrew.innerHTML = "<p>02</p>CREW";
    navTech.innerHTML = "<p>03</p>TECHNOLOGY";
  } else {
    navHome.innerHTML = "HOME";
    navDest.innerHTML = "DESTINATION";
    navCrew.innerHTML = "CREW";
    navTech.innerHTML = "TECHNOLOGY";
  }
}
