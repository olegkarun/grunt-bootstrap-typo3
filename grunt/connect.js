/* 
 * allow see html chnages without page reloading
 * https://github.com/gruntjs/grunt-contrib-connect
 */

(function () {
    module.exports = {

        //config by default
        remote: {
            options: {
                hostname: 'wtg.typozone.pro',
                port: 8081,
                bases: ['.'],
                livereload: true,
                open: {
                    target: "http://wtg.typozone.pro:8081/html/"
                }
            }
        },
        
        //config with key :local
        local: {
            options: {
                hostname: 'localhost',
                port: 8080,
                bases: ['.'],
                livereload: true,
                open: true
            }
        }


    };
}
)(); 