// CREW PAGE //
const crewDouglas = document.querySelector(".crew-douglas");
const crewMark = document.querySelector(".crew-mark");
const crewVictor = document.querySelector(".crew-victor");
const crewAnousheh = document.querySelector(".crew-anousheh");
const crewDouglasImg = document.querySelector(".crew-douglas-img");
const crewMarkImg = document.querySelector(".crew-mark-img");
const crewVictorImg = document.querySelector(".crew-victor-img");
const crewAnoushehImg = document.querySelector(".crew-anousheh-img");
const crewBtn1 = document.querySelector(".crew-btn-1");
const crewBtn2 = document.querySelector(".crew-btn-2");
const crewBtn3 = document.querySelector(".crew-btn-3");
const crewBtn4 = document.querySelector(".crew-btn-4");
const crewMembers = [crewDouglas, crewMark, crewVictor, crewAnousheh];
const crewMembersImg = [
  crewDouglasImg,
  crewMarkImg,
  crewVictorImg,
  crewAnoushehImg,
];
const crewBtn = [crewBtn1, crewBtn2, crewBtn3, crewBtn4];

function ChangeCrew(crew) {
  for (let i = 0; i < crewMembers.length; i++) {
    if (crewMembers[i].classList.contains(crew) == true) {
      console.log(crewMembers[i]);
      crewMembers[i].classList.remove("crew-inactive");
      crewMembersImg[i].classList.remove("crew-inactive");
      crewBtn[i].classList.add("crew-btn-active");
    } else {
      crewMembers[i].classList.add("crew-inactive");
      crewMembersImg[i].classList.add("crew-inactive");
      crewBtn[i].classList.remove("crew-btn-active");
    }
  }
}
