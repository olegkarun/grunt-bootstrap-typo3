/* 
 * allow see html chnages without page reloading
 * https://github.com/gruntjs/grunt-contrib-connect
*/

(function () {
    module.exports = {
        
       remote: {
            server: {
                options: {
                    hostname: 'wtg.typozone.pro',
                    port: 8081,
                    base: './html',
                    livereload: true,
                    open:{
                      target: "http://wtg.typozone.pro:8081/html/"
                    }
                }
            }
        },


    };
}
)(); 