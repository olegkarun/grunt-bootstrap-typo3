'use strict';

module.exports = filepath => {
    let svgEl = document.getElementById('svg-icons');
    fetch(filepath).then(res => {
        return res.text();
    }).then(data => {
        if (typeof (svgEl) != 'undefined' && svgEl != null) {
            svgEl.innerHTML = data;
        }
        ;
    });
};