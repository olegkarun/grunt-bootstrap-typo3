(function () {
    'use strict';

    module.exports = {
        options: {
            limit: 5
        },
        // Task for dev
        development: [
            'copy:static',
            'sass:dev'
        ],
        
        // Tasks for prod
        production: [
            'copy:static',
            'sass:prod',
            'browserify:prod'
        ],
        
        // AutoPrefixer and Uglify
        minify: [
          'postcss:prod',
          'uglify:prod'    
        ],
        
        // Build sprite and JS iject
        sprite: [
            'svgstore',
            'svginjector'
        ]
    };

})();
