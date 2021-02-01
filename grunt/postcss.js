/* 
 * https://github.com/nDmitry/grunt-postcss 
 * 
 */

(function () {

    var autoprefixer = require('autoprefixer');

    module.exports = {

        dev: {
            options: {
                map: true
            },

            cwd: '<%= global.distPath %>/css/',
            src: '*.css',
            dest: '<%= global.distPath %>/css/',
            expand: true,
            ext: '.min.css'

        },
        
        prod: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')(),  // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            cwd: '<%= global.distPath %>/css/',
            src: '*.css',
            dest: '<%= global.distPath %>/css/',
            expand: true,
            ext: '.min.css'
        }

    };
}
)(); 