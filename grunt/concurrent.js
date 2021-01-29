(function () {
    'use strict';

    module.exports = {
        options: {
            limit: 5
        },
        // Task for dev
        development: [
            'sass:dev'
        ],
        // Tasks for prod
        production: [
            'sass:prod'
        ],
        
        icons: [
            'svgstore',
            'svginjector'
        ]
    };

})();
