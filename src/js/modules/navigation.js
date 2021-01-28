export default (() => {
    const siteWrapper = $(".site-wrapper");
    const header = $(".website-header");
    


    // homepage header styling
    if (header.hasClass("home-mode")) {
        $(window).on("scroll", function () {
            $(this).scrollTop() > 1 ? header.addClass("scroll") : header.removeClass("scroll")
        });

        $(window).trigger("scroll");
    }

})(); 