export default (() => {
  const body = $("body");
  const header = $("#header");
  const navbar = $("#navbar");
  const navMenu = navbar.find(".nav-menu");
  const navLinks = navbar.find(".nav-link");

  navMenu.on('show.bs.collapse', function (e) {
    setTimeout(() => {                          // setTimeout() here to fix events priority (show fires first without it)
      header.addClass("header-active");
      navbar.addClass("navbar-active");
      body.addClass("body-overflow");
      $(e.target.parentElement).find(".nav-link").addClass("nav-link-active");
    },1)
  });

  navMenu.on('hide.bs.collapse', function () {
    navLinks.removeClass("nav-link-active");

    setTimeout(() => {                          // setTimeout() here to fix flickering on toggle (remove classes only if no other panel was opened)
      if (!header.find(".nav-link-active").length) {
        header.removeClass("header-active");
        navbar.removeClass("navbar-active");
        body.removeClass("body-overflow");
      }
    },2)
  });

  if (body.hasClass("page-home")) {
    $(window).on("scroll", function () {
      $(this).scrollTop() > 1 ? header.removeClass("header-home") : header.addClass("header-home")
    });

    $(window).trigger("scroll");
  }
})();