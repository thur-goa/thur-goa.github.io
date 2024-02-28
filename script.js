const nav = document.querySelector("nav");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
let fadeInScroll = document.querySelectorAll(".scroll");
const projectButton = document.querySelectorAll(".btn-links-blank");
const aqProjectButton = document.getElementById("particulate-research-btn");
const aqProjectPopUp = document.getElementById("aq-project");
const aqProjectPopUp2 = document.getElementById("aq-project-bg");
const aqExitBtn = document.getElementById("exit-button");

button.addEventListener('click', () => {
  nav.classList.toggle("openmenu");
  ul.classList.toggle("openmenu");
})

// credit to codehim.com for teaching me the fade in scroll transition
document.onscroll = function(){
  fadeInScroll.forEach(fadeInScroll => {
  let windowPosition = fadeInScroll.getBoundingClientRect();
  let windowPositionStart = windowPosition.top;
  // calculates how much of the window is in view for effect to occur
  if (windowPositionStart<300){
    fadeInScroll.classList.add("scroll-appear");
  }
})
}
for (const projectBlank of projectButton){
  projectBlank.addEventListener('click', (event) => {
    alert("This project currently does not have an external link. Check back later!");
    event.preventDefault(); // causes the page to not reload when button is pushed
  })
}

aqProjectButton.addEventListener('click', () => {
  aqProjectPopUp.classList.toggle("hidden");
  aqProjectPopUp2.classList.toggle("hidden");
})

aqExitBtn.addEventListener('click', () => {
  aqProjectPopUp.classList.toggle("hidden");
  aqProjectPopUp2.classList.toggle("hidden");
})