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

            cwd: './dist/css/',
            src: '*.css',
            dest: './dist/css/',
            expand: true,
            ext: '.css'

        },
        
        prod: {
            options: {
                map: false,
                processors: [
                    require('autoprefixer')({overrideBrowserslist: 'last 2 versions, Safari 8'}),  // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            cwd: './dist/css/',
            src: '*.css',
            dest: './dist/css/',
            expand: true,
            ext: '.css'
        }

    };
}
)(); 