gsap.registerPlugin(ScrollTrigger);
/* Navbar Animations */

const menuBtn = document.querySelector(".menu");
const nav = document.querySelector("nav");
const logo = document.querySelector(".logo");
const navList = document.querySelector(".nav-list");

menuBtn.addEventListener("click", () => {
  const showMenu = gsap.timeline();
  showMenu
    .fromTo(
      nav,
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#fff",
      }
    )
    .fromTo(
      logo,
      {
        display: "block",
      },
      {
        display: "none",
      }
    )
    .fromTo(
      navList,
      {
        display: "none",
      },
      {
        display: "flex",
      }
    );

  if (!menuBtn.classList.contains("opened")) {
    menuBtn.classList.add("opened");
    showMenu.play();
  } else if (menuBtn.classList.contains("opened")) {
    menuBtn.classList.remove("opened");
    showMenu.reverse();
  }
});
