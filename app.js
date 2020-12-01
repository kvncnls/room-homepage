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

window.addEventListener("resize", () => {
  if (window.innerWidth === 640) {
    console.log(window.innerWidth);
  }
});

/* Next / Previous Buttons */

const carouselImages = Array.from(document.querySelectorAll(".carousel-img"));
const prevBtn = document.querySelector(".switch__previous");
const nextBtn = document.querySelector(".switch__next");
const copy = document.querySelector(".copy");

let discoverText = {
  heading: "Discover innovative ways to decorate.",
  description:
    "We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
};

let availabilityText = {
  heading: "We are available all across the globe.",
  description:
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
};

let manufactureText = {
  heading: "Manufactured with the best materials",
  description:
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
};

let textArray = [discoverText, availabilityText, manufactureText];

let imgNo = 0;

prevBtn.addEventListener("click", () => {
  if (imgNo == 0) {
    imgNo = 3;
  }
  carouselImages[imgNo % carouselImages.length].classList.replace(
    "show-img",
    "hide-img"
  );
  carouselImages[(imgNo - 1) % carouselImages.length].classList.replace(
    "hide-img",
    "show-img"
  );

  copy.firstElementChild.textContent =
    textArray[imgNo % textArray.length].heading;
  copy.firstElementChild.nextElementSibling.textContent =
    textArray[imgNo % textArray.length].description;

  imgNo -= 1;
});

nextBtn.addEventListener("click", () => {
  if (imgNo == 3) {
    imgNo = 0;
  }
  carouselImages[imgNo % carouselImages.length].classList.replace(
    "show-img",
    "hide-img"
  );
  carouselImages[(imgNo + 1) % carouselImages.length].classList.replace(
    "hide-img",
    "show-img"
  );

  copy.firstElementChild.textContent =
    textArray[imgNo % textArray.length].heading;
  copy.firstElementChild.nextElementSibling.textContent =
    textArray[imgNo % textArray.length].description;

  imgNo += 1;
});
