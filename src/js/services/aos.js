
export default function AOSInitFunction(cssBreakpoints) {
    let machQuery = '(max-width: ' + cssBreakpoints.md + 'px)';

    var AOS = require('aos');

    AOS.init({
        useClassNames: true,
        initClassName: null,
        animatedClassName: 'animated',
        duration: 2000,
        disable: function () {
            return window.matchMedia(machQuery);
        },
        once: true
    });

    //show cookie box after start animation
    //var cookieEl = document.getElementsByClassName('cc_dialog');
    //if (typeof(cookieEl) != 'undefined' && cookieEl != null) {
    //    cookieEl.setAttribute("style", "opacity:1;");
    //}

    window.addEventListener('resize', AOS.refresh());


}