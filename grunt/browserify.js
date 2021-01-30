/*
 * https://mitchgavan.com/es6-modules/
 */

(function () {

    module.exports = {

        // Development process JS compile
        dev: {
            files: {
                '<%= global.distPath %>/js/app.min.js': '<%= global.srcPath %>/js/app.js'
            },
            options: {
                browserifyOptions: {debug: true},
                transform: [
                    [
                        "babelify", {
                            "presets": ["@babel/preset-env"]}
                    ]
                ],
                plugin: [
                    'exorcist' //Move Browserify source maps to a separate file using Exorcist
                ]
            }
        }

        // Stage process Js compile


    };

})();
