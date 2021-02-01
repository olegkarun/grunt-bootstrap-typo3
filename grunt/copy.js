/*
 * 
 * copy fonts and images from ./node_modules/
 * copy fonts and images from /src to /dist foldeer
 * @todo sremove all src/ mode_modules grunt/ on production or copy just ./dist
 * 
 */

(function () {



    module.exports = {

        static: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: '<%= global.srcPath %>',
                    dest: '<%= global.distPath %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'fonts/{,*/}*.*',
                        'static/{,*/}*.*'                        
                    ]
                }, {
                    expand: true, //<--Bootstrap
                    dot: true,
                    cwd: './node_modules/bootstrap/dist/fonts',
                    src: ['*.*'],
                    dest: '<%= global.distPath %>/fonts/'
                }, {
                    expand: true, //<--Fontawesome
                    dot: true,
                    cwd: './node_modules/font-awesome/fonts/',
                    src: ['*.*'],
                    dest: '<%= global.distPath %>/fonts/'
                }, {
                    expand: true, //<--video.js
                    dot: true,
                    cwd: './node_modules/video.js/dist/font',
                    src: ['*.*'],
                    dest: '<%= global.distPath %>/fonts/'
                }]
        }
    }

}
)(); 