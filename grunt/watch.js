(function () {
    
    var templatesSourcePath = './html/',
            scriptsSourcePath = '<%= global.srcPath %>/js/',
            stylesSourcePath = '<%= global.srcPath %>/scss/',
            svgSourcePath = '<%= global.srcPath %>/svg/';

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