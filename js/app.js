$(function () {
  let navbar = $(".navbar");
  $(window).scroll(function () {
    let scrTop = $(window).scrollTop();

    if (scrollTop > 200) {
      navbar.addClass(".menufixed");
    } else {
      navbar.removeClass(".menufixed");
    }
  });

  $(window).ready(function () {
    let preloader = $(".preloader");
    preloader.delay(1000).fadeOut(400);
  });
  // aos
  AOS.init();

  // progressbar
});
