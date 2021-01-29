(function () {
    'use strict';

    var     templatesSourcePath = './html/',
            scriptsSourcePath = './js/',
            stylesSourcePath = './scss/',
            svgSourcePath = './svg/';

    module.exports = {
        
        options: {
            livereload: true
        },
        
        html:{
            files: [
                templatesSourcePath + '*.html'
            ]  
        },
        
        styles: {
            options:{
                spawn: false
            },
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