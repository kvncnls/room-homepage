gsap.registerPlugin(ScrollTrigger);

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const navList = document.querySelector(".nav-list");
const darkOverlay = document.querySelector(".dark-overlay");

/* Navbar Animations Starts */
menuBtn.addEventListener("click", () => {
  if (!menuBtn.classList.contains("opened")) {
    menuBtn.classList.add("opened");
    showMenu();
  } else if (menuBtn.classList.contains("opened")) {
    menuBtn.classList.remove("opened");
    closeMenu();
  }
});

function showMenu() {
  nav.style.backgroundColor = "#fff";
  logo.style.display = "none";
  navList.style.display = "flex";
  menuBtn.classList.add("menu-x");
  darkOverlay.style.height = "200vh";
  darkOverlay.style.width = "100vw";
}

function closeMenu() {
  nav.style.backgroundColor = "transparent";
  logo.style.display = "block";
  navList.style.display = "none";
  menuBtn.classList.remove("menu-x");
  darkOverlay.style.height = "0vh";
  darkOverlay.style.width = "0vw";
}

darkOverlay.addEventListener("click", () => {
  menuBtn.classList.remove("opened");
  closeMenu();
});

/* Next / Previous Buttons */

const imageDiv = document.querySelector(".main-block__image");
const image = document.querySelector(".main-block__image img");
const prevBtn = document.querySelector(".switch__previous");
const nextBtn = document.querySelector(".switch__next");
let imgNo = 1;

console.log(imageDiv);
console.log(image);

prevBtn.addEventListener("click", () => {
  /* If media query exceeds 410px,
  use desktop image */
  if (window.innerWidth > 410) {
    console.log("Greater than 410");
  } else {
    console.log("Less than 410");
  }

  if (imgNo <= 1) {
    imgNo = 3;
  } else {
    imgNo -= 1;
  }
  console.log(imgNo);
});

nextBtn.addEventListener("click", () => {
  /* If media query exceeds 410px,
  use desktop image */

  if (window.innerWidth > 410) {
    console.log("Greater than 410");
  } else {
    console.log("Less than 410");
  }

  if (imgNo >= 3) {
    imgNo = 1;
  } else {
    imgNo += 1;
  }
  console.log(imgNo);
});
