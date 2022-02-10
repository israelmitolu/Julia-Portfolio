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
