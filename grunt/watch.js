(function () {
    
    var templatesSourcePath = './html/',
            scriptsSourcePath = './src/js/',
            stylesSourcePath = './src/scss/',
            svgSourcePath = './src/svg/';

    module.exports = {

        options: {
            spawn: false,
            livereload: true
        },

        html: {
            files: [
                templatesSourcePath + '*.html'
            ]
        },

        js: {
            files: [
                scriptsSourcePath + '**/*.js'
            ],
            tasks: [
                'browserify:dev'
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

        sprite: {
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