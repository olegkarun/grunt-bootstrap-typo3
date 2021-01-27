export default (() => {
  const body = $("body");
  const siteWrapper = $(".site-wrapper");
  const header = $("#header .header");
  const navbar = $("#navbar .navbar"); 
  const navbarContent = navbar.find("#mainNav");
  const navMenu = navbar.find(".nav-menu");
  const navMenuSubsection = navMenu.find(".nav-menu-subsection");

  // main navigatiion collapse (hamburger)
  navbarContent.on('show.bs.collapse', function() {
    setTimeout(() => {                          // setTimeout() here to fix events priority (show fires first without it)
      header.addClass("header-active");
      navbar.addClass("navbar-active");
      body.addClass("body-overflow");
    },1)
  });

  // main navigatiion collapse (hamburger)
  navbarContent.on('hide.bs.collapse', function() {
    header.removeClass("header-active");
    navbar.removeClass("navbar-active");
    body.removeClass("body-overflow");
  });

  // top level collapse
  navMenu.on('show.bs.collapse', function (e) {
    e.stopPropagation();

    setTimeout(() => {                          // setTimeout() here to fix events priority (show fires first without it)
      $(e.target.parentElement).children(".nav-controls").addClass("active");
      $(e.target.parentElement).find(".nav-link-top").addClass("nav-link-active");

      header.addClass("header-active");
      navbar.addClass("navbar-active");
      body.addClass("body-overflow");      
    },1)
  });

  // top level collapse
  navMenu.on('hide.bs.collapse', function (e) {
    e.stopPropagation();

    $(e.target.parentElement).children(".nav-controls").removeClass("active");
    $(e.target.parentElement).find(".nav-link-top").removeClass("nav-link-active");
 
    setTimeout(() => {                          // setTimeout() here to fix flickering on toggle (remove classes only if no other panel was opened)
      if (!header.find(".nav-link-active").length && $(window).width() > 1279) {
        header.removeClass("header-active");
        navbar.removeClass("navbar-active");
        body.removeClass("body-overflow");
      }
    },2)
  });

  // subsection collapse
  navMenuSubsection.on('show.bs.collapse', function (e) {
    e.stopPropagation();

    if ($(window).width() > 1279) {
      e.preventDefault();
    }

    setTimeout(() => {
      $(e.target.parentElement).children(".nav-controls").addClass("active");
    }, 1)
  });

  // subsection collapse
  navMenuSubsection.on('hide.bs.collapse', function (e) {
    e.stopPropagation();

    if ($(window).width() > 1279) {
      e.preventDefault();
    }

    $(e.target.parentElement).children(".nav-controls").removeClass("active");
  });

  $(window).on("resize", function() {
    // when switching from mobile to desktop
    // if main navigation collapse is shown and no top level collapse is shown
    // close main navigation collapse
    if (navbarContent.hasClass("show") && !navMenu.hasClass("show") && header.hasClass("header-active") && $(window).width() > cssBreakpoints.md - 1) {
      navbarContent.collapse("hide");
    }

    // when switching from mobile to desktop
    // if no main navigation collapse is shown and any top level collapse is shown
    // close all collapses
    if (!navbarContent.hasClass("show") && navMenu.hasClass("show") && !header.hasClass("header-active") && $(window).width() > cssBreakpoints.md - 1) {      
      $(".nav-menu.show").collapse("hide");
    }

    // when switching from desktop to mobile
    // if no main navigation collapse is shown and any top level collapse is shown
    // open main navigation collapse
    if (!navbarContent.hasClass("show") && navMenu.hasClass("show") && header.hasClass("header-active") && $(window).width() < cssBreakpoints.md) {
      navbarContent.collapse("show");
    }

    // when switching from desktop to mobile
    // if main navigation collapse is shown and no top level collapse is shown
    // close main navigation collapse
    if (navbarContent.hasClass("show") && !navMenu.hasClass("show") && !header.hasClass("header-active") && $(window).width() < cssBreakpoints.md) {
      navbarContent.collapse("hide");
    }
  });

  // homepage header styling
  if (siteWrapper.hasClass("page-home")) {
    $(window).on("scroll", function () {
      $(this).scrollTop() > 1 ? header.removeClass("header-home") : header.addClass("header-home")
    });
  
    $(window).trigger("scroll");
  }
})(); 