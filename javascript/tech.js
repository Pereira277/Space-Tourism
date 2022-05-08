const techVehicle = document.querySelector(".tech-vehicle");
const techPort = document.querySelector(".tech-port");
const techCapsule = document.querySelector(".tech-capsule");
const techVehicleImg = document.querySelector(".tech-vehicle-img");
const techPortImg = document.querySelector(".tech-port-img");
const techCapsuleImg = document.querySelector(".tech-capsule-img");
const techBtn1 = document.querySelector(".tech-btn-1");
const techBtn2 = document.querySelector(".tech-btn-2");
const techBtn3 = document.querySelector(".tech-btn-3");
const techs = [techVehicle, techPort, techCapsule];
const techsImgs = [techVehicleImg, techPortImg, techCapsuleImg];
const techBtn = [techBtn1, techBtn2, techBtn3];

function ChangeTech(tech) {
  for (let i = 0; i < techs.length; i++) {
    if (techs[i].classList.contains(tech) == true) {
      console.log(techsImgs[i]);
      techs[i].classList.remove("tech-inactive");
      techsImgs[i].classList.remove("tech-inactive");
      techBtn[i].classList.add("tech-btn-active");
    } else {
      techs[i].classList.add("tech-inactive");
      techsImgs[i].classList.add("tech-inactive");
      techBtn[i].classList.remove("tech-btn-active");
    }
  }
}

if (matchMedia) {
  const mq = window.matchMedia("(min-width: 1200px) and (max-width: 2250px");
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
  if (mq.matches) {
    console.log("WORKING");
    techVehicleImg.src = "/assets/technology/image-launch-vehicle-portrait.jpg";
    techPortImg.src = "/assets/technology/image-spaceport-portrait.jpg";
    techCapsuleImg.src = "/assets/technology/image-space-capsule-portrait.jpg";
  } else {
    techVehicleImg.src =
      "/assets/technology/image-launch-vehicle-landscape.jpg";
    techPortImg.src = "/assets/technology/image-spaceport-landscape.jpg";
    techCapsuleImg.src = "/assets/technology/image-space-capsule-landscape.jpg";
  }
}
