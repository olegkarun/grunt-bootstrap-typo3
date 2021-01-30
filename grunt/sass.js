/*
 * https://github.com/sindresorhus/grunt-sass#readme
 * 1. Ruby No  needed
 * 2. Node SASS needed
 * 3. Just compile SASS and build source map
 * 4. Options https://github.com/sass/node-sass
 * 5. Compass need - utility for bootstrap Sass like 'darken'
 */

(function () {
    var sass = require('node-sass');
    var compass = require('compass-importer');

    var listFiles = {
        './dist/css/app.css': './src/scss/app.scss',
        './dist/css/rte.css': './src/scss/rte.scss'
    };


    module.exports = {

        // Development process SASS compile
        dev: {
            options: {
                outputStyle: "nested", //addinional expanded
                includePaths: ['./node_modules'],
                sourceComments: false,
                sourceMapEmbed: true,
                sourceMapRoot: "./dist/css/",
                sourceMap: true,
                importer: compass,
                implementation: sass            
            },
            files: listFiles
        },

        // Stage process SASS compile
        prod: {
            options: {
                outputStyle: "compressed", //addinional compact
                includePaths: ['./node_modules'],
                sourceComments: false,
                sourceMap: false,
                importer: compass,
                implementation: sass
            },
            files: listFiles
        }
    };
}
)(); 