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
const copy = document.querySelector(".copy");

let imgNo = 1;
let prefix;

/* Create a window width detector that checks if the width is less than 410. If less than 410, use the mobile prefix.
Otherwise, use the desktop prefix.

Make this detector check for window size changes.**** */
/* Maybe use GSAP for window size changes? */
/* Use GSAP's mediaMatch */

prevBtn.addEventListener("click", () => {
  if (imgNo <= 1) {
    imgNo = 3;
  } else {
    imgNo -= 1;
  }
  if (window.innerWidth > 410) {
    prefix = "/images/desktop-image-hero-";
    image.src = `${prefix}${imgNo}.jpg`;
  } else {
    prefix = "/images/mobile-image-hero-";
    image.src = `${prefix}${imgNo}.jpg`;
  }
  /* imgNo --> Copy change */
  if (imgNo === 1) {
    copy.innerHTML = `
    <h1 class="title">
    Discover innovative ways to decorate
    </h1>
    <p class="description">
    We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.
    </p>
    `;
  } else if (imgNo === 2) {
    copy.innerHTML = `
    <h1 class="title">We are available all across the globe</h1>
    <p class="description">With stores all over the world, it's easy for you to find furniture for your home or place
    of business.
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today.</p>
    `;
  } else if (imgNo === 3) {
    copy.innerHTML = `
    <h1 class="title">Manufactured with the best materials</h1>
    <p class="description">Our modern furniture store provide a high level of quality. Our company has invested in
    advanced technology
    to ensure that every product is made as perfect and as consistent as possible. With three decades of
    experience in this industry, we understand what customers want for their home and office.</p>
    `;
  }
});

nextBtn.addEventListener("click", () => {
  if (imgNo >= 3) {
    imgNo = 1;
  } else {
    imgNo += 1;
  }
  if (window.innerWidth > 410) {
    prefix = "/images/desktop-image-hero-";
    image.src = `${prefix}${imgNo}.jpg`;
  } else {
    prefix = "/images/mobile-image-hero-";
    image.src = `${prefix}${imgNo}.jpg`;
  }
  /* imgNo --> Copy change */
  if (imgNo === 1) {
    copy.innerHTML = `
    <h1 class="title">
    Discover innovative ways to decorate
    </h1>
    <p class="description">
    We provide unmatched quality, comfort, and style for property owners across the country.
    Our experts combine form and function in bringing your vision to life. Create a room in your
    own style with our collection and make your property a reflection of you and what you love.
    </p>
    `;
  } else if (imgNo === 2) {
    copy.innerHTML = `
    <h1 class="title">We are available all across the globe</h1>
    <p class="description">With stores all over the world, it's easy for you to find furniture for your home or place
    of business.
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our
    store locator. Any questions? Don't hesitate to contact us today.</p>
    `;
  } else if (imgNo === 3) {
    copy.innerHTML = `
    <h1 class="title">Manufactured with the best materials</h1>
    <p class="description">Our modern furniture store provide a high level of quality. Our company has invested in
    advanced technology
    to ensure that every product is made as perfect and as consistent as possible. With three decades of
    experience in this industry, we understand what customers want for their home and office.</p>
    `;
  }
});
