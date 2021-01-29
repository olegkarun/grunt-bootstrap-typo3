/*
 * @todo include fonts/images just from /dist/
 * 
 */

(function () {

    var distPath = './dist',
            srcPath = './src';

    module.exports = {

        static: {
            files: [
                {
                    expand: true,
                    dot: true,
                    cwd: srcPath,
                    dest: distPath,
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.webp',
                        '{,*/}*.html',
                        'fonts/{,*/}*.*'
                    ]
                }, {
                    expand: true, //<--Bootstrap
                    dot: true,
                    cwd: './node_modules/bootstrap/dist/fonts',
                    src: ['*.*'],
                    dest: distPath + '/fonts/'
                }, {
                    expand: true, //<--Fontawesome
                    dot: true,
                    cwd: './node_modules/font-awesome/fonts/',
                    src: ['*.*'],
                    dest: distPath + '/fonts/'
                }, {
                    expand: true, //<--Fontawesome
                    dot: true,
                    cwd: './node_modules/video.js/dist/font',
                    src: ['*.*'],
                    dest: distPath + '/fonts/'
                }]
        }
    }

}
)(); 