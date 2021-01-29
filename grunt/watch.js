(function () {
    'use strict';

    var     templatesSourcePath = './html/',
            scriptsSourcePath = './src/js/',
            stylesSourcePath = './src/scss/',
            svgSourcePath = './src/svg/';

    module.exports = {
        
        options: {
            spawn: false,
            livereload: true
        },
        
        html:{
            files: [
                templatesSourcePath + '*.html'
            ]  
        },
        
        styles: {
            files: [
                stylesSourcePath + '**/*.scss'
            ],
            tasks: [
                'sass:dev'
            ]
        },
        
        svg: {
            files: [
                svgSourcePath + '*.svg'
                
            ],
            tasks: [
                'svgstore',
                'svginjector'
            ]
        }
    };
})();