/*==================== PRELOADER ====================*/
$(function () {
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow", function () {
      $(this).remove();
    });
  });
});

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: "top",
  distance: "30px",
  duration: 2000,
  reset: true,
});

sr.reveal(
  `.hero-intro h1, .hero-intro p, .hero-img, .social-links a, .experience-col, .contact-col`,
  {
    interval: 200,
  }
);

/*==================== CUSTOM CURSOR ====================*/
let cursorBall = document.querySelector(".cursor-ball");
let cursorOutline = document.querySelector(".cursor-outline");
let links = document.querySelectorAll(".social-links a");

document.addEventListener("mousemove", (e) => {
  cursorBall.style.top = e.pageY + "px";
  cursorBall.style.left = e.pageX + "px";

  cursorOutline.style.top = e.pageY + "px";
  cursorOutline.style.left = e.pageX + "px";
});

document.addEventListener("mousedown", (e) => {
  if (e.button === 0) {
    cursorOutline.classList.add("cursor-mousedown");
  }
});
document.addEventListener("mouseup", () => {
  cursorOutline.classList.remove("cursor-mousedown");
});

links.forEach((link) => {
  link.addEventListener("mouseover", () => {
    cursorOutline.classList.add("scale-link");
    link.classList.add("hovered-link");
  });

  link.addEventListener("mouseleave", () => {
    cursorOutline.classList.remove("scale-link");
    link.classList.remove("hovered-link");
  });
});
