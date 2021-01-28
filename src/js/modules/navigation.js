export default (() => {
    const $siteWrapper = $(".website-wrapper");
    const $header = $(".website-header");

    const $navbarCollapse = $('.website-header .nav-dropdown, .website-header .navbar-collapse');
    const openMenuClass = 'menu-open'; 

    //add class faster
    $navbarCollapse.on('show.bs.collapse', function (e) {
        $siteWrapper.addClass(openMenuClass); 
    });
    $navbarCollapse.on('shown.bs.collapse hidden.bs.collapse', function (e) {
        if ($navbarCollapse.hasClass('show')) {
            $siteWrapper.addClass(openMenuClass);
        } else {
            $siteWrapper.removeClass(openMenuClass);
        }
    });
 
    // homepage header styling
    if ($header.hasClass('home')) {
        $(window).on("scroll", function () {
            $(this).scrollTop() > 1 ? $header.addClass('dark') : $header.removeClass('dark');
        });
        $(window).trigger("scroll");
    }

    // close all 
    window.onresize = function () {
        $header.find('.collapse.show').collapse('hide');
    };

})();  