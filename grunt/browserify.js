/*
 * https://mitchgavan.com/es6-modules/
 */

(function () {

    module.exports = {

        // Development process JS compile
        dev: {
            src: [
                "./src/js/app.js",
                "./src/js/sprite.js" //<!-- example how get separate file
            ],
            
            dest: './dist/js/app.js',
            options: {
                browserifyOptions: {debug: true},
                transform: [["babelify", {"presets": ["@babel/preset-env"]}]],
                //<!-- example how get separate file
                plugin: [
                    [
                        "factor-bundle", {
                            outputs: [
                                "./dist/js/app.js",
                                "./dist/js/sprite.js"
                            ]
                        }
                    ]
                ]
            }
        }

        // Stage process Js compile


    };

})();
